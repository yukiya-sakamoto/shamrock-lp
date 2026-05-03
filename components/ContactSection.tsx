"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#141414",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #C9A84C, #8B7355, #C9A84C)",
        }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A84C" }} />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#C9A84C",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Contact
          </span>
          <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A84C" }} />
        </div>

        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          まずは無料相談から
        </h2>
        <p style={{ fontSize: "14px", color: "#666666", marginBottom: "60px" }}>
          相談・見積は完全無料。お気軽にご連絡ください。
        </p>

        {/* Contact options */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {/* Phone */}
          <a
            href="tel:072-665-8869"
            style={{
              display: "block",
              backgroundColor: "#C9A84C",
              color: "#0a0a0a",
              padding: "40px 32px",
              textDecoration: "none",
              borderRadius: "4px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#E8C86A")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#C9A84C")
            }
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "12px",
                opacity: 0.7,
              }}
            >
              Phone
            </div>
            <div
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 900,
                letterSpacing: "0.05em",
                marginBottom: "8px",
              }}
            >
              072-665-8869
            </div>
            <div style={{ fontSize: "12px", fontWeight: 600, opacity: 0.7 }}>
              受付時間 9:00〜19:00
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:M78@shamrock8869.com"
            style={{
              display: "block",
              backgroundColor: "#1e1e1e",
              color: "#ffffff",
              padding: "40px 32px",
              textDecoration: "none",
              borderRadius: "4px",
              border: "1px solid rgba(201,168,76,0.2)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#252525";
              el.style.borderColor = "rgba(201,168,76,0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#1e1e1e";
              el.style.borderColor = "rgba(201,168,76,0.2)";
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "12px",
                color: "#C9A84C",
              }}
            >
              Email
            </div>
            <div
              style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                fontWeight: 700,
                marginBottom: "8px",
                wordBreak: "break-all",
              }}
            >
              M78@shamrock8869.com
            </div>
            <div style={{ fontSize: "12px", color: "#666666" }}>
              24時間受付・翌営業日返信
            </div>
          </a>
        </div>

        {/* SNS */}
        <div>
          <p style={{ fontSize: "12px", color: "#444444", marginBottom: "16px", letterSpacing: "0.1em" }}>
            FOLLOW US
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
            {[
              { label: "Instagram", href: "https://www.instagram.com/williamshammrock/" },
              { label: "Facebook", href: "https://www.facebook.com/shamrock8869" },
              { label: "TikTok", href: "https://www.tiktok.com/@shamrock8869" },
            ].map((sns) => (
              <a
                key={sns.label}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  color: "#666666",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  padding: "8px 16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "2px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#C9A84C";
                  el.style.borderColor = "rgba(201,168,76,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#666666";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                {sns.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
