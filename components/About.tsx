"use client";

const faq = [
  { q: "見積もりは無料ですか？",           a: "ほとんどの場合無料です。ただし、設計が必要な物件や解体調査費用がかかる場合は事前にご説明し、同意を得た上で進めます。" },
  { q: "予算が限られていても相談できますか？", a: "はい、可能です。限られた予算内で最も効果的なアイデアをご提案します。30年の予算コントロール経験があります。" },
  { q: "工事期間はどのくらいですか？",       a: "15坪程度で約1ヶ月が目安です。ファサード工事のみなら2〜3日、大規模工事では6ヶ月程度かかる場合もあります。" },
  { q: "デザイン提案はしてもらえますか？",   a: "独立したデザイン提案は行いませんが、ご要望を膨らませたり付け加えたりする形で対応します。デザイン会社のご紹介も可能です。" },
  { q: "対応エリアはどこですか？",           a: "大阪市を中心に、大阪府全域・京都・神戸・尼崎に対応。他府県への出張も可能ですのでご相談ください。" },
  { q: "カウンター工事の工期は？",           a: "簡単なリメイク・交換であれば2〜3日、本格的な造作工事は1〜2週間が目安です。図面がない状態でも見積もり対応可能です。" },
  { q: "DIYサポートとはどのような内容ですか？", a: "DIYサポート50%＋施工50%、DIY30%＋施工70%など割合を柔軟に組み合わせられます。設計・計画サポート、設備工事のみの対応も可能です。" },
];

const tableRows = [
  { label: "会社名",    value: "株式会社\nウィリアム・シャムロック事務所" },
  { label: "代表者",    value: "安本 真由美" },
  { label: "設立",      value: "2021年12月9日" },
  { label: "資本金",    value: "500万円" },
  { label: "従業員数",  value: "8名" },
  { label: "許可番号",  value: "大阪府知事許可（般-3）第157349" },
  { label: "所在地",    value: "〒566-0073\n大阪府摂津市鳥飼和道2丁目8-1" },
  { label: "電話 / FAX", value: "072-665-8869 / 072-665-8871" },
  { label: "メール",    value: "M78@shamrock8869.com" },
  { label: "受付時間",  value: "9:00〜19:00（日祝定休）" },
  { label: "対応エリア", value: "大阪府全域・神戸・京都\n他府県出張対応可" },
  { label: "事業内容",  value: "店舗デザイン・店舗内装\n店舗改装・内装工事 等" },
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#1B1916", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="grid-2">

          {/* Company */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 1, backgroundColor: "#C4943A" }} />
              <span style={{ fontSize: 10, color: "#C4943A", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Company</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 900, color: "#F0EDE8", letterSpacing: "-0.02em", marginBottom: 28 }}>会社概要</h2>

            <div style={{ border: "1px solid rgba(240,237,232,0.08)", borderRadius: 3, overflow: "hidden" }}>
              {tableRows.map((row, i) => (
                <div key={row.label} style={{ display: "grid", gridTemplateColumns: "92px 1fr", borderBottom: i < tableRows.length - 1 ? "1px solid rgba(240,237,232,0.05)" : "none" }}>
                  <div style={{ padding: "12px 14px", backgroundColor: "#201E1A", fontSize: 10, color: "#3E3C38", fontWeight: 700, letterSpacing: "0.04em", display: "flex", alignItems: "flex-start", paddingTop: 14 }}>
                    {row.label}
                  </div>
                  <div style={{ padding: "12px 14px", fontSize: 12, color: "#F0EDE8", fontWeight: 400, whiteSpace: "pre-line", lineHeight: 1.75 }}>
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                { label: "Instagram", href: "https://www.instagram.com/williamshamrock_office/", icon: "https://static.wixstatic.com/media/53f79f_76a15e55952944b182f1736db9438c6a~mv2.png" },
                { label: "TikTok",    href: "https://www.tiktok.com/@williamshamrock_office",    icon: "https://static.wixstatic.com/media/11062b_7a80704b0d4547c4a6a39347d587411d~mv2.png" },
                { label: "Facebook",  href: "https://www.facebook.com/WillamShamrock/",           icon: "https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png" },
              ].map(sns => (
                <a key={sns.label} href={sns.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#7A7672", textDecoration: "none", border: "1px solid rgba(240,237,232,0.1)", padding: "7px 14px", borderRadius: 2, fontWeight: 600, transition: "all 0.2s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(196,148,58,0.4)"; el.style.color = "#C4943A"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(240,237,232,0.1)"; el.style.color = "#7A7672"; }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sns.icon} alt={sns.label} style={{ width: 14, height: 14, objectFit: "contain", filter: "invert(1) brightness(0.5)" }} />
                  {sns.label}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 1, backgroundColor: "#C4943A" }} />
              <span style={{ fontSize: 10, color: "#C4943A", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>FAQ</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 900, color: "#F0EDE8", letterSpacing: "-0.02em", marginBottom: 28 }}>よくある質問</h2>

            <div>
              {faq.map((item, i) => (
                <div key={i} style={{ padding: "20px 0", borderBottom: i < faq.length - 1 ? "1px solid rgba(240,237,232,0.06)" : "none" }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 900, color: "#C4943A", flexShrink: 0, lineHeight: 1.4 }}>Q</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#F0EDE8", lineHeight: 1.5 }}>{item.q}</span>
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 12, fontWeight: 900, color: "#1E3D2F", flexShrink: 0, lineHeight: 1.6 }}>A</span>
                    <span style={{ fontSize: 12, color: "#7A7672", lineHeight: 1.85 }}>{item.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
