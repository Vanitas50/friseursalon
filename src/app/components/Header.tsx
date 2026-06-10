import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const navLinks = [
  { label: "Start", to: "/" },
  { label: "Leistungen", to: "/leistungen" },
  { label: "Preise", to: "/preise" },
  { label: "Galerie", to: "/galerie" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Kontakt", to: "/kontakt" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(12,12,12,0.97)" : "rgba(12,12,12,0.8)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo */}
          <NavLink
            to="/"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "2px solid #c9a84c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(201,168,76,0.08)",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "#c9a84c", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, letterSpacing: 1 }}>NS</span>
            </div>
            <div>
              <div style={{ color: "#f0ebe0", fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 15, lineHeight: 1.2, letterSpacing: 0.5 }}>
                NEW Style
              </div>
              <div style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", lineHeight: 1 }}>
                Quickborn
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) => ({
                  color: isActive ? "#c9a84c" : "#9a9080",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  letterSpacing: 1.8,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  position: "relative",
                  paddingBottom: 2,
                  borderBottom: isActive ? "1px solid #c9a84c" : "1px solid transparent",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <button
            className="nav-desktop"
            onClick={() => navigate("/termin-buchen")}
            style={{
              background: "#c9a84c",
              color: "#0c0c0c",
              border: "none",
              borderRadius: 2,
              padding: "10px 20px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#e8c97a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Termin buchen
          </button>

          {/* Burger */}
          <button
            className="nav-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#f0ebe0", padding: 4, display: "flex" }}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#0c0c0c",
            display: "flex",
            flexDirection: "column",
            paddingTop: 72,
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", padding: "16px 0" }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  display: "block",
                  padding: "18px 28px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  color: isActive ? "#c9a84c" : "#f0ebe0",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  textDecoration: "none",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ padding: "24px 28px" }}>
            <button
              onClick={() => { setMenuOpen(false); navigate("/termin-buchen"); }}
              style={{
                width: "100%",
                background: "#c9a84c",
                color: "#0c0c0c",
                border: "none",
                borderRadius: 2,
                padding: "18px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Termin buchen
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) { .nav-desktop { display: none !important; } }
        @media (min-width: 961px) { .nav-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
