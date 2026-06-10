import { MapPin, Clock } from "lucide-react";
import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "64px 24px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1.3fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <NavLink to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 18 }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", border: "2px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,168,76,0.08)", flexShrink: 0 }}>
                <span style={{ color: "#c9a84c", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14 }}>NS</span>
              </div>
              <div>
                <div style={{ color: "#f0ebe0", fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}>NEW Style</div>
                <div style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>Quickborn</div>
              </div>
            </NavLink>
            <p style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.8, maxWidth: 240 }}>
              Ihr Friseursalon für Damen, Herren & Kinder in Quickborn. Persönlich, professionell, preiswert.
            </p>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={12} color="#c9a84c" />
                <span style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 12 }}>Kieler Straße 23b, 25451 Quickborn</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Clock size={12} color="#c9a84c" />
                <span style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 12 }}>Mo–Fr 09–19 · Sa 09–16 Uhr</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <FooterColumn title="Navigation" links={[
            { label: "Start", to: "/" },
            { label: "Leistungen", to: "/leistungen" },
            { label: "Preise", to: "/preise" },
            { label: "Galerie", to: "/galerie" },
            { label: "Über uns", to: "/ueber-uns" },
            { label: "Kontakt", to: "/kontakt" },
          ]} />

          {/* Services */}
          <FooterColumn title="Leistungen" links={[
            { label: "Damenhaarschnitt", to: "/leistungen" },
            { label: "Herrenhaarschnitt", to: "/leistungen" },
            { label: "Kinderhaarschnitt", to: "/leistungen" },
            { label: "Farbe & Tönung", to: "/leistungen" },
            { label: "Styling", to: "/leistungen" },
            { label: "Pflegebehandlungen", to: "/leistungen" },
          ]} />

          {/* Öffnungszeiten */}
          <div>
            <h4 style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 18 }}>Öffnungszeiten</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[{ d: "Mo – Fr", h: "09:00 – 19:00 Uhr" }, { d: "Samstag", h: "09:00 – 16:00 Uhr" }, { d: "Sonntag", h: "Geschlossen" }].map(({ d, h }) => (
                <div key={d}>
                  <div style={{ color: "#3a3028", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 1 }}>{d}</div>
                  <div style={{ color: h === "Geschlossen" ? "#3a3028" : "#9a9080", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>{h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(201,168,76,0.08)", marginBottom: 24 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "#3a3028", fontFamily: "'DM Sans', sans-serif", fontSize: 12, margin: 0 }}>
            © {new Date().getFullYear()} NEW Style Quickborn · Friseur Quickborn
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[{ label: "Impressum", to: "/impressum" }, { label: "Datenschutz", to: "/datenschutz" }].map(({ label, to }) => (
              <NavLink key={to} to={to} style={{ color: "#3a3028", fontFamily: "'DM Sans', sans-serif", fontSize: 12, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3028")}
              >{label}</NavLink>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 18 }}>{title}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(({ label, to }) => (
          <NavLink key={label} to={to} style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5040")}
          >{label}</NavLink>
        ))}
      </div>
    </div>
  );
}
