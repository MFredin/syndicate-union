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
        <svg width="120" height="120" viewBox="0 0 100 100" style={{ marginBottom: 28 }}>
          <polygon
            points="50,10 84.64,30 84.64,70 50,90 15.36,70 15.36,30"
            fill="#1E3F8F"
            stroke="#C9A227"
            strokeWidth={3}
          />
          <rect x="34" y="44" width="8" height="22" fill="#C9A227" />
          <rect x="46" y="34" width="8" height="32" fill="#C9A227" />
          <rect x="58" y="44" width="8" height="22" fill="#C9A227" />
          <path
            d="M50 20 L53 26 L59 26.5 L54.5 30.5 L56 36.5 L50 33 L44 36.5 L45.5 30.5 L41 26.5 L47 26 Z"
            fill="#C9A227"
          />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#F7F8FA",
          }}
        >
          SYNDICATE&nbsp;<span style={{ color: "#D9B94F" }}>UNION</span>
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
