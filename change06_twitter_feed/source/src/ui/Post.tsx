import React from "react";
import { Img, staticFile } from "remotion";
import posts from "../posts.json";
import { BODY, FONT, inRange, Line, rangeOf, wrap } from "./layout";
import { Bookmark, C, Like, More, Muted, Reply, Repost, Share, Verified, Views } from "./icons";

export type PostData = (typeof posts)["noisy"] & {
  media: { type: string; src: string; w: number; h: number; dur?: string; title?: string; preview?: string };
};
export type PostKey = keyof typeof posts;
export const POSTS = posts as unknown as Record<PostKey, PostData>;

// Layout in phone points (1 pt = 1 css px inside the phone).
export const SCREEN_W = 393;
const PAD = 16;
const AV = 40;
const CX = PAD + AV + 12; // content x = 68
export const CW = SCREEN_W - CX - PAD; // content width = 309

export type PostLook = {
  lit?: string; // phrase kept full white when dimming
  bar?: string; // phrase that gets the highlighter bar
  barP?: number; // 0..1 sweep progress
  barColor?: "white" | "orange";
  dim?: number; // 0..1, how far non-lit text drops toward 35%
  mediaP?: number; // optional media focus (scale up inside card) 0..1
  maxLines?: number;
};

export const layoutPost = (p: PostData, maxLines = 6) => {
  const { lines, truncated } = wrap(p.text, CW, BODY.size, BODY.lineH, BODY.weight, maxLines);
  const textTop = 12 + 20 + 1;
  const textH = lines.length * BODY.lineH + (truncated ? BODY.lineH : 0);
  const m = p.media;
  let mh = 0;
  if (m.type === "article") mh = (CW * m.h) / m.w + 10 + wrap(m.title ?? "", CW - 24, 15, 20, 700).lines.length * 20 + wrap(m.preview ?? "", CW - 24, 15, 20, 400, 2).lines.length * 20 + 12;
  else if (m) mh = Math.min((CW * m.h) / m.w, CW * 1.25);
  const mediaTop = textTop + textH + (lines.length ? 12 : 0);
  const actionsTop = mediaTop + (mh ? mh + 12 : 0);
  const h = actionsTop + 20 + 12 + 1;
  return { lines, truncated, textTop, mediaTop, mh, actionsTop, h };
};

const fmtCount = (s: string) => s;

// Wrapped text with dimming and a highlighter bar. The bar sweeps line by line;
// a black copy of the text is clipped to the bar, so letters turn black exactly
// where the marker has passed (like ref05).
const MarkedText: React.FC<{
  text: string; lines: Line[]; look: PostLook; color?: string; dimOpacity: number;
}> = ({ text, lines, look, color = C.text, dimOpacity }) => {
  const lit = rangeOf(text, look.lit);
  const bar = rangeOf(text, look.bar);
  const barLines = lines
    .map((l) => {
      const ws = l.words.filter((w) => inRange(w, bar));
      if (!ws.length) return null;
      return { l, ws, x0: ws[0].x, x1: ws[ws.length - 1].x + ws[ws.length - 1].w };
    })
    .filter(Boolean) as { l: Line; ws: Line["words"]; x0: number; x1: number }[];
  const total = barLines.reduce((s, b) => s + (b.x1 - b.x0), 0);
  let left = (look.barP ?? 0) * total;
  const orange = look.barColor === "orange";
  const font = `${BODY.weight} ${BODY.size}px/${BODY.lineH}px ${FONT}`;
  const glow = (look.dim ?? 0) > 0 ? "0 0 6px rgba(255,255,255,0.35)" : "none";
  return (
    <>
      {lines.map((l, li) => (
        <div key={li} style={{ position: "absolute", top: l.y, left: 0, height: BODY.lineH, whiteSpace: "pre" }}>
          {l.words.map((w, wi) => {
            const on = inRange(w, lit) || inRange(w, bar);
            return (
              <span key={wi} style={{ position: "absolute", left: w.x, font, color: on ? C.text : color, opacity: on ? 1 : dimOpacity, textShadow: on ? glow : "none" }}>
                {w.text}
              </span>
            );
          })}
        </div>
      ))}
      {barLines.map((b, i) => {
        const len = b.x1 - b.x0;
        const w = Math.max(0, Math.min(len, left));
        left -= len;
        if (w <= 0) return null;
        return (
          <div key={i} style={{ position: "absolute", left: b.x0 - 2.5, top: b.l.y + 0.5, width: w + 5, height: BODY.lineH - 0.5, overflow: "hidden", borderRadius: 2,
            background: orange ? C.claude : "#F2F2F2", boxShadow: orange ? "0 0 10px rgba(217,119,87,0.55)" : "0 0 10px rgba(255,255,255,0.35)" }}>
            {b.ws.map((wd, wi) => (
              <span key={wi} style={{ position: "absolute", left: wd.x - b.x0 + 2.5, top: -0.5, font, color: orange ? "#140805" : "#000", whiteSpace: "pre" }}>{wd.text}</span>
            ))}
          </div>
        );
      })}
    </>
  );
};

const TextBlock: React.FC<{ p: PostData; lines: Line[]; truncated: boolean; look: PostLook; top: number }> = ({ p, lines, truncated, look, top }) => {
  const dimOpacity = 1 - 0.65 * (look.dim ?? 0);
  return (
    <div style={{ position: "absolute", left: CX, top, width: CW }}>
      <MarkedText text={p.text} lines={lines} look={look} dimOpacity={dimOpacity} />
      {truncated && (
        <div style={{ position: "absolute", top: lines.length * BODY.lineH, font: `${BODY.size}px/${BODY.lineH}px ${FONT}`, color: C.blue, opacity: dimOpacity }}>
          Show more
        </div>
      )}
    </div>
  );
};

const Media: React.FC<{ p: PostData; top: number; h: number; look: PostLook; dimOpacity: number }> = ({ p, top, h, look, dimOpacity }) => {
  const m = p.media;
  const box: React.CSSProperties = {
    position: "absolute", left: CX, top, width: CW, height: h, borderRadius: 16,
    border: `1px solid ${C.line}`, overflow: "hidden", background: "#16181C",
  };
  if (m.type === "article") {
    const ch = (CW * m.h) / m.w;
    const pv = wrap(m.preview ?? "", CW - 24, 15, 20, 400, 2);
    return (
      <div style={{ ...box, opacity: look.bar === m.preview ? 1 : dimOpacity }}>
        <Img src={staticFile(m.src)} style={{ width: CW, height: ch, objectFit: "cover", display: "block" }} />
        <div style={{ padding: "8px 12px 2px", font: `700 15px/20px ${FONT}`, color: C.text }}>{m.title}</div>
        <div style={{ position: "relative", margin: "0 12px", height: pv.lines.length * 20 }}>
          <MarkedText text={m.preview ?? ""} lines={pv.lines} look={{ ...look, lit: undefined, dim: look.bar === m.preview ? 0.0001 : 0 }} color={C.sub} dimOpacity={1} />
        </div>
      </div>
    );
  }
  const s = 1 + 0.0 * (look.mediaP ?? 0);
  return (
    <div style={box}>
      <Img src={staticFile(m.src)} style={{ width: "100%", height: "100%", objectFit: "cover", scale: String(s) }} />
      {m.type === "video" && (
        <>
          <div style={{ position: "absolute", left: 8, bottom: 8, padding: "1px 5px", borderRadius: 4, background: "rgba(0,0,0,0.75)", font: `500 12px/16px ${FONT}`, color: "#fff" }}>{m.dur}</div>
          <div style={{ position: "absolute", right: 8, bottom: 8, width: 24, height: 24, borderRadius: 12, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Muted />
          </div>
        </>
      )}
    </div>
  );
};

export const Post: React.FC<{ k: PostKey; look?: PostLook }> = ({ k, look = {} }) => {
  const p = POSTS[k];
  const L = layoutPost(p, look.maxLines ?? 6);
  const dimOpacity = 1 - 0.65 * (look.dim ?? 0);
  const row = { font: `400 15px/20px ${FONT}` };
  const acts: [React.FC, string][] = [[Reply, p.replies], [Repost, p.reposts], [Like, p.likes], [Views, p.views]];
  return (
    <div style={{ position: "relative", width: SCREEN_W, height: L.h, borderBottom: `1px solid ${C.line}`, background: C.bg }}>
      <Img src={staticFile(p.avatar)} style={{ position: "absolute", left: PAD, top: 12, width: AV, height: AV, borderRadius: AV / 2, opacity: dimOpacity }} />
      <div style={{ position: "absolute", left: CX, top: 12, width: CW, height: 20, display: "flex", alignItems: "center", gap: 2, whiteSpace: "nowrap", opacity: dimOpacity }}>
        <span style={{ ...row, fontWeight: 700, color: C.text, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 170 }}>{p.name}</span>
        <Verified size={17} />
        <span style={{ ...row, color: C.sub, marginLeft: 2, overflow: "hidden", textOverflow: "ellipsis" }}>@{p.handle} · {p.date}</span>
        <div style={{ marginLeft: "auto" }}><More /></div>
      </div>
      <TextBlock p={p} lines={L.lines} truncated={L.truncated} look={look} top={L.textTop} />
      {L.mh > 0 && <Media p={p} top={L.mediaTop} h={L.mh} look={look} dimOpacity={dimOpacity} />}
      <div style={{ position: "absolute", left: CX, top: L.actionsTop, width: CW, height: 20, display: "flex", alignItems: "center", opacity: dimOpacity }}>
        {acts.map(([I, n], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, width: i < 3 ? 70 : 62 }}>
            <I />
            <span style={{ font: `400 13px/16px ${FONT}`, color: C.sub }}>{fmtCount(n)}</span>
          </div>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: 12 }}><Bookmark /><Share /></div>
      </div>
    </div>
  );
};
