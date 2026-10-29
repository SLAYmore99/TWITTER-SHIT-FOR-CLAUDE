import { Easing } from "remotion";
import { KEY, LINES, ORDER } from "./keyframes";
import { aim, Cam, SceneState, scrollTo } from "./Scene";
import { FeedItem } from "./ui/Phone";
import { PostKey } from "./ui/Post";

export const FPS = 24000 / 1001;

// Static layout of the whole feed (key-text looks and line counts never change,
// so post positions never jump). Only the numbers below animate.
export const ITEMS: FeedItem[] = ORDER.map((k) => ({ k, look: { ...KEY[k], maxLines: LINES[k] ?? 6 } }));

type Anim = { fade: number; dim: number; barP: number; mediaOpacity: number };
type Ease = (t: number) => number;
type State = {
  cam: Required<Pick<Cam, "ax" | "ay" | "zoom">>;
  scroll: number;
  screenOn: number;
  streak: number;
  rest: number; // opacity of posts not listed in `posts`
  posts: Partial<Record<PostKey, Partial<Anim>>>;
  newPosts?: string;
};
type Key = { f: number; s: State; ease: Ease; cut?: boolean };

export const E = {
  catch: Easing.bezier(0.05, 0.7, 0.1, 1), // thumb flick: fast start, hard settle
  inout: Easing.bezier(0.65, 0, 0.35, 1), // camera moves
  out: Easing.bezier(0.23, 1, 0.32, 1),
  bar: Easing.bezier(0.3, 0.75, 0.35, 1), // marker: fast start, slow finish (ref05)
  linear: (t: number) => t,
};

const MID = 426; // screen y (pts) that sits at frame centre when reading
const PHONE = { ax: 393 / 2, ay: 852 / 2, zoom: 1.15 };
const read = (zoom: number, dy = 0) => ({ ax: 393 / 2, ay: MID + dy, zoom });
const to = (k: PostKey, part: "text" | "media" | "post" = "text") => scrollTo(ITEMS, k, MID, part);

// ---- the timeline --------------------------------------------------------
const keys: Key[] = [];
let cur: State = { cam: PHONE, scroll: scrollTo(ITEMS, "noisy", 700, "post"), screenOn: 0, streak: 0, rest: 0.5, posts: {} };
const at = (f: number, patch: Partial<State> | ((s: State) => Partial<State>), ease: Ease = E.inout, cut = false) => {
  const p = typeof patch === "function" ? patch(cur) : patch;
  cur = { ...cur, ...p, posts: p.posts ? { ...cur.posts, ...p.posts } : cur.posts };
  keys.push({ f, s: cur, ease, cut });
};
const focus = (k: PostKey, extra: Partial<Anim> = {}) => ({ [k]: { fade: 1, dim: 0, barP: 0, ...extra } });
const all = (a: Partial<Anim>) => Object.fromEntries(ORDER.map((k) => [k, { ...a }])) as State["posts"];
const recede = (...ks: PostKey[]) => Object.fromEntries(ks.map((k) => [k, { fade: 0.1, dim: 1, barP: 1 }]));

// 01-03  wake, first catch, read
at(0, {});
at(8, { screenOn: 1 }, E.out);
at(12, {});
at(24, { scroll: scrollTo(ITEMS, "noisy", MID, "post"), rest: 0.25, posts: focus("noisy") }, E.catch);
at(38, { cam: read(2.9), scroll: to("noisy"), rest: 0.1 }, E.inout);
at(43, { posts: { noisy: { fade: 1, dim: 1, barP: 0 } } }, E.out);
at(56, { posts: { noisy: { fade: 1, dim: 1, barP: 1 } } }, E.bar);
at(68, {});
// 04  viipin
at(79, { scroll: to("viipin"), cam: read(2.9, 40), posts: { ...recede("noisy"), ...focus("viipin") } }, E.catch);
at(84, { posts: { viipin: { fade: 1, dim: 1 } } }, E.out);
at(96, { posts: { viipin: { fade: 1, dim: 1, barP: 1 } } }, E.bar);
at(106, {});
// 05-06  charlie text, then glide down to the org chart
at(117, { scroll: to("charlie"), cam: read(2.9, 90), posts: { ...recede("viipin"), ...focus("charlie") } }, E.catch);
at(122, { posts: { charlie: { fade: 1, dim: 1 } } }, E.out);
at(134, { posts: { charlie: { fade: 1, dim: 1, barP: 1 } } }, E.bar);
at(141, {});
at(156, { scroll: to("charlie", "media"), cam: read(2.4) }, E.inout);
at(172, {});
// 07  mike: video, sound on (clip 7.27 s = 174 f, starts at 190)
at(184, { scroll: to("mike", "media"), cam: read(3.2), posts: { ...recede("charlie"), mike: { fade: 1, dim: 1 } } }, E.catch);
at(364, { cam: read(3.45) }, E.linear);
// 08  deronin article
at(375, { scroll: to("deronin", "media"), cam: read(2.9, 20), posts: { ...recede("mike"), ...focus("deronin", { dim: 1 }) } }, E.catch);
at(389, { posts: { deronin: { fade: 1, dim: 1, barP: 1 } } }, E.bar);
at(402, {});
// 09  nero video
at(413, { scroll: to("nero", "media"), cam: read(3.2), posts: { ...recede("deronin"), nero: { fade: 1, dim: 1 } } }, E.catch);
at(456, { cam: read(3.35) }, E.linear);
// 10-11  finn text, then the video
at(467, { scroll: to("finn"), cam: read(2.9, 60), posts: { ...recede("nero"), ...focus("finn") } }, E.catch);
at(472, { posts: { finn: { fade: 1, dim: 1 } } }, E.out);
at(484, { posts: { finn: { fade: 1, dim: 1, barP: 1 } } }, E.bar);
at(492, {});
at(506, { scroll: to("finn", "media"), cam: read(2.9) }, E.inout);
at(536, {});
// 12  intcyber
at(545, { scroll: to("intcyber"), cam: read(2.9, 40), posts: { ...recede("finn"), ...focus("intcyber") } }, E.catch);
at(550, { posts: { intcyber: { fade: 1, dim: 1 } } }, E.out);
at(562, { posts: { intcyber: { fade: 1, dim: 1, barP: 1 } } }, E.bar);
at(572, {});
// 13  overload: pull back to the small phone, fast scroll, pill climbs
at(586, { cam: PHONE, rest: 0.55, posts: all({ fade: 0.55, dim: 0, barP: 0 }), scroll: to("intcyber") + 300, streak: 2 }, E.inout);
at(587, { newPosts: "3 new posts" }, E.linear);
at(594, { newPosts: "12 new posts" }, E.linear);
at(600, { newPosts: "48 new posts" }, E.linear);
at(606, { newPosts: "99+ new posts", scroll: scrollTo(ITEMS, "himanshu", 600, "post"), streak: 6 }, E.linear);
// 15-16  hard cut: It's over.
const overAy = aim(ITEMS, "himanshu", to("himanshu"), "text").ay;
at(607, { cam: { ax: 68 + 36, ay: overAy, zoom: 6.2 }, scroll: to("himanshu"), streak: 0, rest: 0, newPosts: undefined, posts: { ...all({ fade: 0, dim: 0, barP: 0 }), himanshu: { fade: 1, dim: 1, barP: 0, mediaOpacity: 0.06 } } }, E.linear, true);
at(611, {});
at(623, { posts: { himanshu: { fade: 1, dim: 1, barP: 1, mediaOpacity: 0.06 } } }, E.bar);
at(652, {});
at(670, { posts: { himanshu: { fade: 1, dim: 1, barP: 1, mediaOpacity: 1 } } }, E.out);
at(682, { scroll: to("himanshu", "media"), cam: read(2.9) }, E.inout);
at(712, {});
export const DURATION = 712;

// 2-frame flashes inside the overload: hard cuts to single lines
type Flash = { from: number; to: number; k: PostKey };
const FLASHES: Flash[] = [
  { from: 591, to: 593, k: "olehmann" },
  { from: 598, to: 600, k: "humza" },
];

// Media playing windows (composition frames). trimBefore is in the clip's own frames.
export type MediaWin = { src: string; from: number; trimBefore?: number; loop?: boolean; volume?: number };
export const MEDIA: Partial<Record<PostKey, MediaWin>> = {
  noisy: { src: "vid/noisy.mp4", from: 26 },
  charlie: { src: "vid/charlie.mp4", from: 110, loop: true },
  mike: { src: "vid/mike_tight.mp4", from: 190, volume: 1 },
  nero: { src: "vid/nero.mp4", from: 417, trimBefore: Math.round(2.6 * FPS) },
  finn: { src: "vid/finn.mp4", from: 470, trimBefore: Math.round(2.0 * FPS) },
  himanshu: { src: "vid/himanshu.mp4", from: 655 },
};

// ---- evaluation ----------------------------------------------------------
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const anim = (s: State, k: PostKey): Anim => ({ fade: s.rest, dim: 0, barP: 0, mediaOpacity: 1, ...s.posts[k] });

const toScene = (s: State, a: (k: PostKey) => Anim): SceneState => ({
  items: ITEMS.map((it) => {
    const v = a(it.k);
    return { k: it.k, look: { ...it.look, fade: v.fade, dim: v.dim, barP: v.barP, mediaOpacity: v.mediaOpacity } };
  }),
  scroll: s.scroll,
  cam: s.cam,
  screenOn: s.screenOn,
  streak: s.streak,
  newPosts: s.newPosts,
});

export const stateAt = (f: number): SceneState => {
  const fl = FLASHES.find((x) => f >= x.from && f < x.to);
  if (fl) {
    const sc = to(fl.k);
    const s: State = { cam: { ...read(4.4, 20) }, scroll: sc, screenOn: 1, streak: 0, rest: 0, posts: { [fl.k]: { fade: 1, dim: 1, barP: 1, mediaOpacity: 0 } } };
    return toScene(s, (k) => anim(s, k));
  }
  let i = keys.findIndex((k) => k.f > f);
  if (i === -1) return toScene(keys[keys.length - 1].s, (k) => anim(keys[keys.length - 1].s, k));
  if (i === 0) i = 1;
  const A = keys[i - 1];
  const B = keys[i];
  if (B.cut) return toScene(A.s, (k) => anim(A.s, k));
  const t = B.ease(Math.min(1, Math.max(0, (f - A.f) / (B.f - A.f))));
  const s: State = {
    cam: { ax: lerp(A.s.cam.ax, B.s.cam.ax, t), ay: lerp(A.s.cam.ay, B.s.cam.ay, t), zoom: Math.exp(lerp(Math.log(A.s.cam.zoom), Math.log(B.s.cam.zoom), t)) },
    scroll: lerp(A.s.scroll, B.s.scroll, t),
    screenOn: lerp(A.s.screenOn, B.s.screenOn, t),
    streak: lerp(A.s.streak, B.s.streak, t),
    rest: lerp(A.s.rest, B.s.rest, t),
    posts: {},
    newPosts: t < 1 ? A.s.newPosts : B.s.newPosts,
  };
  return toScene(s, (k) => {
    const a = anim(A.s, k);
    const b = anim(B.s, k);
    return { fade: lerp(a.fade, b.fade, t), dim: lerp(a.dim, b.dim, t), barP: lerp(a.barP, b.barP, t), mediaOpacity: lerp(a.mediaOpacity, b.mediaOpacity, t) };
  });
};
