import { Audio } from "@remotion/media";
import React from "react";
import { interpolate, staticFile, useCurrentFrame } from "remotion";
import { Scene } from "./Scene";
import { FPS, MEDIA, stateAt } from "./timeline";
import { AlphaCtx, PlayCtx, PlayWin, POSTS, PostKey } from "./ui/Post";

const play: Record<string, PlayWin> = Object.fromEntries(
  (Object.entries(MEDIA) as [PostKey, PlayWin][]).map(([k, w]) => [POSTS[k].id, k === "charlie" ? { ...w, durationInFrames: Math.round(3.6875 * FPS) } : w]),
);

// The whole Twitter-feed montage. Background stays black here (preview);
// the final render drops it for alpha.
export const Montage: React.FC<{ transparent?: boolean }> = ({ transparent = false }) => {
  const f = useCurrentFrame();
  return (
    <PlayCtx.Provider value={play}>
      <AlphaCtx.Provider value={transparent}>
        <Scene s={stateAt(f)} />
      </AlphaCtx.Provider>
      {/* line 10 of the VO from his current version (cut before line 11 starts) */}
      {/* SFX stem (sfx.py): whooshes driven by the scroll curve, soft ticks on highlights */}
      <Audio src={staticFile("sfx_stem.wav")} />
      <Audio src={staticFile("vo_line10.wav")} volume={(t) => interpolate(t, [0, 70, 80], [1, 1, 0], { extrapolateRight: "clamp" })} />
    </PlayCtx.Provider>
  );
};
