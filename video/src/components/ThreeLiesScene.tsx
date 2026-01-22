import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily: monoFont } = loadFont();

const COLORS = {
  matrixGreen: "#00ff41",
  matrixCyan: "#00d4ff",
  brutalRed: "#ff3131",
  brutalYellow: "#ffd700",
  brutalGray: "#888888",
  darkBg: "#0a0a0a",
};

const lies = [
  { text: '"I IMPLEMENTED IT"', icon: "01" },
  { text: "LARGE CONTEXT = GOOD", icon: "02" },
  { text: '"I UNDERSTAND YOUR CODE"', icon: "03" },
];

export const ThreeLiesScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header animation
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Staggered lie animations
  const getLieAnimation = (index: number) => {
    const delay = 20 + index * 25;
    const scale = spring({
      frame: frame - delay,
      fps,
      config: { damping: 15, stiffness: 200 },
    });
    const opacity = interpolate(frame, [delay, delay + 10], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return { scale, opacity };
  };

  // IndieBoosting story
  const storyOpacity = interpolate(frame, [110, 130], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const statsScale = spring({
    frame: frame - 140,
    fps,
    config: { damping: 10, stiffness: 150 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 30%, #1a0d0d 0%, ${COLORS.darkBg} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
      }}
    >
      {/* Section header */}
      <div
        style={{
          opacity: headerOpacity,
          marginBottom: 40,
        }}
      >
        <p
          style={{
            fontFamily: monoFont,
            fontSize: 24,
            color: COLORS.brutalGray,
            margin: 0,
          }}
        >
          // THE THREE LIES
        </p>
      </div>

      {/* Lies grid */}
      <div
        style={{
          display: "flex",
          gap: 40,
          marginBottom: 60,
        }}
      >
        {lies.map((lie, index) => {
          const { scale, opacity } = getLieAnimation(index);
          return (
            <div
              key={index}
              style={{
                transform: `scale(${scale})`,
                opacity,
                padding: "30px 40px",
                border: `3px solid ${COLORS.brutalRed}`,
                background: `${COLORS.brutalRed}15`,
                textAlign: "center",
                minWidth: 300,
              }}
            >
              <div
                style={{
                  fontFamily: monoFont,
                  fontSize: 18,
                  color: COLORS.brutalGray,
                  marginBottom: 10,
                }}
              >
                LIE #{lie.icon}
              </div>
              <div
                style={{
                  fontFamily: monoFont,
                  fontSize: 24,
                  fontWeight: "bold",
                  color: COLORS.brutalRed,
                }}
              >
                {lie.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* IndieBoosting story */}
      <div
        style={{
          opacity: storyOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: monoFont,
            fontSize: 28,
            color: COLORS.brutalYellow,
            marginBottom: 15,
          }}
        >
          INDIEBOOSTING: THE FULL STORY
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            transform: `scale(${statsScale})`,
          }}
        >
          <div
            style={{
              fontFamily: monoFont,
              fontSize: 48,
              fontWeight: "bold",
              color: COLORS.matrixGreen,
            }}
          >
            100K+
          </div>
          <span style={{ fontSize: 36, color: COLORS.brutalGray }}>
            visitors
          </span>
          <span style={{ fontSize: 36, color: COLORS.brutalRed }}>→</span>
          <span style={{ fontSize: 36, color: COLORS.brutalRed }}>
            6 months to rewrite
          </span>
          <span style={{ fontSize: 36, color: COLORS.brutalRed }}>→</span>
          <div
            style={{
              fontFamily: monoFont,
              fontSize: 36,
              fontWeight: "bold",
              color: COLORS.brutalRed,
            }}
          >
            KILLED
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
