import React from "react";
import { AbsoluteFill } from "remotion";
import { FONT } from "./ui/layout";
import { XLogo } from "./ui/icons";
import { FeedItem, feedOffsets, HEADER_H, Phone } from "./ui/Phone";
import { AlphaCtx, CW, POSTS, PostKey } from "./ui/Post";

export type Cam = {
  ax: number; // point on the screen (pts) placed at frame centre
  ay: number;
  zoom: number; // px per pt
  rx?: number; // tilt, degrees
  ry?: number;
  blur?: number; // rack-focus blur, px
};

export type SceneState = {
  items: FeedItem[];
  scroll: number;
  cam: Cam;
  screenOn?: number;
  streak?: number;
  newPosts?: string;
  flash?: string; // single-frame overlay phrase (overload)
  world?: { opacity: number; blur: number; dy?: number }; // the whole feed (in-animation); dy in px
  splash?: { opacity: number; scale: number }; // X launch screen
  pill?: string; // new-posts pill, fixed at the top of frame
};

// Screen point of a post part, given the scroll. part: text | media | post
export const aim = (items: FeedItem[], k: PostKey, scroll: number, part: "text" | "media" | "post" = "text", dy = 0) => {
  const offs = feedOffsets(items);
  const i = items.findIndex((it) => it.k === k);
  const { top, L } = offs[i];
  const base = HEADER_H - scroll + top;
  const x = 68 + CW / 2;
  if (part === "media") return { ax: x, ay: base + L.mediaTop + L.mh / 2 + dy };
  if (part === "post") return { ax: 393 / 2, ay: base + L.h / 2 + dy };
  const textH = L.lines.length * 20;
  return { ax: x, ay: base + L.textTop + textH / 2 + dy };
};

// scroll value that puts a post part at screen y (pts)
export const scrollTo = (items: FeedItem[], k: PostKey, screenY: number, part: "text" | "media" | "post" = "text") => {
  const a = aim(items, k, 0, part);
  return a.ay - screenY;
};

export const Scene: React.FC<{ s: SceneState; label?: string }> = ({ s, label }) => {
  const { cam } = s;
  const alpha = React.useContext(AlphaCtx);
  return (
    <AbsoluteFill style={{ background: alpha ? "transparent" : "#000", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: 960,
          top: 540 + (s.world?.dy ?? 0),
          transformOrigin: "0 0",
          transform: `perspective(2600px) rotateX(${cam.rx ?? 0}deg) rotateY(${cam.ry ?? 0}deg)`,
          opacity: s.world?.opacity ?? 1,
          filter: (s.world?.blur ?? cam.blur) ? `blur(${s.world?.blur ?? cam.blur}px)` : undefined,
        }}
      >
        {/* zoom (not scale) so the UI is laid out at full res and stays crisp on punch-ins */}
        {/* left/top are in zoomed units, so they're given in pts */}
        <div style={{ position: "absolute", left: -cam.ax, top: -cam.ay, zoom: cam.zoom }}>
          <Phone items={s.items} scroll={s.scroll} screenOn={s.screenOn} streak={s.streak} newPosts={s.newPosts} />
        </div>
      </div>
      {s.splash && s.splash.opacity > 0 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ opacity: s.splash.opacity, scale: String(s.splash.scale) }}>
            <XLogo size={112} />
          </div>
        </AbsoluteFill>
      )}
      {s.pill && (
        <div style={{ position: "absolute", top: 96, left: "50%", translate: "-50% 0", padding: "12px 26px", borderRadius: 40, background: "rgba(255,255,255,0.94)", color: "#000", font: `600 30px ${FONT}`, whiteSpace: "nowrap" }}>
          ↑ {s.pill}
        </div>
      )}
      {s.flash && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,0.55)" }}>
          <div style={{ font: `800 120px/1 ${FONT}`, color: "#fff", letterSpacing: -3, textShadow: "0 0 24px rgba(255,255,255,0.45)" }}>{s.flash}</div>
        </AbsoluteFill>
      )}
      {label && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "10px 24px", background: "rgba(20,20,20,0.92)", borderTop: "2px solid #D97757", font: `600 26px ${FONT}`, color: "#ddd", whiteSpace: "pre" }}>
          {label}
        </div>
      )}
    </AbsoluteFill>
  );
};

export const P = POSTS;
