import { aim, SceneState, scrollTo } from "./Scene";
import { FeedItem } from "./ui/Phone";
import { PostKey, PostLook } from "./ui/Post";

// One continuous feed, in scroll order.
// Heroes (Rachit's cut, 2026-10-29) with blurred filler posts between them, so every
// scroll travels through the feed like ref03. Quick scrolls pass one filler, the
// longer one (to Software is dead) passes two. Fillers are never read.
export const HEROES: PostKey[] = ["rock", "viipin", "nero", "intcyber", "himanshu", "imryven"];
export const ORDER: PostKey[] = ["rock", "noisy", "viipin", "charlie", "nero", "deronin", "olehmann", "intcyber", "humza", "himanshu", "mike", "imryven"];

// Key text per post (from Rachit). lit = stays white, bar = highlighter.
export const KEY: Partial<Record<PostKey, PostLook>> = {
  noisy: { lit: "They built an automated business making $2.4M with Opus 5 at 18", bar: "making $2.4M with Opus 5 at 18", barColor: "white" },
  viipin: { lit: "CLAUDE + YouTube = $$$$", bar: "CLAUDE + YouTube = $$$$", barColor: "white" }, // Rachit: first line only
  imryven: { lit: "This is getting f*cking scary.", bar: "This is getting f*cking scary.", barColor: "white" },
  charlie: { lit: "I turned Claude into an entire company." }, // Rachit: no highlight on this one
  mike: { lit: "how I as a CEO am using Claude Code as my AI Chief of Staff" },
  deronin: { bar: "I run a $40k MRR agency with zero employees" },
  nero: { lit: "motionvideo is a collection of motion designs people build with Claude Opus 5.5", bar: "motion designs people build with Claude Opus 5.5", barColor: "orange" },
  finn: { lit: "i just re created kurzgesagt's entire channel in 10 minutes with claude opus", bar: "entire channel in 10 minutes", barColor: "white" },
  intcyber: { lit: "Software is dead, long live software!", bar: "Software is dead, long live software!", barColor: "white" },
  olehmann: { lit: "Anthropic's entire growth marketing team was just ONE PERSON", bar: "was just ONE PERSON", barColor: "white" },
  humza: { lit: "run a 10-person company with zero employees", bar: "with zero employees", barColor: "white" },
  himanshu: { lit: "It's over.", bar: "It's over.", barColor: "white" },
};

// Lines shown before "Show more": only what's being read.
export const LINES: Partial<Record<PostKey, number>> = { noisy: 3, viipin: 2, charlie: 1, mike: 3, nero: 3, finn: 2, intcyber: 8, olehmann: 4, humza: 4, himanshu: 1, rock: 2, imryven: 1 };

// Feed for one moment. The focused post gets its key-text look; every other
// post recedes to `rest` opacity so only one thing reads at a time (idk style).
const feed = (focus?: PostKey, look: PostLook = {}, rest = 0.1): FeedItem[] =>
  ORDER.map((k) => ({
    k,
    look: {
      maxLines: LINES[k] ?? 6,
      ...(k === focus ? { ...KEY[k], ...look } : { fade: rest }),
    },
  }));

// Flat camera only: no tilt, no perspective. Zoom = px per pt.
const PHONE = 1.15; // whole phone in frame, small, a hairline on black
const READ = 2.9; // a post ~1000 px wide, big black margins (ref04)
const cam = (items: FeedItem[], k: PostKey, scroll: number, zoom: number, part: "text" | "media" | "post" = "post", dy = 0) => ({ ...aim(items, k, scroll, part, dy), ax: 393 / 2, zoom });
const phoneCam = { ax: 393 / 2, ay: 852 / 2, zoom: PHONE };

export type KF = { f: number; beat: string; note: string; s: SceneState };

const mk = (): KF[] => {
  const out: KF[] = [];
  const add = (f: number, beat: string, note: string, s: SceneState) => out.push({ f, beat, note, s });
  let it: FeedItem[];
  let sc: number;

  it = feed(undefined, {}, 0.5);
  add(0, "01 WAKE", "black. a hairline phone lights up, small and centred. VO: 'Every time you open Twitter'", { items: it, scroll: 0, screenOn: 0.4, cam: phoneCam });

  it = feed("noisy", {}, 0.25);
  sc = scrollTo(it, "noisy", 426, "post");
  add(14, "02 CATCH", "slow flick, the thumb catches post 1. the rest of the feed recedes", { items: it, scroll: sc, cam: phoneCam });

  it = feed("noisy", { dim: 1, barP: 1 });
  add(30, "03 READ  $2.4M AT 18", "push in until the post fills ~1000 px. rest of its text dims. white bar", { items: it, scroll: sc, cam: cam(it, "noisy", sc, READ, "text") });

  it = feed("viipin", { dim: 1, barP: 0.55 });
  sc = scrollTo(it, "viipin", 426, "text");
  add(64, "04 EVEN A 14-YEAR-OLD", "scroll to the next post, same framing. bar mid-sweep", { items: it, scroll: sc, cam: cam(it, "viipin", sc, READ, "text", 70) });

  it = feed("charlie", { dim: 1, barP: 1 });
  sc = scrollTo(it, "charlie", 300, "text");
  add(98, "05 CLAUDE = A COMPANY", "ORANGE bar (names Claude). video below it already playing", { items: it, scroll: sc, cam: cam(it, "charlie", sc, READ, "text", 90) });

  it = feed("charlie", { dim: 1, barP: 1 });
  add(124, "06 VIDEO FOCUS: ORG CHART", "camera slides down onto the video, text leaves frame top", { items: it, scroll: sc, cam: cam(it, "charlie", sc, 2.4, "media") });

  it = feed("mike", { dim: 1 }, 0.06);
  sc = scrollTo(it, "mike", 426, "media");
  add(158, "07 MIKE (SOUND ON)", "video fills ~1000 px, everything else black. unmutes: 'how I'm using Claude Code as my primary system...' (~5 s)", { items: it, scroll: sc, cam: cam(it, "mike", sc, 3.2, "media") });

  it = feed("deronin", { dim: 1, barP: 1 });
  sc = scrollTo(it, "deronin", 426, "media");
  add(286, "08 $40K MRR, ZERO EMPLOYEES", "article card, bar on the preview line", { items: it, scroll: sc, cam: cam(it, "deronin", sc, 2.9, "media", 20) });

  it = feed("nero", { dim: 1 }, 0.06);
  sc = scrollTo(it, "nero", 426, "media");
  add(316, "09 MOTION DESIGN BY CLAUDE", "video only: the orange-dot motion piece", { items: it, scroll: sc, cam: cam(it, "nero", sc, 3.2, "media") });

  it = feed("finn", { dim: 1, barP: 1 });
  sc = scrollTo(it, "finn", 300, "text");
  add(352, "10 KURZGESAGT IN 10 MIN", "text, bar 'entire channel in 10 minutes'", { items: it, scroll: sc, cam: cam(it, "finn", sc, READ, "text", 60) });

  it = feed("finn", { dim: 1, barP: 1 });
  add(380, "11 SECONDARY FOCUS: THE VIDEO", "camera slides down: their Sun-vanishes video counting down", { items: it, scroll: sc, cam: cam(it, "finn", sc, 2.9, "media") });

  it = feed("intcyber", { dim: 1, barP: 1 });
  sc = scrollTo(it, "intcyber", 426, "text");
  add(410, "12 SOFTWARE IS DEAD", "bar on the last line, rest dims", { items: it, scroll: sc, cam: cam(it, "intcyber", sc, READ, "text", 40) });

  it = feed(undefined, {}, 0.55);
  sc = scrollTo(it, "humza", 426, "post");
  add(436, "13 OVERLOAD", "pull back to the small phone. clean fast scroll (light blur only), new-posts pill climbs 3 -> 99+", { items: it, scroll: sc, streak: 5, newPosts: "99+ new posts", cam: phoneCam });

  it = feed("olehmann", { dim: 1, barP: 1, noMedia: true }, 0);
  sc = scrollTo(it, "olehmann", 426, "text");
  add(452, "14 FLASHES (2f each)", "inside the scroll: hard 2-frame cuts to single lines. ONE PERSON / zero employees", { items: it, scroll: sc, cam: { ...cam(it, "olehmann", sc, 4.4, "text", 20), ax: 196 } });

  it = feed("himanshu", { dim: 1, barP: 1, mediaOpacity: 0.06 }, 0);
  sc = scrollTo(it, "himanshu", 426, "text");
  add(470, "15 IT'S OVER.", "hard stop. the tightest framing of the piece. bar. silence", { items: it, scroll: sc, cam: { ax: 68 + 36, ay: aim(it, "himanshu", sc, "text").ay, zoom: 6.2 } });

  it = feed("himanshu", { dim: 1, barP: 1 }, 0);
  add(500, "16 ...AND THE VIDEO", "slow scroll down to the AI-made sites playing. hard cut -> line 11", { items: it, scroll: sc + 150, cam: cam(it, "himanshu", sc + 150, 2.9, "media") });

  return out;
};

// v1/v2 key-frame sheet (old order); built on demand only.
export const getKeyframes = () => mk();
