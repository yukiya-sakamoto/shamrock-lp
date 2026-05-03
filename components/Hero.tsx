"use client";

export default function Hero() {
  return (
    <section style={{ minHeight: "100svh", backgroundColor: "#131110", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Subtle grain texture via gradient */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(30,61,47,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(196,148,58,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px 60px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="grid-2">

          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(196,148,58,0.35)", padding: "5px 14px", borderRadius: 2, marginBottom: 32 }}>
              <span style={{ width: 5, height: 5, backgroundColor: "#C4943A", borderRadius: "50%", display: "inline-block" }} />
              <span style={{ fontSize: 10, color: "#C4943A", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Store Interior Construction</span>
            </div>

            <h1 style={{ fontSize: "clamp(46px, 7.5vw, 88px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
              <span style={{ display: "block", color: "#F0EDE8" }}>安くても、</span>
              <span style={{ display: "block", color: "#C4943A" }}>かっこいい。</span>
            </h1>

            <p style={{ fontSize: "clamp(12px, 1.6vw, 15px)", fontWeight: 600, color: "rgba(240,237,232,0.4)", marginBottom: 24, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              LowCost &amp; HighDesign
            </p>

            <p style={{ fontSize: 14, color: "#7A7672", lineHeight: 2.0, marginBottom: 44, maxWidth: 460 }}>
              店舗内装工事の核となる大工工事を直接施工することで、
              店舗工事費用を抑え、理想の店舗を現実的な予算で実現します。
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" style={{ display: "inline-block", backgroundColor: "#C4943A", color: "#131110", padding: "16px 36px", fontSize: 13, fontWeight: 800, letterSpacing: "0.08em", textDecoration: "none", borderRadius: 2, transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#D4A84A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#C4943A"}>
                無料相談・見積もり →
              </a>
              <a href="#works" style={{ display: "inline-block", border: "1px solid rgba(240,237,232,0.2)", color: "#F0EDE8", padding: "16px 28px", fontSize: 13, fontWeight: 600, textDecoration: "none", borderRadius: 2, transition: "all 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(240,237,232,0.5)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(240,237,232,0.2)"; }}>
                施工事例を見る
              </a>
            </div>

            <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(240,237,232,0.08)" }}>
              <a href="tel:072-665-8869" style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 900, color: "#F0EDE8", textDecoration: "none", letterSpacing: "0.04em" }}>
                072-665-8869
              </a>
              <div style={{ fontSize: 11, color: "#3E3C38", marginTop: 4, letterSpacing: "0.06em" }}>受付 9:00〜19:00（日祝定休）</div>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://static.wixstatic.com/media/11062b_a3a0fc7110504b12b74fa28666ea0bccf000.jpg"
                alt="施工事例"
                style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 4, filter: "brightness(0.85)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(19,17,16,0.6) 0%, transparent 50%)", borderRadius: 4 }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {[
                { num: "30+", label: "年の実績" },
                { num: "500+", label: "店舗施工" },
                { num: "¥0",  label: "相談無料" },
              ].map(s => (
                <div key={s.label} style={{ backgroundColor: "#1B1916", border: "1px solid rgba(240,237,232,0.07)", borderRadius: 4, padding: "18px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(20px, 2.8vw, 26px)", fontWeight: 900, color: "#C4943A" }}>{s.num}</div>
                  <div style={{ fontSize: 10, color: "#3E3C38", marginTop: 5, letterSpacing: "0.08em" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#1E3D2F", borderRadius: 4, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="16" height="20" fill="none" viewBox="0 0 16 20" style={{ flexShrink: 0 }}>
                <path d="M8 1C4.69 1 2 3.69 2 7c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" stroke="#C4943A" strokeWidth="1.4"/>
                <circle cx="8" cy="7" r="2" stroke="#C4943A" strokeWidth="1.4"/>
              </svg>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#F0EDE8", marginBottom: 3 }}>大阪・兵庫・京都 全域対応</div>
                <div style={{ fontSize: 11, color: "rgba(240,237,232,0.4)", lineHeight: 1.5 }}>大阪市内・北摂・南部 / 神戸・尼崎・三田 / 京都市内・長岡京</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
