import React from "react";
import { Composition, useCurrentFrame } from "remotion";
import { KEYFRAMES } from "./keyframes";
import { Scene } from "./Scene";

const fmt = (f: number) => {
  const s = f / (24000 / 1001);
  return `f${String(f).padStart(4, "0")}  ${s.toFixed(2)}s`;
};

// Frame i of this composition = keyframe i (for the key-frame sheet).
const KeyframeSheet: React.FC<{ labels: boolean }> = ({ labels }) => {
  const i = useCurrentFrame();
  const k = KEYFRAMES[i];
  return <Scene s={k.s} label={labels ? `${fmt(k.f)}   ${k.beat}\n${k.note}` : undefined} />;
};

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Keyframes" component={KeyframeSheet} durationInFrames={KEYFRAMES.length} fps={1} width={1920} height={1080} defaultProps={{ labels: true }} />
  </>
);
