import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily: monoFont } = loadFont();

// Matrix green color palette
const COLORS = {
  matrixGreen: "#00ff41",
  matrixCyan: "#00d4ff",
  matrixTeal: "#0fdfdf",
  brutalRed: "#ff3131",
  brutalGray: "#888888",
  darkBg: "#0a0a0a",
};

export const TitleScene = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Spring animations for entrance
  const profileScale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const titleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [15, 35], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const speakerOpacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glowing pulse effect for the green terminal cursor
  const pulse = interpolate(Math.sin(frame * 0.15), [-1, 1], [0.4, 1]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 50%, #0d1a0d 0%, ${COLORS.darkBg} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Matrix rain effect (simplified) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            ${COLORS.matrixGreen}15 2px,
            ${COLORS.matrixGreen}15 4px
          )`,
        }}
      />

      {/* Content container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 60,
        }}
      >
        {/* Profile image */}
        <div
          style={{
            transform: `scale(${profileScale})`,
          }}
        >
          <Img
            src={staticFile("profile.jpg")}
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: `4px solid ${COLORS.matrixGreen}`,
              boxShadow: `0 0 30px ${COLORS.matrixGreen}40`,
            }}
          />
        </div>

        {/* Title and subtitle */}
        <div style={{ textAlign: "left" }}>
          <h1
            style={{
              fontFamily: monoFont,
              fontSize: 72,
              fontWeight: "bold",
              color: COLORS.matrixGreen,
              margin: 0,
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              textShadow: `0 0 20px ${COLORS.matrixGreen}60`,
            }}
          >
            From Vibe Coding
            <br />
            to Production
          </h1>

          <p
            style={{
              fontFamily: monoFont,
              fontSize: 32,
              color: COLORS.matrixCyan,
              margin: "20px 0 0 0",
              opacity: subtitleOpacity,
            }}
          >
            // THE CTO'S CONFESSIONAL
          </p>
        </div>
      </div>

      {/* Speaker info at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: speakerOpacity,
        }}
      >
        <p
          style={{
            fontFamily: monoFont,
            fontSize: 28,
            color: COLORS.brutalGray,
            margin: 0,
          }}
        >
          <span style={{ color: COLORS.matrixGreen, opacity: pulse }}>$ </span>
          whoami |{" "}
          <span style={{ color: COLORS.matrixCyan }}>Duy Nguyen</span> | CTO @
          Build in Public Vietnam
        </p>
      </div>
    </AbsoluteFill>
  );
};
