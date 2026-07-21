import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B1220 0%, #142a5c 55%, #1E3F8F 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <svg width="130" height="93" viewBox="0 0 140 100" style={{ marginBottom: 28 }}>
          <g fill="#C9A227" opacity={0.9}>
            <path d="M96 40 Q112 28 120 14 Q106 26 94 34 Z" />
            <path d="M96 48 Q118 38 130 20 Q112 34 94 44 Z" />
            <path d="M94 56 Q122 48 136 26 Q116 42 92 52 Z" />
            <path d="M44 40 Q28 28 20 14 Q34 26 46 34 Z" />
            <path d="M44 48 Q22 38 10 20 Q28 34 46 44 Z" />
            <path d="M46 56 Q18 48 4 26 Q24 42 48 52 Z" />
          </g>
          <path
            d="M70 6 Q86 6 98 14 L98 46 Q98 74 70 92 Q42 74 42 46 L42 14 Q54 6 70 6 Z"
            fill="#1E3F8F"
            stroke="#C9A227"
            strokeWidth={3}
          />
          <path
            d="M70 22 L73.5 31 L83 32 L76 38.5 L78 48 L70 43 L62 48 L64 38.5 L57 32 L66.5 31 Z"
            fill="#C9A227"
          />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#F7F8FA",
          }}
        >
          Syndicate&nbsp;<span style={{ color: "#D9B94F" }}>Union</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            width: 90,
            height: 3,
            background: "#C9A227",
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 28,
            letterSpacing: 3,
            color: "#C3D3F5",
            textTransform: "uppercase",
          }}
        >
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
