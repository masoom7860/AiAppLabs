import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} | AI Product Studio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 0% 0%, rgba(34,211,238,0.25), transparent 45%), linear-gradient(135deg, #020617 0%, #0f172a 55%, #111827 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "999px",
              border: "2px solid rgba(34,211,238,0.4)",
              background: "rgba(34,211,238,0.1)",
              color: "#67e8f9",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            AL
          </div>
          <div style={{ fontSize: "34px", fontWeight: 600 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div style={{ fontSize: "30px", color: "#94a3b8", maxWidth: "820px" }}>
            {siteConfig.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "#67e8f9",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {new URL(siteConfig.url).host}
        </div>
      </div>
    ),
    { ...size },
  );
}
