import React from "react";
import { Composition } from "remotion";
import { Montage } from "./Montage";
import { DURATION, FPS } from "./timeline";

export const RemotionRoot: React.FC = () => (
  <>
    {/* Option 1 (Rachit's 10 s cut). Preview on black with VO + SFX, and the alpha version for Premiere. */}
    <Composition id="TwitterFeed" component={Montage} durationInFrames={DURATION} fps={FPS} width={1920} height={1080} defaultProps={{ transparent: false }} />
    <Composition id="TwitterFeedAlpha" component={Montage} durationInFrames={DURATION} fps={FPS} width={1920} height={1080} defaultProps={{ transparent: true }} />
  </>
);
