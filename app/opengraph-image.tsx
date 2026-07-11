import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.ogImageAlt;
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
            "radial-gradient(circle at 0% 0%, rgba(33,183,243,0.28), transparent 42%), radial-gradient(circle at 100% 12%, rgba(168,85,247,0.24), transparent 40%), linear-gradient(135deg, #0b1029 0%, #121735 56%, #27164f 100%)",
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
              border: "2px solid rgba(33,183,243,0.45)",
              background: "rgba(33,183,243,0.12)",
              color: "#60d7ff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            AI
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
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            {["Laravel/PHP", "Shopify Apps", "AI Dashboards", "Cloud Servers"].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(96,215,255,0.36)",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  color: "#e0f2fe",
                  fontSize: "22px",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "#60d7ff",
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
