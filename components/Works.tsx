"use client";

const works = [
  {
    id: 1,
    category: "飲食店",
    title: "カフェ内装リニューアル",
    area: "大阪市北区",
    color: "#1e1e1e",
    accent: "#C9A84C",
  },
  {
    id: 2,
    category: "美容室",
    title: "ヘアサロン新規出店",
    area: "豊中市",
    color: "#1a1a1a",
    accent: "#8B7355",
  },
  {
    id: 3,
    category: "バー",
    title: "バーカウンター製作",
    area: "大阪市中央区",
    color: "#1c1c1c",
    accent: "#C9A84C",
  },
  {
    id: 4,
    category: "物販店",
    title: "セレクトショップ改装",
    area: "吹田市",
    color: "#181818",
    accent: "#9A8866",
  },
  {
    id: 5,
    category: "飲食店",
    title: "ラーメン店内装工事",
    area: "摂津市",
    color: "#1e1a18",
    accent: "#C9A84C",
  },
  {
    id: 6,
    category: "オフィス",
    title: "受付カウンター製作",
    area: "大阪市西区",
    color: "#181c1e",
    accent: "#7A8896",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      style={{ backgroundColor: "#0d0d0d", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  backgroundColor: "#C9A84C",
                }}
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
                Works
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              施工事例
            </h2>
          </div>
          <a
            href="https://www.shamrock8869.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              color: "#C9A84C",
              textDecoration: "none",
              letterSpacing: "0.1em",
              borderBottom: "1px solid rgba(201,168,76,0.4)",
              paddingBottom: "2px",
            }}
          >
            すべての施工事例を見る →
          </a>
        </div>

        {/* Works grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "16px",
          }}
        >
          {works.map((work) => (
            <div
              key={work.id}
              style={{
                backgroundColor: work.color,
                borderRadius: "4px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)")
              }
            >
              {/* Image placeholder */}
              <div
                style={{
                  height: "220px",
                  backgroundColor: work.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Abstract background design */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 20px,
                      rgba(255,255,255,0.015) 20px,
                      rgba(255,255,255,0.015) 21px
                    )`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    width: "60px",
                    height: "3px",
                    backgroundColor: work.accent,
                  }}
                />
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Photo Coming Soon
                </div>
              </div>

              {/* Card info */}
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    fontSize: "10px",
                    color: work.accent,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {work.category}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "8px",
                  }}
                >
                  {work.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#666666",
                    letterSpacing: "0.05em",
                  }}
                >
                  📍 {work.area}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            textAlign: "center",
            color: "#555555",
            fontSize: "12px",
            marginTop: "48px",
            letterSpacing: "0.05em",
          }}
        >
          ※ 掲載許可をいただいた施工事例のみ掲載しています
        </p>
      </div>
    </section>
  );
}
