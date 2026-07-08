import { ImageResponse } from "next/og";

export const alt = "Leo Darshan | Personal Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf9f6",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          border: "1px solid #e6e2da",
          boxSizing: "border-box",
        }}
      >
        {/* Top section: Red dot logo & site title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "#bc3f3f",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#706d66",
              textTransform: "uppercase",
            }}
          >
            leodarshan.com
          </span>
        </div>

        {/* Middle section: Name and Role */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "72px",
              margin: 0,
              fontWeight: 800,
              color: "#1c1b1a",
              letterSpacing: "-0.02em",
            }}
          >
            Leo Darshan
          </h1>
          <p
            style={{
              fontSize: "32px",
              margin: 0,
              color: "#bc3f3f",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Software Developer
          </p>
        </div>

        {/* Bottom section: Description */}
        <div
          style={{
            maxWidth: "850px",
            fontSize: "24px",
            lineHeight: 1.5,
            color: "#706d66",
            fontWeight: 300,
          }}
        >
          Building Linux desktop applications and learning modern software development. Developer of LeoBook.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
