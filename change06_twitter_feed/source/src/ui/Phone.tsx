import React from "react";
import { Img, staticFile } from "remotion";
import { C, XLogo } from "./icons";
import { FONT } from "./layout";
import { layoutPost, Post, PostKey, PostLook, POSTS, SCREEN_W } from "./Post";

export const SCREEN_H = 852;
export const HEADER_H = 54 + 44 + 53; // status bar + app bar + tabs

export type FeedItem = { k: PostKey; look?: PostLook };

// y of each post's top inside the feed (feed coords, before scroll)
export const feedOffsets = (items: FeedItem[]) => {
  let y = 0;
  return items.map((it) => {
    const L = layoutPost(POSTS[it.k], it.look?.maxLines ?? 6);
    const top = y;
    y += L.h;
    return { top, L };
  });
};

const StatusBar: React.FC = () => (
  <div style={{ position: "absolute", top: 0, left: 0, width: SCREEN_W, height: 54, display: "flex", alignItems: "center", padding: "6px 34px 0 52px", boxSizing: "border-box", justifyContent: "space-between" }}>
    <span style={{ font: `600 17px ${FONT}`, color: "#fff" }}>9:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <svg width="18" height="12" viewBox="0 0 18 12" fill="#fff"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
      <svg width="16" height="12" viewBox="0 0 16 12" fill="#fff"><path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8 .4C5.2.4 2.7 1.5.8 3.3L2 4.6a8.6 8.6 0 0 1 6-2.4zm0 3.5c1.4 0 2.6.5 3.6 1.4l1.2-1.3A7 7 0 0 0 8 3.9 7 7 0 0 0 3.2 5.8l1.2 1.3c1-.9 2.2-1.4 3.6-1.4zm0 3.4c.5 0 1 .2 1.3.5L8 11.6 6.7 9.6c.3-.3.8-.5 1.3-.5z" /></svg>
      <svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.5" stroke="#fff" strokeOpacity=".4" fill="none" /><rect x="2" y="2" width="20" height="9" rx="2" fill="#fff" /><rect x="24.5" y="4.5" width="1.5" height="4" rx=".75" fill="#fff" fillOpacity=".4" /></svg>
    </div>
  </div>
);

const AppHeader: React.FC<{ newPosts?: string }> = ({ newPosts }) => (
  <div style={{ position: "absolute", top: 0, left: 0, width: SCREEN_W, height: HEADER_H, background: "rgba(0,0,0,0.82)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.line}`, zIndex: 5 }}>
    <StatusBar />
    <div style={{ position: "absolute", top: 54, left: 0, width: SCREEN_W, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Img src={staticFile("av/2111766067379142766.jpg")} style={{ position: "absolute", left: 16, width: 32, height: 32, borderRadius: 16, filter: "grayscale(1) brightness(0.8)" }} />
      <XLogo size={26} />
    </div>
    <div style={{ position: "absolute", top: 98, left: 0, width: SCREEN_W, height: 53, display: "flex" }}>
      {["For you", "Following"].map((t, i) => (
        <div key={t} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", font: `${i === 0 ? 700 : 500} 15px ${FONT}`, color: i === 0 ? C.text : C.sub }}>
          {t}
          {i === 0 && <div style={{ position: "absolute", bottom: 0, width: 56, height: 4, borderRadius: 2, background: C.blue }} />}
        </div>
      ))}
    </div>
    {newPosts && (
      <div style={{ position: "absolute", top: HEADER_H + 12, left: "50%", translate: "-50% 0", padding: "6px 14px", borderRadius: 18, background: C.blue, color: "#fff", font: `700 14px ${FONT}`, boxShadow: "0 2px 12px rgba(29,155,240,0.5)", whiteSpace: "nowrap" }}>
        ↑ {newPosts}
      </div>
    )}
  </div>
);

export type PhoneProps = {
  items: FeedItem[];
  scroll: number; // feed scroll in pts
  screenOn?: number; // 0..1 brightness
  streak?: number; // vertical motion blur in pts
  newPosts?: string;
};

// The phone, drawn at 1 css px = 1 pt. Origin = top-left of the SCREEN.
export const Phone: React.FC<PhoneProps> = ({ items, scroll, screenOn = 1, streak = 0, newPosts }) => {
  const offs = feedOffsets(items);
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: SCREEN_W, height: SCREEN_H }}>
      {/* titanium frame + rim light, almost invisible on black */}
      <div style={{ position: "absolute", inset: -11, borderRadius: 66, background: "linear-gradient(160deg,#3a3a3e 0%,#111113 35%,#0a0a0b 65%,#2c2c30 100%)", boxShadow: "0 0 0 1px rgba(255,255,255,0.10), 0 30px 80px rgba(0,0,0,0.9)" }} />
      <div style={{ position: "absolute", inset: -8, borderRadius: 63, background: "#050505" }} />
      {/* screen */}
      <div style={{ position: "absolute", inset: 0, borderRadius: 55, overflow: "hidden", background: C.bg, boxShadow: `0 0 70px 10px rgba(200,215,235,${0.07 * screenOn})` }}>
        <div style={{ position: "absolute", inset: 0, filter: `brightness(${0.15 + 0.85 * screenOn})${streak ? " url(#vblur)" : ""}` }}>
          <div style={{ position: "absolute", left: 0, top: HEADER_H - scroll, width: SCREEN_W }}>
            {items.map((it, i) => (
              <div key={i} style={{ position: "absolute", top: offs[i].top, left: 0 }}>
                <Post k={it.k} look={it.look} />
              </div>
            ))}
          </div>
        </div>
        {/* the header is fixed in the real app, so it never smears */}
        <div style={{ position: "absolute", inset: 0, filter: `brightness(${0.15 + 0.85 * screenOn})` }}>
          <AppHeader newPosts={newPosts} />
        </div>
        {/* dynamic island */}
        <div style={{ position: "absolute", top: 11, left: SCREEN_W / 2 - 63, width: 126, height: 37, borderRadius: 19, background: "#000", zIndex: 9 }} />
        {/* glass reflection */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.03) 100%)", pointerEvents: "none", zIndex: 10 }} />
      </div>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="vblur"><feGaussianBlur stdDeviation={`0 ${streak}`} /></filter>
      </svg>
    </div>
  );
};
