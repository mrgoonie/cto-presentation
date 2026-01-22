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

const COLORS = {
  matrixGreen: "#00ff41",
  matrixCyan: "#00d4ff",
  matrixTeal: "#0fdfdf",
  brutalRed: "#ff3131",
  brutalYellow: "#ffd700",
  brutalGray: "#888888",
  darkBg: "#0a0a0a",
};

export const CtaScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ClaudeKit header animation
  const headerScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 150 },
  });

  // Stat box animation
  const statOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const statScale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200 },
  });

  // Price animation
  const priceOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Discount animation with pulse
  const discountOpacity = interpolate(frame, [70, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const discountPulse = interpolate(
    Math.sin((frame - 70) * 0.2),
    [-1, 1],
    [0.95, 1.05]
  );

  // QR and profile animation
  const bottomOpacity = interpolate(frame, [100, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const qrScale = spring({
    frame: frame - 100,
    fps,
    config: { damping: 200 },
  });

  // Thank you text
  const thankYouOpacity = interpolate(frame, [140, 160], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const thankYouScale = spring({
    frame: frame - 140,
    fps,
    config: { damping: 10, stiffness: 100 },
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
      {/* ClaudeKit header */}
      <div
        style={{
          transform: `scale(${headerScale})`,
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        <h2
          style={{
            fontFamily: monoFont,
            fontSize: 56,
            fontWeight: "bold",
            color: COLORS.matrixGreen,
            margin: 0,
            textShadow: `0 0 30px ${COLORS.matrixGreen}50`,
          }}
        >
          CLAUDEKIT
        </h2>
        <p
          style={{
            fontFamily: monoFont,
            fontSize: 22,
            color: COLORS.matrixCyan,
            margin: "10px 0 0 0",
          }}
        >
          // My notebook for AI-assisted development
        </p>
      </div>

      {/* Stats box */}
      <div
        style={{
          opacity: statOpacity,
          transform: `scale(${statScale})`,
          padding: "20px 40px",
          border: `3px solid ${COLORS.matrixGreen}`,
          background: `${COLORS.matrixGreen}10`,
          marginBottom: 25,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: monoFont,
            fontSize: 24,
            color: COLORS.matrixGreen,
            margin: 0,
          }}
        >
          Trusted by <strong>3K+ engineers</strong> across{" "}
          <strong>109 countries</strong>
        </p>
      </div>

      {/* Price */}
      <div
        style={{
          opacity: priceOpacity,
          marginBottom: 15,
        }}
      >
        <span
          style={{
            fontFamily: monoFont,
            fontSize: 36,
            fontWeight: "bold",
            color: COLORS.brutalYellow,
          }}
        >
          $99 once. Lifetime updates.
        </span>
      </div>

      {/* Discount */}
      <div
        style={{
          opacity: discountOpacity,
          transform: `scale(${discountPulse})`,
          marginBottom: 40,
        }}
      >
        <span
          style={{
            fontFamily: monoFont,
            fontSize: 24,
            color: COLORS.brutalRed,
            background: `${COLORS.brutalRed}20`,
            padding: "10px 20px",
            border: `2px solid ${COLORS.brutalRed}`,
          }}
        >
          AIBUILDERSVN - 50% off - only 50 seats
        </span>
      </div>

      {/* Bottom section: QR + Profile */}
      <div
        style={{
          opacity: bottomOpacity,
          display: "flex",
          alignItems: "center",
          gap: 60,
        }}
      >
        {/* QR Code */}
        <div
          style={{
            transform: `scale(${qrScale})`,
            textAlign: "center",
          }}
        >
          <Img
            src={staticFile("qr-code.png")}
            style={{
              width: 140,
              height: 140,
              border: `2px solid ${COLORS.matrixGreen}`,
            }}
          />
          <p
            style={{
              fontFamily: monoFont,
              fontSize: 14,
              color: COLORS.brutalGray,
              margin: "10px 0 0 0",
            }}
          >
            Scan for resources
          </p>
        </div>

        {/* Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Img
            src={staticFile("profile.jpg")}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: `2px solid ${COLORS.matrixCyan}`,
            }}
          />
          <div>
            <p
              style={{
                fontFamily: monoFont,
                fontSize: 18,
                color: COLORS.matrixCyan,
                margin: 0,
              }}
            >
              Duy Nguyen
            </p>
            <p
              style={{
                fontFamily: monoFont,
                fontSize: 14,
                color: COLORS.brutalGray,
                margin: "5px 0 0 0",
              }}
            >
              @goon_nguyen
            </p>
          </div>
        </div>
      </div>

      {/* Thank you */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: thankYouOpacity,
          transform: `scale(${thankYouScale})`,
        }}
      >
        <p
          style={{
            fontFamily: monoFont,
            fontSize: 32,
            fontWeight: "bold",
            color: COLORS.matrixGreen,
            margin: 0,
            letterSpacing: "0.15em",
          }}
        >
          BUILD IN PUBLIC VIETNAM
        </p>
      </div>
    </AbsoluteFill>
  );
};
