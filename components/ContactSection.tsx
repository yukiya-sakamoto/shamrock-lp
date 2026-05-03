"use client";

export default function ContactSection() {
  return (
    <section id="contact" style={{ backgroundColor: "#131110", padding: "96px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 28, height: 1, backgroundColor: "#C4943A" }} />
            <span style={{ fontSize: 10, color: "#C4943A", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Contact</span>
            <div style={{ width: 28, height: 1, backgroundColor: "#C4943A" }} />
          </div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 900, color: "#F0EDE8", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>
            無料相談・お問い合わせ
          </h2>
          <p style={{ fontSize: 13, color: "#7A7672", lineHeight: 1.9 }}>
            内装工事のご相談、ご質問があれば、電話・メールにてお気軽にご連絡ください。<br />
            相談・見積もりは無料です。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }} className="grid-2">
          <a href="tel:072-665-8869"
            style={{ display: "block", backgroundColor: "#C4943A", borderRadius: 3, padding: "44px 36px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#D4A84A"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#C4943A"}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#131110" strokeWidth="1.6" strokeLinecap="round"/></svg>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.22em", color: "rgba(19,17,16,0.6)", textTransform: "uppercase" }}>Phone</span>
            </div>
            <div style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 900, color: "#131110", letterSpacing: "0.04em", marginBottom: 8 }}>
              072-665-8869
            </div>
            <div style={{ fontSize: 11, color: "rgba(19,17,16,0.55)" }}>受付時間 9:00〜19:00（日祝定休）</div>
            <div style={{ marginTop: 24, fontSize: 12, color: "#131110", fontWeight: 800, letterSpacing: "0.06em" }}>今すぐ電話する →</div>
          </a>

          <a href="mailto:M78@shamrock8869.com"
            style={{ display: "block", backgroundColor: "#1B1916", borderRadius: 3, padding: "44px 36px", textDecoration: "none", border: "1px solid rgba(240,237,232,0.08)", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(196,148,58,0.3)"; el.style.backgroundColor = "#201E1A"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(240,237,232,0.08)"; el.style.backgroundColor = "#1B1916"; }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#C4943A" strokeWidth="1.5"/><polyline points="22,6 12,13 2,6" stroke="#C4943A" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.22em", color: "#C4943A", textTransform: "uppercase" }}>Email</span>
            </div>
            <div style={{ fontSize: "clamp(13px, 2vw, 17px)", fontWeight: 700, color: "#F0EDE8", marginBottom: 8, wordBreak: "break-all" }}>
              M78@shamrock8869.com
            </div>
            <div style={{ fontSize: 11, color: "#3E3C38" }}>24時間受付・翌営業日返信</div>
            <div style={{ marginTop: 24, fontSize: 12, color: "#C4943A", fontWeight: 800, letterSpacing: "0.06em" }}>メールで相談する →</div>
          </a>
        </div>

        {/* Inquiry fields hint */}
        <div style={{ backgroundColor: "#1B1916", borderRadius: 3, padding: "24px 28px", border: "1px solid rgba(240,237,232,0.06)", marginBottom: 24 }}>
          <div style={{ fontSize: 10, color: "#3E3C38", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
            お問い合わせの際にお伝えいただくとスムーズです
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {["業種", "工事種別", "現在の状態（スケルトン / 居抜き）", "店舗の住所", "オープン希望日", "工事のご予算", "店舗の広さ", "ご希望の工事内容"].map(item => (
              <span key={item} style={{ fontSize: 11, color: "#7A7672", border: "1px solid rgba(240,237,232,0.08)", padding: "5px 12px", borderRadius: 2 }}>{item}</span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {["相談・見積もり完全無料", "物件探し段階からの相談OK", "他府県出張対応可"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 13 13"><circle cx="6.5" cy="6.5" r="5.5" stroke="rgba(196,148,58,0.5)" strokeWidth="1.1"/><polyline points="3.5,6.5 5.5,8.5 9.5,4.5" stroke="#C4943A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontSize: 12, color: "#3E3C38", fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
