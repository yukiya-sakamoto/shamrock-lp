"use client";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0E0C0A", padding: "48px 24px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 36, marginBottom: 36, paddingBottom: 32, borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://static.wixstatic.com/media/414edb_b7e2b466a9f74348944e3f23c3544134~mv2.jpg"
              alt="ウィリアム・シャムロック事務所"
              style={{ height: 34, width: "auto", objectFit: "contain", borderRadius: 2, marginBottom: 12, opacity: 0.7 }} />
            <div style={{ fontSize: 11, color: "#3E3C38", lineHeight: 1.8 }}>
              〒566-0073 大阪府摂津市鳥飼和道2丁目8-1<br />
              TEL: 072-665-8869 　FAX: 072-665-8871<br />
              大阪府知事許可（般-3）第157349号
            </div>
          </div>

          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 9, color: "#C4943A", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>Navigation</div>
              {[["#services","サービス"],["#works","施工事例"],["#message","想い"],["#about","会社概要"],["#contact","お問い合わせ"]].map(([href,label]) => (
                <a key={href} href={href}
                  style={{ display: "block", fontSize: 12, color: "#3E3C38", textDecoration: "none", marginBottom: 8, letterSpacing: "0.04em", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "#7A7672"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "#3E3C38"}>
                  {label}
                </a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 9, color: "#C4943A", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>Contact</div>
              <a href="tel:072-665-8869" style={{ display: "block", fontSize: 16, fontWeight: 900, color: "#7A7672", textDecoration: "none", marginBottom: 4, letterSpacing: "0.04em" }}>
                072-665-8869
              </a>
              <div style={{ fontSize: 10, color: "#3E3C38", marginBottom: 12 }}>9:00〜19:00（日祝定休）</div>
              <a href="mailto:M78@shamrock8869.com" style={{ fontSize: 11, color: "#3E3C38", textDecoration: "none" }}>
                M78@shamrock8869.com
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <a href="https://www.shamrock8869.com/general-5" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 10, color: "#3E3C38", textDecoration: "none" }}>プライバシーポリシー</a>
          <p style={{ fontSize: 10, color: "#3E3C38" }}>© 2021 William Shamrock Office. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
