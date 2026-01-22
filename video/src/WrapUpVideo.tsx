import { AbsoluteFill, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "./components/TitleScene";
import { ThreeLiesScene } from "./components/ThreeLiesScene";
import { WorkflowScene } from "./components/WorkflowScene";
import { CtaScene } from "./components/CtaScene";

// Scene durations in frames (at 30fps)
const SCENE_DURATIONS = {
  title: 180,      // 6 seconds
  threeLies: 180,  // 6 seconds
  workflow: 210,   // 7 seconds
  cta: 210,        // 7 seconds
};

const TRANSITION_DURATION = 10;

export const WrapUpVideo = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0a",
      }}
    >
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.title}>
          <TitleScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.threeLies}>
          <ThreeLiesScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.workflow}>
          <WorkflowScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.cta}>
          <CtaScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
