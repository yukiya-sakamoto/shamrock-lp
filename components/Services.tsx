"use client";

const services = [
  {
    number: "01",
    title: "店舗内装工事",
    description:
      "カフェ・バー・美容室・飲食店など業種を問わずご対応。核となる大工工事を直接施工するため、中間マージンが発生せず低コストを実現。",
    tags: ["飲食店", "美容室", "物販店", "オフィス"],
  },
  {
    number: "02",
    title: "カウンター工事",
    description:
      "バーカウンター・受付カウンター・キッチンカウンターなど、店舗の顔となるカウンターを職人技でオーダーメイド制作。",
    tags: ["バーカウンター", "受付", "キッチン"],
  },
  {
    number: "03",
    title: "DIYサポート",
    description:
      "本職大工がそばでサポート。自分でやりたいけど不安な方へ。道具の使い方から施工まで丁寧に指導し、コストをさらに削減。",
    tags: ["個人", "小規模", "コスト削減"],
  },
  {
    number: "04",
    title: "店舗リフォーム",
    description:
      "老朽化した内装の改修、レイアウト変更、雰囲気のリニューアルまで幅広く対応。営業しながらの工事スケジュール調整も可能。",
    tags: ["改装", "レイアウト変更", "メンテナンス"],
  },
  {
    number: "05",
    title: "デザイン・設計",
    description:
      "予算内で最大限かっこよくなるデザイン提案。ヒアリングから図面作成、素材選定まで一貫してサポート。相談・見積は無料。",
    tags: ["無料相談", "図面作成", "素材提案"],
  },
  {
    number: "06",
    title: "専門工事",
    description:
      "軽天・LGS工事、水道・設備工事、ダクト工事など専門性の高い工事にも対応。ワンストップで全工程をお任せいただけます。",
    tags: ["軽天工事", "設備工事", "ダクト工事"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#0a0a0a", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
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
              Services
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
            サービス内容
          </h2>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
          }}
        >
          {services.map((service) => (
            <div
              key={service.number}
              style={{
                backgroundColor: "#0a0a0a",
                padding: "40px",
                transition: "background-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#141414")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#0a0a0a")
              }
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#C9A84C",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  marginBottom: "16px",
                }}
              >
                {service.number}
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "16px",
                  letterSpacing: "0.02em",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#888888",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                {service.description}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.3)",
                      padding: "3px 10px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
