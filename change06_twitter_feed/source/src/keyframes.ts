import { aim, SceneState, scrollTo } from "./Scene";
import { FeedItem } from "./ui/Phone";
import { PostKey, PostLook } from "./ui/Post";

// One continuous feed, in scroll order.
export const ORDER: PostKey[] = ["noisy", "viipin", "charlie", "mike", "deronin", "nero", "finn", "intcyber", "olehmann", "humza", "himanshu"];

// Key text per post (from Rachit). lit = stays white, bar = highlighter.
export const KEY: Partial<Record<PostKey, PostLook>> = {
  noisy: { lit: "They built an automated business making $2.4M with Opus 5 at 18", bar: "making $2.4M with Opus 5 at 18", barColor: "white" },
  viipin: { lit: "Even a 14-year-old can do it.", bar: "Even a 14-year-old can do it.", barColor: "white" },
  charlie: { lit: "I turned Claude into an entire company.", bar: "I turned Claude into an entire company.", barColor: "orange" },
  mike: { lit: "how I as a CEO am using Claude Code as my AI Chief of Staff" },
  deronin: { bar: "I run a $40k MRR agency with zero employees" },
  nero: { lit: "motionvideo is a collection of motion designs people build with Claude Opus 5.5", bar: "motion designs people build with Claude Opus 5.5", barColor: "orange" },
  finn: { lit: "i just re created kurzgesagt's entire channel in 10 minutes with claude opus", bar: "entire channel in 10 minutes", barColor: "white" },
  intcyber: { lit: "Software is dead, long live software!", bar: "Software is dead, long live software!", barColor: "white" },
  olehmann: { lit: "Anthropic's entire growth marketing team was just ONE PERSON", bar: "was just ONE PERSON", barColor: "white" },
  humza: { lit: "run a 10-person company with zero employees", bar: "with zero employees", barColor: "white" },
  himanshu: { lit: "It's over.", bar: "It's over.", barColor: "white" },
};

const feed = (focus?: PostKey, look: PostLook = {}): FeedItem[] =>
  ORDER.map((k) => ({ k, look: { maxLines: k === "intcyber" ? 9 : k === "humza" || k === "olehmann" ? 5 : 6, ...(k === focus ? { ...KEY[k], ...look } : focus && look.dim ? { dim: look.dim } : {}) } }));

// Phone view: the phone big, cropped, tilted; text post near the optical centre.
const phoneCam = (items: FeedItem[], k: PostKey, scroll: number, zoom = 2.05, rx = 7, ry = -9) => ({ ...aim(items, k, scroll, "post"), zoom, rx, ry, ax: 220 });
const punch = (items: FeedItem[], k: PostKey, scroll: number, zoom = 4.4, part: "text" | "media" = "text", dy = 0) => ({ ...aim(items, k, scroll, part, dy), zoom, rx: 2, ry: -3 });

export type KF = { f: number; beat: string; note: string; s: SceneState };

const mk = (): KF[] => {
  const out: KF[] = [];
  const add = (f: number, beat: string, note: string, s: SceneState) => out.push({ f, beat, note, s });

  // 1 WAKE
  let it = feed();
  let sc = 0;
  add(0, "01 WAKE", "black -> screen lights up. phone huge, tilted, edge barely visible. VO: 'Every time you open Twitter'", { items: it, scroll: sc, screenOn: 0.35, cam: { ax: 230, ay: 330, zoom: 2.0, rx: 10, ry: -12 } });

  // 2 first catch on noisy
  sc = scrollTo(it, "noisy", 430, "post");
  add(14, "02 CATCH", "slow human flick, thumb catches post 1. still phone view", { items: it, scroll: sc, cam: phoneCam(it, "noisy", sc) });

  // 3 punch noisy + highlight
  it = feed("noisy", { dim: 1, barP: 1 });
  add(30, "03 PUNCH  $2.4M AT 18", "blur-punch into the text (phone leaves frame). rest dims to 35%. white bar sweeps 'making $2.4M with Opus 5 at 18'", { items: it, scroll: sc, cam: punch(it, "noisy", sc, 4.3) });

  // 4 viipin
  it = feed("viipin", { dim: 1, barP: 0.55 });
  sc = scrollTo(it, "viipin", 430, "text");
  add(64, "04 EVEN A 14-YEAR-OLD", "pull back, quick flick, catch. punch. bar mid-sweep (age ladder 18 -> 14)", { items: it, scroll: sc, cam: punch(it, "viipin", sc, 4.6) });

  // 5 charlie text, orange bar
  it = feed("charlie", { dim: 1, barP: 1 });
  sc = scrollTo(it, "charlie", 300, "text");
  add(98, "05 CLAUDE = A COMPANY", "ORANGE bar (it names Claude). the org-chart video below already playing", { items: it, scroll: sc, cam: punch(it, "charlie", sc, 3.9, "text", 40) });

  // 6 charlie video focus
  it = feed("charlie", { dim: 0.6, barP: 1 });
  add(124, "06 VIDEO FOCUS: ORG CHART", "rack-focus down into the video: 42 orange crabs light up the org chart", { items: it, scroll: sc, cam: punch(it, "charlie", sc, 2.6, "media") });

  // 7 mike video, sound on
  it = feed("mike", { dim: 0.8 });
  sc = scrollTo(it, "mike", 430, "media");
  add(158, "07 MIKE (SOUND ON)", "flick, lands on video. autoplays 8f after settle, push-in to ~75% frame, UNMUTES:\n'how I'm using Claude Code as my primary system to run both my personal life and my company' (tight cut ~5 s)", { items: it, scroll: sc, cam: punch(it, "mike", sc, 4.2, "media") });

  // 8 deronin article
  it = feed("deronin", { dim: 1, barP: 1 });
  sc = scrollTo(it, "deronin", 430, "media");
  add(286, "08 $40K MRR, ZERO EMPLOYEES", "article card. bar on the preview line. cover art = guy alone on a laptop", { items: it, scroll: sc, cam: punch(it, "deronin", sc, 3.4, "media", 30) });

  // 9 nero video
  it = feed("nero", { dim: 0.9, barP: 1 });
  sc = scrollTo(it, "nero", 430, "media");
  add(316, "09 MOTION DESIGN BY CLAUDE", "video focus: the motion gallery (orange dot). this one is aimed at YOU (motion designer)", { items: it, scroll: sc, cam: punch(it, "nero", sc, 3.9, "media") });

  // 10 finn text
  it = feed("finn", { dim: 1, barP: 1 });
  sc = scrollTo(it, "finn", 300, "text");
  add(352, "10 KURZGESAGT IN 10 MIN", "text punch, bar 'entire channel in 10 minutes'. video below, soft", { items: it, scroll: sc, cam: punch(it, "finn", sc, 4.0, "text", 60) });

  // 11 finn video
  it = feed("finn", { dim: 0.7, barP: 1 });
  add(380, "11 SECONDARY FOCUS: THE VIDEO", "rack-focus down: their Sun-vanishes explainer counting down", { items: it, scroll: sc, cam: punch(it, "finn", sc, 3.0, "media") });

  // 12 intcyber
  it = feed("intcyber", { dim: 1, barP: 1 });
  sc = scrollTo(it, "intcyber", 430, "text");
  add(410, "12 SOFTWARE IS DEAD", "punch, bar on the last line only, rest dims (ref04 move)", { items: it, scroll: sc, cam: punch(it, "intcyber", sc, 4.4, "text", 30) });

  // 13 overload
  it = feed();
  sc = scrollTo(it, "humza", 400, "post");
  add(436, "13 OVERLOAD FLING", "pull all the way out. fling: feed smears into streaks. '99+ new posts' pill", { items: it, scroll: sc, streak: 28, newPosts: "99+ new posts", cam: { ax: 205, ay: 330, zoom: 1.55, rx: 9, ry: -11 } });

  // 14 flash frames
  it = feed("olehmann", { dim: 1, barP: 1 });
  sc = scrollTo(it, "olehmann", 430, "text");
  add(452, "14 FLASHES (1-2f each)", "single-frame punches inside the fling: ONE PERSON / zero employees / $1B one-person company", { items: it, scroll: sc, cam: punch(it, "olehmann", sc, 4.6, "text", 20) });

  // 15 it's over
  it = feed("himanshu", { dim: 1, barP: 1 });
  sc = scrollTo(it, "himanshu", 430, "text");
  add(470, "15 IT'S OVER.", "hard catch. biggest punch of the piece. bar. hold.", { items: it, scroll: sc, cam: { ...punch(it, "himanshu", sc, 6.5, "text"), ax: 120 } });

  // 16 scroll down to the video
  it = feed("himanshu", { dim: 0.85, barP: 1 });
  add(500, "16 ...AND THE VIDEO", "slow scroll down: 'It's over.' slides up, AI-made 3D sites play. hard cut -> line 11 'constant anxiety'", { items: it, scroll: sc + 150, cam: punch(it, "himanshu", sc + 150, 3.1, "media", -40) });

  return out;
};

export const KEYFRAMES = mk();
