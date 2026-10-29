import React from "react";
import { Composition } from "remotion";
import { Montage } from "./Montage";
import { DURATION, FPS } from "./timeline";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="TwitterFeed" component={Montage} durationInFrames={DURATION} fps={FPS} width={1920} height={1080} />
  </>
);
