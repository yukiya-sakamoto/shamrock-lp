export default function Message() {
  return (
    <section id="message" style={{ backgroundColor: "#1E3D2F", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,148,58,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", position: "relative", zIndex: 1 }} className="grid-2">
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://static.wixstatic.com/media/11062b_9181e09668144a139d3b107a08acd708f000.jpg"
            alt="施工現場"
            style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 3, filter: "brightness(0.75)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,61,47,0.6) 0%, transparent 50%)", borderRadius: 3 }} />
          <div style={{ position: "absolute", bottom: -12, right: -12, backgroundColor: "#C4943A", borderRadius: 3, padding: "20px 24px", color: "#131110", textAlign: "center", boxShadow: "0 4px 24px rgba(196,148,58,0.35)" }}>
            <div style={{ fontSize: 32, fontWeight: 900, lineHeight: 1 }}>30+</div>
            <div style={{ fontSize: 9, fontWeight: 800, marginTop: 5, letterSpacing: "0.12em" }}>YEARS</div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 28, height: 1, backgroundColor: "#C4943A" }} />
            <span style={{ fontSize: 10, color: "#C4943A", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Message</span>
          </div>

          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 900, color: "#F0EDE8", lineHeight: 1.65, marginBottom: 24 }}>
            私たちは<br />店舗工事の内装業者です。
          </h2>

          <div style={{ width: 32, height: 1, backgroundColor: "rgba(240,237,232,0.15)", marginBottom: 28 }} />

          <div style={{ fontSize: 14, color: "rgba(240,237,232,0.55)", lineHeight: 2.1, marginBottom: 36 }}>
            <p style={{ marginBottom: 16 }}>あなたの真のパートナーとして、圧倒的なコストパフォーマンスと、安価で工事費用を抑える他社にないノウハウを持っています。</p>
            <p style={{ marginBottom: 16 }}>スケルトン物件での新規出店も、居抜き物件での改装工事も、クリエイティブに問題を解決し、それぞれのサービスによってあなたに満足と成功をお届けすることをお約束いたします。</p>
            <p>賃貸契約前の物件相談から、設計・デザイン・予算相談、各種トラブル、設備工事の適合まで。店舗内装・改装工事を直接職人にお任せください。</p>
          </div>

          <div style={{ borderTop: "1px solid rgba(240,237,232,0.1)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 10, color: "rgba(240,237,232,0.3)", letterSpacing: "0.08em", marginBottom: 6 }}>株式会社 ウィリアム・シャムロック事務所 代表</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#F0EDE8", letterSpacing: "0.06em" }}>安本 真由美</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://static.wixstatic.com/media/414edb_b7e2b466a9f74348944e3f23c3544134~mv2.jpg"
              alt="logo" style={{ height: 32, width: "auto", objectFit: "contain", borderRadius: 2, opacity: 0.5 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
