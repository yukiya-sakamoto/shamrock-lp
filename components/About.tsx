const strengths = [
  {
    title: "直接施工による低価格",
    body: "下請け業者への丸投げをせず、大工工事を自社で直接施工。余分な中間マージンをカットして、その分をお客様に還元します。",
  },
  {
    title: "30年以上の職人技術",
    body: "長年培った職人としての技術と経験が強み。どんな素材、どんな形状にも対応できる確かな施工品質を保証します。",
  },
  {
    title: "予算管理の透明性",
    body: "見積もりから施工完了まで、費用の変動がないよう徹底管理。追加費用が発生する場合は必ず事前にご報告・ご相談します。",
  },
  {
    title: "大阪・関西エリア対応",
    body: "摂津市を拠点に大阪・関西全域に対応。遠方でもご相談ください。まずはオンライン打ち合わせからでも対応可能です。",
  },
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#0a0a0a", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: Company info */}
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
                About
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "32px",
              }}
            >
              安くても、
              <br />
              <span style={{ color: "#C9A84C" }}>かっこいい</span>を
              <br />
              実現する。
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "#888888",
                lineHeight: 2,
                marginBottom: "40px",
              }}
            >
              ウィリアム・シャムロック事務所は、大阪府摂津市を拠点とする店舗内装工事の専門集団です。
              <br />
              <br />
              「いいデザインの店舗は高い」という常識を覆すため、工事の核心である大工工事を直接手がけることで、
              品質を落とさずコストを大幅削減。
              <br />
              <br />
              あなたの夢の店舗を、現実的な予算で形にします。
            </p>

            {/* Company details */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { label: "会社名", value: "ウィリアム・シャムロック事務所" },
                { label: "所在地", value: "〒566-0073 大阪府摂津市鳥飼和道2丁目8-1" },
                { label: "電話", value: "072-665-8869" },
                { label: "メール", value: "M78@shamrock8869.com" },
                { label: "受付時間", value: "9:00〜19:00" },
                { label: "対応エリア", value: "大阪・関西全域" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#555555",
                      letterSpacing: "0.1em",
                      paddingTop: "2px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: "13px", color: "#cccccc" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Strengths */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {strengths.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "28px 32px",
                    backgroundColor: "#141414",
                    borderLeft: "3px solid #C9A84C",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "10px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#777777", lineHeight: 1.8 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
