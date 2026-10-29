import React, { useContext } from "react";
import { C, XLogo } from "./icons";
import { FONT } from "./layout";
import { AlphaCtx, layoutPost, Post, PostKey, PostLook, POSTS, SCREEN_W } from "./Post";

export const SCREEN_H = 852;
export const HEADER_H = 104; // minimal header: island + X mark only

export type FeedItem = { k: PostKey; look?: PostLook };

// y of each post's top inside the feed (feed coords, before scroll)
export const feedOffsets = (items: FeedItem[]) => {
  let y = 0;
  return items.map((it) => {
    const L = layoutPost(POSTS[it.k], it.look?.maxLines ?? 6, it.look?.noMedia);
    const top = y;
    y += L.h;
    return { top, L };
  });
};

// Minimal header: just the X mark under the island. No status bar, tabs or avatar.
const AppHeader: React.FC<{ newPosts?: string }> = ({ newPosts }) => (
  <div style={{ position: "absolute", top: 0, left: 0, width: SCREEN_W, height: HEADER_H, background: "linear-gradient(#000 70%, rgba(0,0,0,0))", zIndex: 5 }}>
    <div style={{ position: "absolute", top: 62, left: 0, width: SCREEN_W, display: "flex", justifyContent: "center" }}>
      <XLogo size={22} />
    </div>
    {newPosts && (
      <div style={{ position: "absolute", top: HEADER_H + 4, left: "50%", translate: "-50% 0", padding: "5px 12px", borderRadius: 16, background: "rgba(255,255,255,0.92)", color: "#000", font: `600 13px ${FONT}`, whiteSpace: "nowrap" }}>
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
  const alpha = useContext(AlphaCtx);
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: SCREEN_W, height: SCREEN_H }}>
      {/* screen */}
      <div style={{ position: "absolute", inset: 0, borderRadius: 55, overflow: "hidden", background: alpha ? "transparent" : C.bg, boxShadow: `0 0 0 0.6px rgba(255,255,255,${0.16 * screenOn})` }}>
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
        <div style={{ position: "absolute", top: 11, left: SCREEN_W / 2 - 63, width: 126, height: 37, borderRadius: 19, background: "#0c0c0c", boxShadow: "0 0 0 0.6px rgba(255,255,255,0.08)", zIndex: 9 }} />
      </div>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="vblur"><feGaussianBlur stdDeviation={`0 ${streak}`} /></filter>
      </svg>
    </div>
  );
};
