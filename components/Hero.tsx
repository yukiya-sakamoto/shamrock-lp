export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large background text */}
      <div
        style={{
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(120px, 20vw, 260px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.025)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        DESIGN
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Tag line */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{ width: "40px", height: "1px", backgroundColor: "#C9A84C" }}
          />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#C9A84C",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Store Interior Construction
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          <span style={{ display: "block", color: "#ffffff" }}>LowCost</span>
          <span style={{ display: "block", color: "#C9A84C" }}>
            &amp; HighDesign
          </span>
        </h1>

        {/* Sub heading */}
        <p
          style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 700,
            color: "#dddddd",
            marginBottom: "24px",
            letterSpacing: "0.05em",
          }}
        >
          安くても、かっこいい。
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#888888",
            maxWidth: "520px",
            lineHeight: 1.9,
            marginBottom: "48px",
          }}
        >
          店舗内装工事の核となる大工工事を直接施工。
          <br />
          中間マージンをなくし、30年以上の職人技術で
          <br />
          あなたの理想の店舗を適正価格で実現します。
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              backgroundColor: "#C9A84C",
              color: "#0a0a0a",
              padding: "18px 40px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.2s",
            }}
          >
            無料相談する →
          </a>
          <a
            href="#works"
            style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              padding: "18px 40px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.2s",
            }}
          >
            施工事例を見る
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "80px",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "30+", label: "年の実績" },
            { num: "500+", label: "店舗の施工実績" },
            { num: "0円", label: "相談・見積費用" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 900,
                  color: "#C9A84C",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#666666",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(transparent, #0a0a0a)",
        }}
      />
    </section>
  );
}
