import { Composition } from "remotion";
import { WrapUpVideo } from "./WrapUpVideo";

// 25 seconds at 30fps = 750 frames
const DURATION_IN_FRAMES = 750;
const FPS = 30;

export const RemotionRoot = () => {
  return (
    <Composition
      id="WrapUp"
      component={WrapUpVideo}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
