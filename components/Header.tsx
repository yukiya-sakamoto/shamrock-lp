"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "サービス", href: "#services" },
  { label: "施工事例", href: "#works" },
  { label: "会社概要", href: "#about" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        padding: "16px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#C9A84C",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              William
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.05em",
                lineHeight: 1.1,
              }}
            >
              SHAMROCK
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: "#cccccc",
                textDecoration: "none",
                fontSize: "13px",
                letterSpacing: "0.1em",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#C9A84C")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#cccccc")
              }
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:072-665-8869"
            style={{
              backgroundColor: "#C9A84C",
              color: "#0a0a0a",
              padding: "10px 20px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "background-color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#E8C86A")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#C9A84C")
            }
          >
            無料相談
          </a>
        </nav>
      </div>
    </header>
  );
}
