"use client";

const works = [
  { category: "飲食店",      title: "居酒屋の内装工事",             area: "大阪市淀川区", period: "1ヶ月", desc: "施主自ら既存床・クロスのめくりを行い予算削減。DIYと職人施工を組み合わせた事例。", img: "https://static.wixstatic.com/media/414edb_0dc3ade896dc4db9af43d398004ddf31~mv2.jpg" },
  { category: "美容サロン",   title: "ヘアカラーサロン内装",          area: "箕面市",      period: "1週間", desc: "給水・給湯・排水・電気の設備工事から内装仕上げまで。シャンプー台設置に対応。",   img: "https://static.wixstatic.com/media/414edb_8237c64d4a39462dbf41a3a302e1ca87~mv2.png" },
  { category: "飲食店",      title: "コンカフェ 大工工事",            area: "大阪市中央区", period: "3日間", desc: "トイレを「かわいい」イメージにリノベーション。短工期での内装チェンジ事例。",   img: "https://static.wixstatic.com/media/704f2b_7b24a1ed0faf480a9479f1ddb88e0c72~mv2.jpg" },
  { category: "物販店",      title: "ジュエリーショップ ディスプレイ棚", area: "大阪市中央区", period: "2週間", desc: "数百万円相当の棚を現場造作で格安実現。オーダーメイドのディスプレイ什器製作。",  img: "https://static.wixstatic.com/media/414edb_91c002a58ae04cca8eb2b902ecf08bcf~mv2.jpg" },
  { category: "カウンター工事", title: "立ち吞み屋のカウンター製作",   area: "大阪市中央区", period: "—",    desc: "木柄メラミンで仕上げた、立ち吞み屋の雰囲気にぴったりのカウンター。",           img: "https://static.wixstatic.com/media/133836_20a88d309c424342a84852749b6c3dce~mv2.jpg" },
  { category: "スポーツ施設",  title: "サバゲー場 大工工事",          area: "天理市",      period: "—",    desc: "グラスウール施工で体感温度を約5℃改善。特殊施設にも柔軟に対応。",               img: "https://static.wixstatic.com/media/704f2b_56ac44c807ec46a9b051e7df040e72ab~mv2.jpg" },
];

const catColor: Record<string, string> = {
  飲食店: "#1E3D2F", 美容サロン: "#4A3060", 物販店: "#1A3A5C",
  カウンター工事: "#5C3D10", スポーツ施設: "#1A3A2C",
};

export default function Works() {
  return (
    <section id="works" style={{ backgroundColor: "#EDE9E2", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 1, backgroundColor: "#C4943A" }} />
              <span style={{ fontSize: 10, color: "#C4943A", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Works</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.1 }}>施工事例</h2>
            <p style={{ fontSize: 12, color: "#A8A49E", marginTop: 8 }}>飲食・サロン・物販・スポーツ・カウンター工事など幅広く対応</p>
          </div>
          <a href="https://www.shamrock8869.com/portfolio" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: "#1E3D2F", textDecoration: "none", fontWeight: 700, border: "1.5px solid #1E3D2F", padding: "9px 18px", borderRadius: 2, letterSpacing: "0.04em", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#1E3D2F"; el.style.color = "#F6F3EE"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#1E3D2F"; }}>
            すべての施工事例 →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="grid-3">
          {works.map((work, i) => {
            const accent = catColor[work.category] ?? "#1E3D2F";
            return (
              <div key={i}
                style={{ backgroundColor: "#FAFAF8", borderRadius: 4, overflow: "hidden", border: "1px solid #E4DED6", transition: "all 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 6px 24px rgba(30,61,47,0.12)"; el.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}>
                <div style={{ position: "relative", height: 190, overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={work.img} alt={work.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseEnter={e => (e.target as HTMLElement).style.transform = "scale(1.06)"}
                    onMouseLeave={e => (e.target as HTMLElement).style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", top: 10, left: 10, backgroundColor: accent, color: "#fff", fontSize: 9, fontWeight: 700, padding: "4px 10px", borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {work.category}
                  </div>
                  {work.period !== "—" && (
                    <div style={{ position: "absolute", top: 10, right: 10, backgroundColor: "rgba(250,250,248,0.92)", color: "#636059", fontSize: 9, fontWeight: 600, padding: "4px 10px", borderRadius: 2 }}>
                      工期 {work.period}
                    </div>
                  )}
                </div>
                <div style={{ padding: "18px 18px 20px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 6, lineHeight: 1.45 }}>{work.title}</div>
                  <div style={{ fontSize: 10, color: "#A8A49E", marginBottom: 10, display: "flex", alignItems: "center", gap: 3 }}>
                    <svg width="9" height="11" fill="none" viewBox="0 0 9 11"><path d="M4.5 1C2.57 1 1 2.57 1 4.5c0 2.7 3.5 6.5 3.5 6.5S8 7.2 8 4.5C8 2.57 6.43 1 4.5 1z" stroke="#A8A49E" strokeWidth="1.1"/><circle cx="4.5" cy="4.5" r="1.2" stroke="#A8A49E" strokeWidth="1.1"/></svg>
                    {work.area}
                  </div>
                  <p style={{ fontSize: 12, color: "#636059", lineHeight: 1.85 }}>{work.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 48, paddingTop: 36, borderTop: "1px solid #E4DED6" }}>
          <p style={{ fontSize: 10, color: "#A8A49E", textAlign: "center", marginBottom: 24, letterSpacing: "0.2em", textTransform: "uppercase" }}>Portfolio Categories</p>
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
                <img src={item.img} alt={item.label} style={{ width: 84, height: 84, objectFit: "cover", borderRadius: 4, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }} />
                <span style={{ fontSize: 11, color: "#636059", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
