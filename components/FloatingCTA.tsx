"use client";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <div className="sp-flex" style={{ position: "fixed", bottom: 16, left: 16, right: 16, zIndex: 200, display: "none", gap: 10 }}>
      <a href="tel:072-665-8869" style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
        backgroundColor: "#C4943A", color: "#131110", padding: "16px 0",
        fontSize: 14, fontWeight: 800, textDecoration: "none", borderRadius: 3,
        boxShadow: "0 4px 20px rgba(196,148,58,0.4)",
      }}>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#131110" strokeWidth="1.8" strokeLinecap="round"/></svg>
        電話で相談（無料）
      </a>
      <a href="mailto:M78@shamrock8869.com" style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
        backgroundColor: "#1B1916", color: "#F0EDE8", padding: "16px 0",
        fontSize: 14, fontWeight: 700, textDecoration: "none", borderRadius: 3,
        border: "1px solid rgba(240,237,232,0.15)", boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
      }}>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#F0EDE8" strokeWidth="1.6"/><polyline points="22,6 12,13 2,6" stroke="#F0EDE8" strokeWidth="1.6" strokeLinecap="round"/></svg>
        メール
      </a>
    </div>
  );
}
