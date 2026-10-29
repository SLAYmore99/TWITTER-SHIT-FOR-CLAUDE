import { Easing } from "remotion";
import { KEY, LINES, ORDER } from "./keyframes";
import { SceneState, scrollTo } from "./Scene";
import { FeedItem } from "./ui/Phone";
import { CW, POSTS, PostKey } from "./ui/Post";
import { BODY, inRange, rangeOf, wrap } from "./ui/layout";

export const FPS = 24000 / 1001;

// Static layout of the whole feed (heroes + blurred fillers). Positions never change.
export const ITEMS: FeedItem[] = ORDER.map((k) => ({ k, look: { ...KEY[k], maxLines: LINES[k] ?? 6 } }));

type Ease = (t: number) => number;

// ref03 "blur and scroll" at 7.29-8.9 s, measured by phase correlation
// (cumulative px per frame at 270p): 9 f speed-up, peak, long soft settle.
const REF = [0, 1, 5, 14, 28, 50, 83, 131, 197, 281, 373, 461, 532, 592, 644, 692, 732, 768, 800, 828, 853, 876, 897, 916, 933, 949, 963, 976, 988, 999, 1009, 1018, 1026, 1033, 1040, 1046, 1051, 1056, 1061, 1065, 1068, 1070];
const refScroll: Ease = (t) => {
  const x = t * (REF.length - 1);
  const i = Math.min(REF.length - 2, Math.floor(x));
  return (REF[i] + (REF[i + 1] - REF[i]) * (x - i)) / REF[REF.length - 1];
};

export const E = {
  ref: refScroll,
  inout: Easing.bezier(0.65, 0, 0.35, 1),
  out: Easing.bezier(0.22, 1, 0.36, 1),
  bar: Easing.bezier(0.33, 0.6, 0.3, 1), // marker: quick start, long soft finish (ref05)
  accel: Easing.bezier(0.6, 0, 1, 0.6), // builds speed into the hard cut
};

// ---- tracks: every property animates on its own, so moves can overlap -----
type K = { f: number; v: number; e: Ease; cut?: boolean };
class Track {
  k: K[];
  constructor(v: number) {
    this.k = [{ f: -1e9, v, e: E.inout }];
  }
  get last() {
    return this.k[this.k.length - 1].v;
  }
  move(f0: number, f1: number, v: number, e: Ease = E.inout) {
    this.k.push({ f: f0, v: this.last, e }, { f: f1, v, e });
    return this;
  }
  cut(f: number, v: number) {
    this.k.push({ f, v, e: E.inout, cut: true });
    return this;
  }
  at(f: number) {
    const k = this.k;
    let i = k.length - 1;
    while (i > 0 && k[i].f > f) i--;
    const A = k[i];
    const B = k[i + 1];
    if (!B || B.cut || B.f === A.f) return A.v;
    const t = B.e(Math.min(1, Math.max(0, (f - A.f) / (B.f - A.f))));
    return A.v + (B.v - A.v) * t;
  }
}

const MID = 426; // screen y (pts) at frame centre when reading
const READ = 2.9;
const REST = { fade: 0.32, blur: 3.2 }; // out of focus: blurred but visible (ref03)
const to = (k: PostKey, part: "text" | "media" | "post" = "text") => scrollTo(ITEMS, k, MID, part);
// what's shown lands dead centre: media on the media column, text on the highlighted phrase
const MEDIA_X = 68 + CW / 2;
const phraseX = (k: PostKey) => {
  const p = POSTS[k];
  const r = rangeOf(p.text, KEY[k]?.bar ?? KEY[k]?.lit);
  const ws = wrap(p.text, CW, BODY.size, BODY.lineH, BODY.weight, LINES[k] ?? 6).lines.flatMap((l) => l.words).filter((w) => inRange(w, r));
  if (!ws.length) return MEDIA_X;
  const x0 = Math.min(...ws.map((w) => w.x));
  const x1 = Math.max(...ws.map((w) => w.x + w.w));
  return 68 + (x0 + x1) / 2;
};

const T = {
  scroll: new Track(to("noisy")),
  ax: new Track(393 / 2),
  ay: new Track(MID),
  zoom: new Track(2.55),
  worldOp: new Track(0),
  worldBlur: new Track(14),
  splashOp: new Track(0),
  splashScale: new Track(0.94),
};
type PT = { fade: Track; blur: Track; dim: Track; bar: Track; media: Track };
const P = {} as Record<PostKey, PT>;
for (const k of new Set(ORDER)) P[k] = { fade: new Track(REST.fade), blur: new Track(REST.blur), dim: new Track(0), bar: new Track(0), media: new Track(1) };

const cam = (f0: number, f1: number, zoom: number, dy = 0, e: Ease = E.inout, ax = 393 / 2) => {
  T.ax.move(f0, f1, ax, e);
  T.ay.move(f0, f1, MID + dy, e);
  T.zoom.move(f0, f1, zoom, e);
};
const focus = (k: PostKey, f0: number, f1: number) => {
  P[k].fade.move(f0, f1, 1);
  P[k].blur.move(f0, f1, 0);
};
const unfocus = (k: PostKey, f0: number, f1: number) => {
  P[k].fade.move(f0, f1, REST.fade);
  P[k].blur.move(f0, f1, REST.blur);
  P[k].media.move(f0, f1, 0.6);
};
// text first: the rest of the post (and its media, on text posts) recedes, then the marker
const read = (k: PostKey, f: number, media = 0.22) => {
  P[k].dim.move(f, f + 8, 1);
  P[k].media.move(f, f + 8, media);
};
const mark = (k: PostKey, f: number) => P[k].bar.move(f, f + 14, 1, E.bar);
// the ref03 scroll, resampled to n frames (quick ~22-28, longer ~30). Leaving post
// blurs as the motion starts, arriving post sharpens as it slows. Returns the frame
// the next beat can start (the tail is still creeping, like the ref).
const scroll = (f: number, n: number, from: PostKey, k: PostKey, zoom = READ, dy = 0, part: "text" | "media" = "text") => {
  T.scroll.move(f, f + n, to(k, part) - dy, E.ref);
  cam(f, f + Math.round(n * 0.7), zoom, 0, E.ref, part === "media" ? MEDIA_X : phraseX(k));
  unfocus(from, f, f + Math.round(n * 0.22));
  focus(k, f + Math.round(n * 0.3), f + Math.round(n * 0.65));
  return f + Math.round(n * 0.58);
};
// inside one post: ease down from its text to its video, same curve, video comes up
const intoMedia = (f: number, n: number, k: PostKey, zoom: number) => {
  T.scroll.move(f, f + n, to(k, "media"), E.ref);
  T.zoom.move(f, f + n, zoom, E.ref);
  T.ax.move(f, f + n, MEDIA_X, E.ref);
  P[k].media.move(f, f + Math.round(n * 0.6), 1);
};

// Rachit's cut, max 10 s: calm, every hero centred, a gentle build (holds shorten).
// 01  open on the eye: the post's video racks into focus, centred
T.scroll.cut(0, to("rock", "media"));
T.zoom.cut(0, 3.4);
T.ax.cut(0, MEDIA_X);
T.worldOp.move(0, 10, 1, E.out);
T.worldBlur.move(0, 12, 0, E.out);
focus("rock", 0, 1);
read("rock", 0, 1);
// 02  quick scroll: CLAUDE + YouTube = $$$$ / Even a 14-year-old can do it.
let n = scroll(22, 28, "rock", "viipin", 3.1);
read("viipin", n);
mark("viipin", n + 2);
// 03  quick scroll: the motion tools video, 0:04 on
n = scroll(56, 26, "viipin", "nero", 3.4, 0, "media");
read("nero", n, 1);
// 04  a little longer: Software is dead (the REA card stays in view below it)
n = scroll(90, 30, "nero", "intcyber", 2.9, -100);
read("intcyber", n, 1);
mark("intcyber", n + 4);
// 05  quick: It's over. then down into the post to its video (0:04 on)
n = scroll(132, 24, "intcyber", "himanshu", 3.4);
read("himanshu", n);
mark("himanshu", n + 2);
intoMedia(160, 16, "himanshu", 3.4);
// 06  quick: This is getting f*cking scary. then its spectrum video
n = scroll(180, 22, "himanshu", "imryven", 3.4);
read("imryven", n);
mark("imryven", n + 2);
intoMedia(207, 16, "imryven", 2.6);
export const DURATION = 239; // 9.97 s

// Media playing windows (composition frames). trimBefore is in the clip's own frames.
// clock = [seconds into the ORIGINAL video where the clip starts, original length]
// so the duration chip counts down the real remaining time, like X.
export type MediaWin = { src: string; from: number; trimBefore?: number; loop?: boolean; volume?: number; clock?: [number, number] };
export const MEDIA: Partial<Record<PostKey, MediaWin>> = {
  rock: { src: "vid/rock.mp4", from: 0, trimBefore: Math.round(0.8 * FPS), clock: [9.3, 77.8] }, // clip starts 8.5 s
  nero: { src: "vid/nero2.mp4", from: 66, trimBefore: Math.round(0.5 * FPS), clock: [4, 28.35] }, // clip starts 3.5 s
  himanshu: { src: "vid/himanshu2.mp4", from: 162, trimBefore: Math.round(0.5 * FPS), clock: [4, 37.7] },
  imryven: { src: "vid/imryven.mp4", from: 205, trimBefore: Math.round(5 * FPS), clock: [5, 15] },
};

// ---- evaluation ----------------------------------------------------------
export const stateAt = (f: number): SceneState => {
  // motion blur follows scroll speed (pts/frame), vertical only. Heavy at speed like ref03.
  const v = Math.abs(T.scroll.at(f + 0.5) - T.scroll.at(f - 0.5));
  const streak = Math.min(24, Math.max(0, v - 3) * 0.22);
  return {
    items: ITEMS.map((it) => {
      const p = P[it.k];
      return { k: it.k, look: { ...it.look, fade: p.fade.at(f), blur: p.blur.at(f), dim: p.dim.at(f), barP: p.bar.at(f), mediaOpacity: p.media.at(f) } };
    }),
    scroll: T.scroll.at(f),
    cam: { ax: T.ax.at(f), ay: T.ay.at(f), zoom: T.zoom.at(f) },
    streak,
    world: { opacity: T.worldOp.at(f), blur: T.worldBlur.at(f) },
    splash: { opacity: T.splashOp.at(f), scale: T.splashScale.at(f) },
  };
};
