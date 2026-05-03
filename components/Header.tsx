"use client";
import { useState, useEffect } from "react";

const nav = [
  { label: "サービス",     href: "#services" },
  { label: "施工事例",     href: "#works"    },
  { label: "想い",         href: "#message"  },
  { label: "会社概要",     href: "#about"    },
  { label: "お問い合わせ", href: "#contact"  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled || open ? "rgba(19,17,16,0.96)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(240,237,232,0.08)" : "none",
      backdropFilter: scrolled || open ? "blur(16px)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <a href="#" style={{ textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://static.wixstatic.com/media/414edb_b7e2b466a9f74348944e3f23c3544134~mv2.jpg"
            alt="ウィリアム・シャムロック事務所"
            style={{ height: 36, width: "auto", objectFit: "contain", borderRadius: 3 }} />
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {nav.map(item => (
            <a key={item.href} href={item.href} className="hide-sp"
              style={{ color: "#7A7672", textDecoration: "none", fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "#F0EDE8"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "#7A7672"}>
              {item.label}
            </a>
          ))}

          <a href="tel:072-665-8869" className="hide-sp"
            style={{ border: "1px solid #C4943A", color: "#C4943A", padding: "9px 20px", fontSize: 12, fontWeight: 700, textDecoration: "none", borderRadius: 2, letterSpacing: "0.06em", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#C4943A"; el.style.color = "#131110"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#C4943A"; }}>
            無料相談
          </a>

          <button onClick={() => setOpen(!open)} className="show-sp"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "none" }}>
            {open
              ? <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><line x1="3" y1="3" x2="17" y2="17" stroke="#F0EDE8" strokeWidth="1.6" strokeLinecap="round"/><line x1="17" y1="3" x2="3" y2="17" stroke="#F0EDE8" strokeWidth="1.6" strokeLinecap="round"/></svg>
              : <svg width="22" height="14" fill="none" viewBox="0 0 22 14"><line x1="0" y1="1" x2="22" y2="1" stroke="#F0EDE8" strokeWidth="1.6" strokeLinecap="round"/><line x1="0" y1="7" x2="22" y2="7" stroke="#F0EDE8" strokeWidth="1.6" strokeLinecap="round"/><line x1="0" y1="13" x2="22" y2="13" stroke="#F0EDE8" strokeWidth="1.6" strokeLinecap="round"/></svg>}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ backgroundColor: "#1B1916", borderTop: "1px solid rgba(240,237,232,0.08)", padding: "4px 24px 24px" }}>
          {nav.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", color: "#F0EDE8", textDecoration: "none", fontSize: 15, fontWeight: 600, borderBottom: "1px solid rgba(240,237,232,0.07)" }}>
              {item.label}
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><line x1="3" y1="8" x2="13" y2="8" stroke="#C4943A" strokeWidth="1.4" strokeLinecap="round"/><polyline points="9,4 13,8 9,12" stroke="#C4943A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 18 }}>
            <a href="tel:072-665-8869" style={{ backgroundColor: "#C4943A", color: "#131110", padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: 800, textDecoration: "none", borderRadius: 3 }}>電話で相談</a>
            <a href="mailto:M78@shamrock8869.com" style={{ border: "1px solid rgba(240,237,232,0.2)", color: "#F0EDE8", padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: 700, textDecoration: "none", borderRadius: 3 }}>メール</a>
          </div>
        </div>
      )}
    </header>
  );
}
