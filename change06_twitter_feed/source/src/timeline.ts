import { Easing } from "remotion";
import { KEY, LINES, ORDER } from "./keyframes";
import { aim, SceneState, scrollTo } from "./Scene";
import { FeedItem } from "./ui/Phone";
import { PostKey } from "./ui/Post";

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
const SCROLL_F = REF.length - 1; // 41 f; ~95% there by f+24, the rest only creeps

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
// the ref03 scroll. Leaving post blurs as the motion starts, arriving post
// sharpens as it slows. Returns the frame the next beat can start (tail still creeping).
const scroll = (f: number, from: PostKey, k: PostKey, zoom = READ, dy = 0, part: "text" | "media" = "text") => {
  T.scroll.move(f, f + SCROLL_F, to(k, part), E.ref);
  cam(f, f + 28, zoom, dy, E.ref);
  unfocus(from, f, f + 9);
  focus(k, f + 12, f + 26);
  return f + 24;
};

// 01  X launch screen, then the first post racks into focus
T.splashOp.move(0, 7, 1, E.out).move(14, 22, 0);
T.splashScale.move(0, 7, 1, E.out).move(14, 22, 1.05);
T.worldOp.move(22, 36, 1, E.out);
T.worldBlur.move(22, 36, 0, E.out);
T.zoom.move(22, 36, READ, E.out);
focus("noisy", 22, 36);
// 02  $2.4M at 18
read("noisy", 44);
mark("noisy", 52);
// 03  even a 14-year-old
let n = scroll(74, "noisy", "viipin", READ, 30);
read("viipin", n);
mark("viipin", n + 8);
// 04  software is dead (holds a little longer)
n = scroll(128, "viipin", "intcyber", READ, 40);
read("intcyber", n);
mark("intcyber", n + 8);
// 05  $40k MRR, zero employees
n = scroll(192, "intcyber", "deronin", READ, 20, "media");
read("deronin", n, 1);
mark("deronin", n + 8);
// 06  a scroll starts building... hard cut on its speed peak to: It's over.
T.scroll.move(246, 255, to("deronin", "media") + 420, E.accel);
unfocus("deronin", 246, 252);
const CUT = 255;
const overAy = aim(ITEMS, "himanshu", to("himanshu"), "text").ay;
T.scroll.cut(CUT, to("himanshu"));
T.ax.cut(CUT, 68 + 36);
T.ay.cut(CUT, overAy);
T.zoom.cut(CUT, 6.2);
for (const k of new Set(ORDER)) P[k].fade.cut(CUT, 0);
P.himanshu.fade.cut(CUT, 1);
P.himanshu.blur.cut(CUT, 0);
P.himanshu.dim.cut(CUT, 1);
P.himanshu.media.cut(CUT, 0);
mark("himanshu", CUT + 4);
// the text alone, then the camera eases down as the video fades up
T.scroll.move(290, 318, to("himanshu", "media"));
cam(290, 318, READ);
P.himanshu.media.move(290, 314, 1);
for (const k of new Set(ORDER)) if (k !== "himanshu") P[k].fade.move(296, 318, REST.fade);
// 07  kurzgesagt: text, then down onto the video
n = scroll(334, "himanshu", "finn", READ, 50);
read("finn", n);
mark("finn", n + 8);
T.scroll.move(388, 410, to("finn", "media"));
cam(388, 410, READ);
P.finn.media.move(388, 406, 1);
// 08  the motion tools video
n = scroll(430, "finn", "nero", 3.2, 0, "media");
read("nero", n, 1);
// 09  mike, sound on (110 f), then the hard cut out
n = scroll(494, "nero", "mike", 3.2, 0, "media");
read("mike", n, 1);
T.zoom.move(522, 626, 3.4, (t) => t);
export const DURATION = 630;

// Media playing windows (composition frames). trimBefore is in the clip's own frames.
// clock = [seconds into the ORIGINAL video where the clip starts, original length]
// so the duration chip counts down the real remaining time, like X.
export type MediaWin = { src: string; from: number; trimBefore?: number; loop?: boolean; volume?: number; clock?: [number, number] };
export const MEDIA: Partial<Record<PostKey, MediaWin>> = {
  noisy: { src: "vid/noisy.mp4", from: 40, clock: [1, 4129.3] },
  himanshu: { src: "vid/himanshu.mp4", from: 292, clock: [0, 37.7] },
  finn: { src: "vid/finn.mp4", from: 362, trimBefore: Math.round(2.0 * FPS), clock: [4, 30.22] },
  nero: { src: "vid/nero.mp4", from: 456, trimBefore: Math.round(2.6 * FPS), clock: [9.6, 28.35] },
  mike: { src: "vid/mike_tight.mp4", from: 516, volume: 1, clock: [22.7, 1162.9] },
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
