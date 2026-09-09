import { ImageResponse } from "next/og";

export const alt = "Cennzo Robotix — The Humanoid For The Hard Places";
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
          backgroundColor: "#0b1220",
          color: "#f5f7fb",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundImage:
              "linear-gradient(90deg, transparent, #155eef, #7c3aed, #00a8a8, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -300,
            right: -200,
            width: 800,
            height: 800,
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(21,94,239,0.28), rgba(21,94,239,0))",
          }}
        />

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                backgroundImage: "linear-gradient(135deg, #155eef, #7c3aed, #00a8a8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 16, height: 16, borderRadius: 4, backgroundColor: "#ffffff" }} />
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: 6 }}>CENNZO</span>
              <span style={{ fontSize: 15, letterSpacing: 7, color: "#7d8db2" }}>ROBOTIX</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: 9999, backgroundColor: "#00e5c8" }} />
            <span style={{ fontSize: 15, letterSpacing: 5, color: "#00e5c8" }}>WAFEE·01 // SYS ONLINE</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={{ fontSize: 19, letterSpacing: 6, color: "#7d8db2" }}>
            WAFEE — UNIFIED MULTI-ENVIRONMENT HUMANOID PLATFORM
          </span>
          <span style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2, maxWidth: 900 }}>
            The Humanoid For The{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(100deg, #2a7bff, #7c3aed, #00e5c8)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Hard Places
            </span>
          </span>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              gap: 26,
              fontSize: 16,
              letterSpacing: 5,
              color: "#7d8db2",
            }}
          >
            <span>EARTH</span>
            <span style={{ color: "#31446f" }}>/</span>
            <span>WATER</span>
            <span style={{ color: "#31446f" }}>/</span>
            <span>FIRE</span>
            <span style={{ color: "#31446f" }}>/</span>
            <span>AIR</span>
            <span style={{ color: "#31446f" }}>/</span>
            <span>SPACE</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid #223052",
              paddingTop: 22,
            }}
          >
            <span style={{ fontSize: 17, letterSpacing: 4, color: "#cbd5e1" }}>
              Innovate · Automate · Elevate
            </span>
            <span style={{ fontSize: 17, letterSpacing: 3, color: "#7d8db2" }}>
              cennzo.com
            </span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
