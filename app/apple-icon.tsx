import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        <svg width="140" height="140" viewBox="0 0 100 100">
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
      </div>
    ),
    { ...size }
  );
}
