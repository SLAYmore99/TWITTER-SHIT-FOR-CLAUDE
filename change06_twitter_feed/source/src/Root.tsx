import React from "react";
import { Composition } from "remotion";
import { Montage } from "./Montage";
import { CUTS, FPS } from "./timeline";

export const RemotionRoot: React.FC = () => (
  <>
    {/* Option 1, v9 (12 s): preview on black with VO + SFX, and the alpha version for Premiere. */}
    <Composition id="TwitterFeed" component={Montage} durationInFrames={CUTS.v12.DURATION} fps={FPS} width={1920} height={1080} defaultProps={{ transparent: false, cut: "v12" as const }} />
    <Composition id="TwitterFeedAlpha" component={Montage} durationInFrames={CUTS.v12.DURATION} fps={FPS} width={1920} height={1080} defaultProps={{ transparent: true, cut: "v12" as const }} />
    {/* Option 1, 9 s version (same shots, tighter). */}
    <Composition id="TwitterFeed9s" component={Montage} durationInFrames={CUTS.v9s.DURATION} fps={FPS} width={1920} height={1080} defaultProps={{ transparent: false, cut: "v9s" as const }} />
    <Composition id="TwitterFeed9sAlpha" component={Montage} durationInFrames={CUTS.v9s.DURATION} fps={FPS} width={1920} height={1080} defaultProps={{ transparent: true, cut: "v9s" as const }} />
  </>
);
