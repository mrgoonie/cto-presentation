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
  matrixTeal: "#0fdfdf",
  brutalYellow: "#ffd700",
  brutalGray: "#888888",
  darkBg: "#0a0a0a",
};

const workflowSteps = [
  { cmd: "/docs:init", label: "Document", color: COLORS.matrixTeal },
  { cmd: "/brainstorm", label: "Challenge", color: COLORS.matrixCyan },
  { cmd: "/plan", label: "Plan", color: COLORS.matrixGreen },
  { cmd: "/clear", label: "Fresh", color: COLORS.brutalYellow },
  { cmd: "/code:auto", label: "Execute", color: COLORS.matrixGreen },
];

export const WorkflowScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header animation
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const headerY = interpolate(frame, [0, 15], [-20, 0], {
    extrapolateRight: "clamp",
  });

  // Subtitle
  const subtitleOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Workflow step animations
  const getStepAnimation = (index: number) => {
    const delay = 30 + index * 20;
    const scale = spring({
      frame: frame - delay,
      fps,
      config: { damping: 15, stiffness: 180 },
    });
    const opacity = interpolate(frame, [delay, delay + 10], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return { scale, opacity };
  };

  // Arrow animations
  const getArrowOpacity = (index: number) => {
    const delay = 45 + index * 20;
    return interpolate(frame, [delay, delay + 10], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  };

  // Principles animation
  const principlesOpacity = interpolate(frame, [150, 170], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const principlesScale = spring({
    frame: frame - 150,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 50%, #0d1a0d 0%, ${COLORS.darkBg} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
      }}
    >
      {/* Section header */}
      <div
        style={{
          opacity: headerOpacity,
          transform: `translateY(${headerY}px)`,
          marginBottom: 10,
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
          // THE SOLUTION
        </p>
      </div>

      <h2
        style={{
          fontFamily: monoFont,
          fontSize: 52,
          fontWeight: "bold",
          color: COLORS.matrixGreen,
          margin: "0 0 10px 0",
          opacity: headerOpacity,
          textShadow: `0 0 20px ${COLORS.matrixGreen}40`,
        }}
      >
        THE WORKFLOW
      </h2>

      <p
        style={{
          fontFamily: monoFont,
          fontSize: 22,
          color: COLORS.brutalGray,
          margin: "0 0 50px 0",
          opacity: subtitleOpacity,
        }}
      >
        SDD + TDD = Production-ready code
      </p>

      {/* Workflow flowchart */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginBottom: 60,
        }}
      >
        {workflowSteps.map((step, index) => {
          const { scale, opacity } = getStepAnimation(index);
          const arrowOpacity = index < workflowSteps.length - 1 ? getArrowOpacity(index) : 0;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {/* Step box */}
              <div
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  padding: "20px 30px",
                  border: `3px solid ${step.color}`,
                  background: `${step.color}15`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: monoFont,
                    fontSize: 24,
                    fontWeight: "bold",
                    color: step.color,
                  }}
                >
                  {step.cmd}
                </div>
                <div
                  style={{
                    fontFamily: monoFont,
                    fontSize: 14,
                    color: COLORS.brutalGray,
                    marginTop: 5,
                  }}
                >
                  {step.label}
                </div>
              </div>

              {/* Arrow */}
              {index < workflowSteps.length - 1 && (
                <span
                  style={{
                    fontSize: 32,
                    color: COLORS.matrixGreen,
                    opacity: arrowOpacity,
                  }}
                >
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Principles */}
      <div
        style={{
          display: "flex",
          gap: 40,
          opacity: principlesOpacity,
          transform: `scale(${principlesScale})`,
        }}
      >
        {["YAGNI", "KISS", "DRY"].map((principle, index) => (
          <div
            key={index}
            style={{
              padding: "15px 30px",
              border: `2px solid ${COLORS.matrixGreen}`,
              background: `${COLORS.matrixGreen}10`,
            }}
          >
            <span
              style={{
                fontFamily: monoFont,
                fontSize: 24,
                fontWeight: "bold",
                color: COLORS.matrixGreen,
              }}
            >
              {principle}
            </span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
