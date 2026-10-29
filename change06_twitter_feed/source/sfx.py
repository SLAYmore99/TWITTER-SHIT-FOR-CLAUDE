"""SFX stem for the Twitter feed section: clean, subtle whooshes and clicks.

Whooshes are driven by the same measured ref03 scroll curve as the animation
(timeline.ts REF table), so their swell and long settle line up frame-exact.
Ticks mark each highlight start, and a soft tap marks the slide-up open.
Run:  python3 sfx.py [beats.json] [out.wav]
      python3 sfx.py                                          -> public/sfx_stem.wav (v9, 12 s)
      python3 sfx.py src/beats_9s.json public/sfx_stem_9s.wav -> the 9 s option
(48 kHz stereo, 24-bit)
"""
import json
import sys
import wave

import numpy as np

SR = 48000
FPS = 24000 / 1001
BEATS = json.load(open(sys.argv[1] if len(sys.argv) > 1 else "src/beats.json"))
OUT = sys.argv[2] if len(sys.argv) > 2 else "public/sfx_stem.wav"
MARK_AT = BEATS.get("markAt", 0.8)
DUR_F = BEATS["end"]
N = int(round(DUR_F / FPS * SR))
rng = np.random.default_rng(7)

# ref03 scroll, cumulative (timeline.ts REF)
REF = np.array([0, 1, 5, 14, 28, 50, 83, 131, 197, 281, 373, 461, 532, 592, 644, 692, 732, 768, 800, 828, 853, 876, 897, 916, 933, 949, 963, 976, 988, 999, 1009, 1018, 1026, 1033, 1040, 1046, 1051, 1056, 1061, 1065, 1068, 1070], float)

# scrolls, inner scrolls and marker starts, from the same beats.json as the animation
SCROLLS = [(b["f"], b["n"], 1.0) for b in BEATS["scrolls"]] + [(b["f"], b["n"], 0.55) for b in BEATS["inner"]]
TICKS = [b["f"] + round(b["n"] * MARK_AT) for b in BEATS["scrolls"] if b["to"] != "nero"]  # highlight starts
TAPS = [0]  # slide-up open


def bezier(x1, y1, x2, y2):
    """CSS cubic-bezier as a function of t (solved by bisection), same as Remotion's Easing.bezier."""
    def f(t):
        lo, hi = 0.0, 1.0
        for _ in range(40):
            m = (lo + hi) / 2
            x = 3 * (1 - m) ** 2 * m * x1 + 3 * (1 - m) * m * m * x2 + m**3
            lo, hi = (m, hi) if x < t else (lo, m)
        m = (lo + hi) / 2
        return 3 * (1 - m) ** 2 * m * y1 + 3 * (1 - m) * m * m * y2 + m**3
    return np.vectorize(f)


calm = bezier(0.45, 0, 0.2, 1)


def scroll_curve(t):
    """timeline.ts E.ref: 45% the measured ref03 curve + 55% a calm in-out."""
    ref = np.interp(t * (len(REF) - 1), np.arange(len(REF)), REF) / REF[-1]
    return 0.45 * ref + 0.55 * calm(t)


t_frames = np.arange(N) / SR * FPS


def svf_bandpass(x, fc, q=0.9):
    """Time-varying state-variable band-pass (Chamberlin). fc per sample."""
    y = np.zeros_like(x)
    low = band = 0.0
    f = 2 * np.sin(np.pi * np.clip(fc, 20, SR / 6) / SR)
    damp = 1 / q
    for i in range(len(x)):
        high = x[i] - low - damp * band
        band += f[i] * high
        low += f[i] * band
        y[i] = band
    return y


def whoosh_env():
    """Speed of every scroll (same curve as the picture), normalised: drives level and brightness."""
    v = np.zeros(N)
    grid = np.linspace(0, 1, 401)
    vel = np.gradient(scroll_curve(grid), grid)
    vel /= vel.max()
    for f0, n, g in SCROLLS:
        x = (t_frames - f0) / n
        inside = (x >= 0) & (x <= 1)
        v[inside] = np.maximum(v[inside], g * np.interp(x[inside], grid, vel))
    return v


v = whoosh_env()
# smooth the envelope a little (no zipper), ~6 ms
k = np.hanning(int(SR * 0.006))
v = np.convolve(v, k / k.sum(), mode="same")

# air: pink-ish noise, band-passed with the centre rising with speed
white = rng.standard_normal(N)
pink = np.cumsum(white)
pink -= np.convolve(pink, np.ones(2400) / 2400, mode="same")  # remove drift (high-pass ~20 Hz)
pink /= np.abs(pink).max()
noise = 0.6 * pink + 0.4 * white / np.abs(white).max()
fc = 260 + 2200 * v**1.3  # dark when slow, a soft bright edge at peak speed
air_l = svf_bandpass(noise, fc)
air_r = svf_bandpass(np.roll(noise, 211), fc * 1.07)  # slight stereo width
level = v**1.15
L = air_l * level
R = air_r * level


def tick(at_frame, freq=2350.0, gain=1.0, length=0.022):
    """Soft UI tick: a short sine blip with a fast exponential decay."""
    n = int(SR * length)
    tt = np.arange(n) / SR
    env = np.exp(-tt / 0.0042) * (1 - np.exp(-tt / 0.0004))
    s = np.sin(2 * np.pi * freq * tt) * env + 0.25 * np.sin(2 * np.pi * freq * 2.01 * tt) * env**2
    i0 = int(at_frame / FPS * SR)
    return i0, gain * s


def tap(at_frame):
    """Gentle low tap for the open: a damped 180 Hz thump plus a soft click."""
    n = int(SR * 0.09)
    tt = np.arange(n) / SR
    s = np.sin(2 * np.pi * 180 * tt * (1 - 0.25 * tt / 0.09)) * np.exp(-tt / 0.022) * (1 - np.exp(-tt / 0.0015))
    i0 = int(at_frame / FPS * SR)
    return i0, s


# levels: whooshes peak about -24 dBFS, ticks about -26, tap about -22 (subtle under VO)
def peak_to(x, db):
    p = np.abs(x).max()
    return x * (10 ** (db / 20) / p) if p > 0 else x


Lw, Rw = peak_to(L, -24), peak_to(R, -24.5)
ck = np.zeros(N)
for f in TICKS:
    i0, s = tick(f)
    ck[i0 : i0 + len(s)] += s[: N - i0]
ck = peak_to(ck, -26)
tp = np.zeros(N)
i0, s = tap(0)
tp[i0 : i0 + len(s)] += s
tp = peak_to(tp, -22)
out = np.stack([Lw + ck + tp, Rw + ck + tp], axis=1)
fade = int(SR * 0.01)
out[-fade:] *= np.linspace(1, 0, fade)[:, None]

pcm = (np.clip(out, -1, 1) * (2**23 - 1)).astype("<i4")
b = pcm.astype("<i4").tobytes()
b24 = b"".join(b[i : i + 3] for i in range(0, len(b), 4))
with wave.open(OUT, "wb") as w:
    w.setnchannels(2)
    w.setsampwidth(3)
    w.setframerate(SR)
    w.writeframes(b24)
print(OUT, N / SR, "s")
