import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1220",
        }}
      >
        <svg width="30" height="22" viewBox="0 0 140 100">
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
            strokeWidth={4}
          />
          <path
            d="M70 22 L73.5 31 L83 32 L76 38.5 L78 48 L70 43 L62 48 L64 38.5 L57 32 L66.5 31 Z"
            fill="#C9A227"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
