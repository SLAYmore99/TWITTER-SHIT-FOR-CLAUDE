import { Easing } from "remotion";
import { KEY, LINES, ORDER } from "./keyframes";
import { aim, SceneState, scrollTo } from "./Scene";
import { FeedItem } from "./ui/Phone";
import { PostKey } from "./ui/Post";

export const FPS = 24000 / 1001;

// Static layout of the whole feed (key-text looks and line counts never change,
// so post positions never jump). Only the numbers below animate.
export const ITEMS: FeedItem[] = ORDER.map((k) => ({ k, look: { ...KEY[k], maxLines: LINES[k] ?? 6 } }));

type Anim = { fade: number; dim: number; barP: number; mediaOpacity: number; blur: number };
type Ease = (t: number) => number;
type Cam3 = { ax: number; ay: number; zoom: number };
type State = {
  cam: Cam3;
  scroll: number;
  rest: number; // opacity of posts not in focus
  restBlur: number; // and their softness (pts)
  posts: Partial<Record<PostKey, Partial<Anim>>>;
  world: { opacity: number; blur: number };
  splash: { opacity: number; scale: number };
  pill?: string;
};
// fx = a scroll through the feed: the camera breathes out a little at mid-scroll
// and the posts passing by come up, so you feel the feed moving (ref02/ref03).
type Key = { f: number; s: State; ease: Ease; cut?: boolean; fx?: boolean };

export const E = {
  // symmetric ease in/out for every move (no instant starts: that read as a cheap swipe)
  scroll: Easing.bezier(0.7, 0, 0.3, 1),
  inout: Easing.bezier(0.65, 0, 0.35, 1),
  out: Easing.bezier(0.22, 1, 0.36, 1),
  bar: Easing.bezier(0.33, 0.6, 0.3, 1), // marker: quick start, long soft finish (ref05)
  accel: Easing.bezier(0.55, 0, 1, 0.45), // overload: builds speed into the hard cut
  linear: (t: number) => t,
};

const MID = 426; // screen y (pts) that sits at frame centre when reading
const READ = 2.9;
const read = (zoom = READ, dy = 0): Cam3 => ({ ax: 393 / 2, ay: MID + dy, zoom });
const to = (k: PostKey, part: "text" | "media" | "post" = "text") => scrollTo(ITEMS, k, MID, part);

// ---- the timeline --------------------------------------------------------
const keys: Key[] = [];
let cur: State = {
  cam: read(2.55),
  scroll: to("noisy"),
  rest: 0.1,
  restBlur: 2.5,
  posts: {},
  world: { opacity: 0, blur: 14 },
  splash: { opacity: 0, scale: 0.94 },
};
const at = (f: number, patch: Partial<State>, ease: Ease = E.inout, opts: { cut?: boolean; fx?: boolean } = {}) => {
  cur = { ...cur, ...patch, posts: patch.posts ? { ...cur.posts, ...patch.posts } : cur.posts };
  keys.push({ f, s: cur, ease, ...opts });
};
const all = (a: Partial<Anim>) => Object.fromEntries(ORDER.map((k) => [k, { ...a }])) as State["posts"];
const IN: Partial<Anim> = { fade: 1, dim: 0, barP: 0, blur: 0 };
const OUT = (barP = 0): Partial<Anim> => ({ fade: 0.1, dim: 1, barP, blur: 2.5, mediaOpacity: 0.6 });
const hold = (f: number) => at(f, {});
// text first: on text posts the media recedes with the rest of the post while the words are read
const dimIn = (f: number, k: PostKey, media = 0.22) => at(f, { posts: { [k]: { ...IN, ...cur.posts[k], dim: 1, mediaOpacity: media } } }, E.inout);
const sweep = (f: number, k: PostKey, extra: Partial<Anim> = {}) => at(f, { posts: { [k]: { ...IN, ...cur.posts[k], dim: 1, barP: 1, ...extra } } }, E.bar);
// scroll from the post in focus to the next one, focus handing over across the whole move
const scrollToPost = (f: number, from: PostKey, k: PostKey, cam: Cam3, part: "text" | "media" = "text", fromBar = 1) =>
  at(f, { scroll: to(k, part), cam, posts: { [from]: OUT(fromBar), [k]: { ...IN } } }, E.scroll, { fx: true });

// 01  X launch screen: the logo on black, under "Every time you open Twitter"
at(0, {});
at(7, { splash: { opacity: 1, scale: 1 } }, E.out);
hold(14);
// logo dissolves, the first post racks into focus at reading size, centred
at(22, { splash: { opacity: 0, scale: 1.05 } }, E.inout); // the logo leaves first
at(36, { world: { opacity: 1, blur: 0 }, cam: read(), posts: { noisy: { ...IN } } }, E.out); // then the post racks into focus
// 02  read: rest of its text dims, marker
dimIn(44, "noisy");
sweep(58, "noisy");
hold(70);
// 03  viipin
scrollToPost(88, "noisy", "viipin", read(READ, 30));
dimIn(96, "viipin");
sweep(110, "viipin");
hold(126);
// 04  charlie: no highlight, just read and move on
scrollToPost(144, "viipin", "charlie", read(READ, 60));
hold(164);
// 05  mike: the video, sound on (clip 174 f from 194)
scrollToPost(186, "charlie", "mike", read(3.2), "media", 0);
dimIn(196, "mike", 1);
at(368, { cam: read(3.4) }, E.linear);
// 06  deronin article
scrollToPost(388, "mike", "deronin", read(READ, 20), "media", 0);
dimIn(394, "deronin", 1);
sweep(404, "deronin");
hold(420);
// 07  nero video
scrollToPost(440, "deronin", "nero", read(3.2), "media");
dimIn(450, "nero", 1);
at(486, { cam: read(3.3) }, E.linear);
// 08  finn: text only (no push into the AI video)
scrollToPost(506, "nero", "finn", read(READ, 50), "text", 0);
dimIn(514, "finn");
sweep(528, "finn");
hold(544);
// 09  overload: ease out to a wider view, then a long scroll that keeps building
at(560, { cam: read(2.0), rest: 0.4, restBlur: 0.6, posts: all({ fade: 0.4, dim: 0, barP: 0, blur: 0.6 }) }, E.inout);
at(600, { scroll: scrollTo(ITEMS, "himanshu", MID + 120, "text"), pill: "99+ new posts" }, E.accel);
// 10  hard cut on the speed peak: It's over. Text first, media hidden.
const overAy = aim(ITEMS, "himanshu", to("himanshu"), "text").ay;
at(601, { cam: { ax: 68 + 36, ay: overAy, zoom: 6.2 }, scroll: to("himanshu"), rest: 0, restBlur: 2.5, pill: undefined, posts: { ...all({ fade: 0, dim: 0, barP: 0, blur: 2.5 }), himanshu: { ...IN, dim: 1, mediaOpacity: 0 } } }, E.linear, { cut: true });
hold(605);
sweep(619, "himanshu", { mediaOpacity: 0 });
hold(640);
// then the camera eases down onto the video as it fades up
at(668, { scroll: to("himanshu", "media"), cam: read(READ), posts: { himanshu: { ...IN, dim: 1, barP: 1, mediaOpacity: 1 } } }, E.inout);
hold(700);
// 11  Software is dead. The last word.
scrollToPost(720, "himanshu", "intcyber", read(READ, 40));
dimIn(728, "intcyber");
sweep(742, "intcyber");
hold(784);
export const DURATION = 784;

// pill counts up through the overload (stepped, like the app)
const PILL: [number, string][] = [[566, "3 new posts"], [576, "12 new posts"], [584, "48 new posts"], [592, "99+ new posts"]];

// 2-frame flashes inside the overload: hard cuts to single lines
type Flash = { from: number; to: number; k: PostKey };
const FLASHES: Flash[] = [
  { from: 578, to: 580, k: "olehmann" },
  { from: 588, to: 590, k: "humza" },
];

// Media playing windows (composition frames). trimBefore is in the clip's own frames.
export type MediaWin = { src: string; from: number; trimBefore?: number; loop?: boolean; volume?: number };
export const MEDIA: Partial<Record<PostKey, MediaWin>> = {
  noisy: { src: "vid/noisy.mp4", from: 40 },
  charlie: { src: "vid/charlie.mp4", from: 140, loop: true },
  mike: { src: "vid/mike_tight.mp4", from: 194, volume: 1 },
  nero: { src: "vid/nero.mp4", from: 446, trimBefore: Math.round(2.6 * FPS) },
  finn: { src: "vid/finn.mp4", from: 512, trimBefore: Math.round(2.0 * FPS) },
  himanshu: { src: "vid/himanshu.mp4", from: 646 },
};

// ---- evaluation ----------------------------------------------------------
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const anim = (s: State, k: PostKey): Anim => ({ fade: s.rest, dim: 0, barP: 0, mediaOpacity: 1, blur: s.restBlur, ...s.posts[k] });

type Eval = { s: State; a: (k: PostKey) => Anim };
const evalAt = (f: number): Eval => {
  let i = keys.findIndex((k) => k.f > f);
  if (i === -1) i = keys.length;
  if (i === 0) i = 1;
  const A = keys[i - 1];
  const B = keys[Math.min(i, keys.length - 1)];
  if (i >= keys.length || B.cut) return { s: A.s, a: (k) => anim(A.s, k) };
  const u = Math.min(1, Math.max(0, (f - A.f) / (B.f - A.f)));
  const t = B.ease(u);
  const bump = B.fx ? Math.sin(Math.PI * u) : 0; // 0 at both ends, 1 mid-scroll
  const s: State = {
    cam: { ax: lerp(A.s.cam.ax, B.s.cam.ax, t), ay: lerp(A.s.cam.ay, B.s.cam.ay, t), zoom: Math.exp(lerp(Math.log(A.s.cam.zoom), Math.log(B.s.cam.zoom), t)) * (1 - 0.09 * bump) },
    scroll: lerp(A.s.scroll, B.s.scroll, t),
    rest: lerp(A.s.rest, B.s.rest, t) + 0.3 * bump,
    restBlur: lerp(A.s.restBlur, B.s.restBlur, t) * (1 - 0.6 * bump),
    posts: {},
    world: { opacity: lerp(A.s.world.opacity, B.s.world.opacity, t), blur: lerp(A.s.world.blur, B.s.world.blur, t) },
    splash: { opacity: lerp(A.s.splash.opacity, B.s.splash.opacity, t), scale: lerp(A.s.splash.scale, B.s.splash.scale, t) },
    pill: A.s.pill,
  };
  return {
    s,
    a: (k) => {
      const a = anim({ ...A.s, rest: s.rest, restBlur: s.restBlur }, k);
      const b = anim({ ...B.s, rest: s.rest, restBlur: s.restBlur }, k);
      return { fade: lerp(a.fade, b.fade, t), dim: lerp(a.dim, b.dim, t), barP: lerp(a.barP, b.barP, t), mediaOpacity: lerp(a.mediaOpacity, b.mediaOpacity, t), blur: lerp(a.blur, b.blur, t) };
    },
  };
};

const toScene = ({ s, a }: Eval, streak: number, pill?: string): SceneState => ({
  items: ITEMS.map((it) => {
    const v = a(it.k);
    return { k: it.k, look: { ...it.look, fade: v.fade, dim: v.dim, barP: v.barP, mediaOpacity: v.mediaOpacity, blur: v.blur } };
  }),
  scroll: s.scroll,
  cam: s.cam,
  streak,
  world: s.world,
  splash: s.splash,
  pill,
});

export const stateAt = (f: number): SceneState => {
  const fl = FLASHES.find((x) => f >= x.from && f < x.to);
  if (fl) {
    const s: State = { ...cur, cam: read(4.4, 20), scroll: to(fl.k), rest: 0, restBlur: 0, world: { opacity: 1, blur: 0 }, splash: { opacity: 0, scale: 1 }, posts: { [fl.k]: { ...IN, dim: 1, barP: 1, mediaOpacity: 0 } } };
    return toScene({ s, a: (k) => anim(s, k) }, 0);
  }
  const e = evalAt(f);
  // motion blur follows scroll speed (pts/frame), vertical only, subtle
  const v = Math.abs(evalAt(f + 0.5).s.scroll - evalAt(f - 0.5).s.scroll);
  const streak = Math.min(1.6, Math.max(0, (v - 8) * 0.035));
  const pill = f >= 566 && f < 601 ? [...PILL].reverse().find(([pf]) => f >= pf)?.[1] : undefined;
  return toScene(e, streak, pill);
};
