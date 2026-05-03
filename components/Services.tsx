"use client";

/* SVG icons */
const IconStore    = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M3 10.5L12 3l9 7.5V21H15v-5h-6v5H3V10.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>;
const IconScissors = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="6" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1.4"/><line x1="8.5" y1="9" x2="21" y2="21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="8.5" y1="15" x2="15" y2="9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
const IconShop     = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2" y="10" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="1.4"/><path d="M2 10l2-7h16l2 7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 10c0 2.2-1.8 4-4 4M8 10c0 2.2 1.8 4 4 4m0 0c2.2 0 4-1.8 4-4m0 0c0 2.2 1.8 4 4 4" stroke="currentColor" strokeWidth="1.4"/></svg>;
const IconGym      = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="1" y="11" width="4" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/><rect x="19" y="11" width="4" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/><rect x="5" y="9" width="3" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/><rect x="16" y="9" width="3" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/><line x1="8" y1="13.5" x2="16" y2="13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
const IconOffice   = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.4"/></svg>;
const IconCounter  = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2" y="13" width="20" height="3" rx="1" stroke="currentColor" strokeWidth="1.4"/><path d="M5 16v4M19 16v4M7 13V7a2 2 0 012-2h6a2 2 0 012 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
const IconHammer   = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M15 5l4 4-9 9-4-1-1-4 10-8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M19 9l2-2-4-4-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>;
const IconWrench   = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a7 7 0 01-8 10l-7.5 7.5a2 2 0 01-2.83-2.83L10 13.5a7 7 0 0110-8l-3 3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IconDesign   = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;

const services = [
  { Icon: IconStore,    title: "飲食店の施工",         desc: "カフェ・レストラン・バーなど飲食業態の新規出店・改装。スケルトン物件から居抜きまで対応します。" },
  { Icon: IconScissors, title: "健康・美容サロン",       desc: "ヘアサロン・ネイル・脱毛・鍼灸院など。設備工事から内装仕上げまで一括対応します。" },
  { Icon: IconShop,     title: "販売店の施工",         desc: "テイクアウト・アパレル・雑貨店・ギャラリーなど。商品が映える空間に仕上げます。" },
  { Icon: IconGym,      title: "スポーツ施設・ジム",     desc: "スポーツスタジオ・パーソナルジムなど。床材・防音・鏡設置など専門ニーズに対応します。" },
  { Icon: IconOffice,   title: "教室・事務所",         desc: "学習塾・カルチャースクール・オフィスなど。使いやすさを重視したレイアウトと内装を提案します。" },
  { Icon: IconCounter,  title: "カウンター工事",        desc: "バーカウンター・受付・レジ台などオーダーメイドで造作。素材・形状・高さを自由に設計できます。" },
  { Icon: IconHammer,   title: "DIYサポート",          desc: "本職の大工がサポート。DIY50%＋施工50%、DIY30%＋施工70%など割合を柔軟に組み合わせられます。" },
  { Icon: IconWrench,   title: "店舗リフォーム・メンテナンス", desc: "老朽化した内装の改修・レイアウト変更・リニューアル。営業しながらのスケジュール調整も対応します。" },
  { Icon: IconDesign,   title: "店舗デザイン・設計",     desc: "設計・デザイン・施工をワンストップで対応。賃貸契約前の物件相談から予算相談まで。相談無料。" },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#1B1916", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60, flexWrap: "wrap", gap: 20 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 1, backgroundColor: "#C4943A" }} />
              <span style={{ fontSize: 10, color: "#C4943A", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Services</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#F0EDE8", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              サービス内容
            </h2>
          </div>
          <p style={{ fontSize: 13, color: "#7A7672", lineHeight: 1.9, maxWidth: 380 }}>
            スケルトン物件の新規出店から居抜き改装、DIYサポートまで。<br />
            設計・デザイン・施工をワンストップでご依頼いただけます。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: "rgba(240,237,232,0.06)" }} className="grid-3">
          {services.map(({ Icon, title, desc }) => (
            <div key={title}
              style={{ backgroundColor: "#1B1916", padding: "32px 28px", transition: "background 0.2s", cursor: "default" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#201E1A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#1B1916"}>
              <div style={{ color: "#C4943A", marginBottom: 16, opacity: 0.8 }}><Icon /></div>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: "#F0EDE8", marginBottom: 10, letterSpacing: "0.02em" }}>{title}</h3>
              <p style={{ fontSize: 12, color: "#7A7672", lineHeight: 1.9 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* 専門工事 */}
        <div style={{ marginTop: 2, backgroundColor: "#201E1A", padding: "32px 28px", display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center" }}>
          <div style={{ fontSize: 11, color: "#C4943A", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", minWidth: 100 }}>
            専門工事
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["大工工事（床・天井・壁）", "家具・什器工事", "カウンター工事", "軽天・LGS工事", "水道・設備工事", "ダクト工事", "電気設備工事"].map(item => (
              <span key={item} style={{ fontSize: 11, color: "#7A7672", border: "1px solid rgba(240,237,232,0.1)", padding: "5px 12px", borderRadius: 2 }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 52 }}>
          <p style={{ fontSize: 13, color: "#3E3C38", marginBottom: 20 }}>相談・見積もりは無料です。まずはお気軽にご連絡ください。</p>
          <a href="#contact"
            style={{ display: "inline-block", backgroundColor: "#C4943A", color: "#131110", padding: "16px 52px", fontSize: 13, fontWeight: 800, letterSpacing: "0.08em", textDecoration: "none", borderRadius: 2, transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#D4A84A"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#C4943A"}>
            無料相談する →
          </a>
        </div>
      </div>
    </section>
  );
}
