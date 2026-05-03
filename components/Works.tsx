"use client";

const works = [
  { category: "飲食店",     title: "居酒屋の内装工事",            area: "大阪市淀川区", period: "1ヶ月",  desc: "施主自ら既存床・クロスのめくりを行い予算削減。DIYと職人施工を組み合わせた事例。", img: "https://static.wixstatic.com/media/414edb_0dc3ade896dc4db9af43d398004ddf31~mv2.jpg" },
  { category: "美容サロン",  title: "ヘアカラーサロン内装",         area: "箕面市",     period: "1週間",  desc: "給水・給湯・排水・電気の設備工事から内装仕上げまで。シャンプー台設置に対応。",   img: "https://static.wixstatic.com/media/414edb_8237c64d4a39462dbf41a3a302e1ca87~mv2.png" },
  { category: "飲食店",     title: "コンカフェ 大工工事",           area: "大阪市中央区", period: "3日間",  desc: "トイレを「かわいい」イメージにリノベーション。短工期での内装チェンジ事例。",   img: "https://static.wixstatic.com/media/704f2b_7b24a1ed0faf480a9479f1ddb88e0c72~mv2.jpg" },
  { category: "物販店",     title: "ジュエリーショップ ディスプレイ棚", area: "大阪市中央区", period: "2週間",  desc: "数百万円相当の棚を現場造作で格安実現。オーダーメイドのディスプレイ什器製作。",  img: "https://static.wixstatic.com/media/414edb_91c002a58ae04cca8eb2b902ecf08bcf~mv2.jpg" },
  { category: "カウンター工事", title: "立ち吞み屋のカウンター製作",  area: "大阪市中央区", period: "—",     desc: "木柄メラミンで仕上げた、立ち吞み屋の雰囲気にぴったりのカウンター。",           img: "https://static.wixstatic.com/media/133836_20a88d309c424342a84852749b6c3dce~mv2.jpg" },
  { category: "スポーツ施設", title: "サバゲー場 大工工事",          area: "天理市",     period: "—",     desc: "グラスウール施工で体感温度を約5℃改善。特殊施設にも柔軟に対応。",               img: "https://static.wixstatic.com/media/704f2b_56ac44c807ec46a9b051e7df040e72ab~mv2.jpg" },
];

export default function Works() {
  return (
    <section id="works" style={{ backgroundColor: "#131110", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 1, backgroundColor: "#C4943A" }} />
              <span style={{ fontSize: 10, color: "#C4943A", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Works</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#F0EDE8", letterSpacing: "-0.02em", lineHeight: 1.1 }}>施工事例</h2>
            <p style={{ fontSize: 12, color: "#3E3C38", marginTop: 8 }}>飲食・サロン・物販・スポーツ・カウンター工事など幅広く対応</p>
          </div>
          <a href="https://www.shamrock8869.com/portfolio" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: "#C4943A", textDecoration: "none", fontWeight: 600, border: "1px solid rgba(196,148,58,0.4)", padding: "9px 18px", borderRadius: 2, letterSpacing: "0.06em", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#C4943A"; el.style.backgroundColor = "rgba(196,148,58,0.06)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(196,148,58,0.4)"; el.style.backgroundColor = "transparent"; }}>
            すべての施工事例 →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="grid-3">
          {works.map((work, i) => (
            <div key={i}
              style={{ backgroundColor: "#1B1916", borderRadius: 3, overflow: "hidden", border: "1px solid rgba(240,237,232,0.06)", transition: "all 0.3s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(196,148,58,0.3)"; el.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(240,237,232,0.06)"; el.style.transform = "translateY(0)"; }}>
              <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={work.img} alt={work.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)", transition: "transform 0.5s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.transform = "scale(1.06)"}
                  onMouseLeave={e => (e.target as HTMLElement).style.transform = "scale(1)"} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(19,17,16,0.7) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", top: 12, left: 12, backgroundColor: "rgba(19,17,16,0.75)", color: "#C4943A", fontSize: 9, fontWeight: 700, padding: "4px 10px", borderRadius: 2, letterSpacing: "0.12em", textTransform: "uppercase", backdropFilter: "blur(4px)" }}>
                  {work.category}
                </div>
                {work.period !== "—" && (
                  <div style={{ position: "absolute", top: 12, right: 12, backgroundColor: "rgba(19,17,16,0.75)", color: "#7A7672", fontSize: 9, fontWeight: 600, padding: "4px 10px", borderRadius: 2, backdropFilter: "blur(4px)" }}>
                    工期 {work.period}
                  </div>
                )}
              </div>

              <div style={{ padding: "18px 20px 22px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#F0EDE8", marginBottom: 8, lineHeight: 1.45 }}>{work.title}</div>
                <div style={{ fontSize: 10, color: "#3E3C38", marginBottom: 10, display: "flex", alignItems: "center", gap: 4, letterSpacing: "0.04em" }}>
                  <svg width="10" height="12" fill="none" viewBox="0 0 10 12"><path d="M5 1C2.79 1 1 2.79 1 5c0 2.95 4 7.5 4 7.5S9 7.95 9 5c0-2.21-1.79-4-4-4z" stroke="#3E3C38" strokeWidth="1.1"/><circle cx="5" cy="5" r="1.2" stroke="#3E3C38" strokeWidth="1.1"/></svg>
                  {work.area}
                </div>
                <p style={{ fontSize: 11, color: "#7A7672", lineHeight: 1.85 }}>{work.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Category thumbnails */}
        <div style={{ marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(240,237,232,0.06)" }}>
          <p style={{ fontSize: 10, color: "#3E3C38", textAlign: "center", marginBottom: 28, letterSpacing: "0.22em", textTransform: "uppercase" }}>Portfolio Categories</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { img: "https://static.wixstatic.com/media/11062b_a670a82709b948a19b66cb34aba20e74~mv2.jpg",                        label: "飲食店" },
              { img: "https://static.wixstatic.com/media/11062b_7646b0e95b714a2eb897fef7aef77284~mv2.jpg",                        label: "サロン・鍼灸院" },
              { img: "https://static.wixstatic.com/media/11062b_0e2d1dcf163e42d1803fe3b2c9357246~mv2.jpg",                        label: "学習塾・スポーツ" },
              { img: "https://static.wixstatic.com/media/11062b_fcc784ece3874e1682abefa438a6bead~mv2_d_5600_3733_s_4_2.jpg", label: "カウンター・DIY" },
            ].map(item => (
              <a key={item.label} href="https://www.shamrock8869.com/portfolio" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textDecoration: "none", transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} style={{ width: 88, height: 88, objectFit: "cover", borderRadius: 3, filter: "brightness(0.75)", transition: "filter 0.2s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.filter = "brightness(0.95)"}
                  onMouseLeave={e => (e.target as HTMLElement).style.filter = "brightness(0.75)"} />
                <span style={{ fontSize: 11, color: "#7A7672", fontWeight: 600, letterSpacing: "0.06em" }}>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
