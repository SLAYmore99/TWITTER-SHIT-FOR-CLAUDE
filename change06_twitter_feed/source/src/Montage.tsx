import { Audio } from "@remotion/media";
import React from "react";
import { interpolate, staticFile, useCurrentFrame } from "remotion";
import { Scene } from "./Scene";
import { FPS, MEDIA, stateAt } from "./timeline";
import { PlayCtx, PlayWin, POSTS, PostKey } from "./ui/Post";

const play: Record<string, PlayWin> = Object.fromEntries(
  (Object.entries(MEDIA) as [PostKey, PlayWin][]).map(([k, w]) => [POSTS[k].id, k === "charlie" ? { ...w, durationInFrames: Math.round(3.6875 * FPS) } : w]),
);

// The whole Twitter-feed montage. Background stays black here (preview);
// the final render drops it for alpha.
export const Montage: React.FC<{ transparent?: boolean }> = () => {
  const f = useCurrentFrame();
  return (
    <PlayCtx.Provider value={play}>
      <Scene s={stateAt(f)} />
      {/* line 10 of the VO from his current version (cut before line 11 starts) */}
      <Audio src={staticFile("vo_line10.wav")} volume={(t) => interpolate(t, [0, 70, 80], [1, 1, 0], { extrapolateRight: "clamp" })} />
    </PlayCtx.Provider>
  );
};
