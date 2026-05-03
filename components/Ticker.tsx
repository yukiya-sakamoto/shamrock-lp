const items = [
  "店舗内装工事",
  "大工工事",
  "カウンター工事",
  "DIYサポート",
  "店舗リフォーム",
  "軽天・LGS工事",
  "家具什器工事",
  "水道・設備工事",
  "ダクト工事",
  "無料相談受付中",
];

export default function Ticker() {
  const repeated = [...items, ...items];

  return (
    <div
      style={{
        backgroundColor: "#C9A84C",
        overflow: "hidden",
        padding: "12px 0",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: "0",
          whiteSpace: "nowrap",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "24px",
              paddingRight: "48px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#0a0a0a",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "4px",
                backgroundColor: "#0a0a0a",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
