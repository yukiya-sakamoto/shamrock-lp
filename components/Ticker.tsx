const items = [
  "大工工事", "床工事", "天井工事", "壁工事",
  "家具・什器工事", "カウンター工事", "軽天・LGS工事",
  "水道・設備工事", "ダクト工事", "電気設備工事",
  "DIYサポート", "店舗リフォーム",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div style={{ backgroundColor: "#1E3D2F", overflow: "hidden", padding: "13px 0" }}>
      <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 16, paddingRight: 40, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "rgba(240,237,232,0.55)", textTransform: "uppercase" }}>
            <span style={{ width: 3, height: 3, backgroundColor: "#C4943A", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
