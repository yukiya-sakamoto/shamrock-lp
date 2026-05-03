export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", padding: "40px 24px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "32px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#C9A84C",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            William
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "0.05em",
            }}
          >
            SHAMROCK
          </div>
          <div
            style={{ fontSize: "11px", color: "#444444", marginTop: "4px" }}
          >
            ウィリアム・シャムロック事務所
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "11px", color: "#444444", letterSpacing: "0.05em" }}>
            〒566-0073 大阪府摂津市鳥飼和道2丁目8-1
          </p>
          <p style={{ fontSize: "11px", color: "#444444", marginTop: "4px" }}>
            © {new Date().getFullYear()} William Shamrock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
