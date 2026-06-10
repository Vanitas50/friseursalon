import { useNavigate } from "react-router";
import { MapPin, Heart, Award, Scissors } from "lucide-react";
import { PageHero } from "../components/PageHero";

const team = [
  { name: "Teamleiterin", role: "Inhaberin & Friseurmeisterin", img: "https://images.unsplash.com/photo-1610632380989-7f7d1f39c2d1?w=400&h=400&fit=crop&faces" },
  { name: "Mitarbeiterin", role: "Friseurin – Damen & Kinder", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&faces" },
  { name: "Mitarbeiter", role: "Friseur – Herren & Styling", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&faces" },
];

const values = [
  { icon: Scissors, title: "Saubere Handwerkskunst", desc: "Jeder Schnitt wird mit Sorgfalt und Präzision ausgeführt — kein Schnitt ist wie der andere." },
  { icon: Heart, title: "Persönliche Beratung", desc: "Wir nehmen uns Zeit. Kein Hetzen, kein Durchlaufbetrieb. Ihr Stil steht im Mittelpunkt." },
  { icon: Award, title: "Professionelle Ergebnisse", desc: "Von der Beratung bis zum Finish: Wir stehen für Qualität, die man sieht und fühlt." },
  { icon: MapPin, title: "Verwurzelt in Quickborn", desc: "Seit Jahren Ihr lokaler Friseursalon. Wir kennen unsere Kunden und freuen uns auf jeden Besuch." },
];

export function UeberUns() {
  const nav = useNavigate();

  return (
    <div>
      <PageHero
        tag="Wer wir sind"
        title="Über"
        titleAccent="NEW Style Quickborn"
        subtitle="Ihr Friseursalon mit Herz, Handwerk und Erfahrung — direkt in Quickborn."
      />

      {/* Main story */}
      <section style={{ background: "#0c0c0c", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-main-grid">
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -16, left: -16, right: 16, bottom: 16, border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2, pointerEvents: "none" }} />
            <img src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?w=700&h=850&fit=crop" alt="Innenbereich NEW Style Quickborn Friseursalon" style={{ width: "100%", height: 520, objectFit: "cover", borderRadius: 2, display: "block", filter: "brightness(0.82) contrast(1.05)" }} />
            <div style={{ position: "absolute", bottom: -24, right: -24, background: "#c9a84c", padding: "22px 26px", borderRadius: 2 }}>
              <div style={{ color: "#0c0c0c", fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, lineHeight: 1 }}>15+</div>
              <div style={{ color: "rgba(12,12,12,0.65)", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>Jahre Erfahrung</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 28, height: 1, background: "#c9a84c" }} />
              <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>Unsere Geschichte</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 600, color: "#f0ebe0", lineHeight: 1.2, marginBottom: 24 }}>
              Handwerk, das man <span style={{ fontStyle: "italic", color: "#c9a84c" }}>sieht und spürt</span>
            </h2>
            <p style={{ color: "#b0a898", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>
              Bei NEW Style Quickborn stehen saubere Schnitte, persönliche Beratung und ein gepflegtes Ergebnis im Mittelpunkt. Ob klassischer Haarschnitt, moderner Look oder neue Farbe — unser Team nimmt sich Zeit für Ihren Stil.
            </p>
            <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.85, marginBottom: 18 }}>
              Wir verstehen uns nicht nur als Friseur, sondern als Vertrauensperson für Ihren täglichen Auftritt. Jeder Besuch soll angenehm sein, das Ergebnis überzeugen — ob für Damen, Herren oder Kinder.
            </p>
            <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.85, marginBottom: 36 }}>
              Unser Salon liegt zentral in Quickborn, ist gut zu Fuß oder mit dem Auto erreichbar und bietet eine entspannte, professionelle Atmosphäre — genau richtig für einen schönen Friseurtag.
            </p>

            <button onClick={() => nav("/termin-buchen")} style={{ background: "#c9a84c", color: "#0c0c0c", border: "none", borderRadius: 2, padding: "14px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
            >
              Termin buchen
            </button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#0f0f0f", padding: "72px 24px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 1, background: "#c9a84c" }} />
              <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>Unsere Werte</span>
              <div style={{ width: 28, height: 1, background: "#c9a84c" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 600, color: "#f0ebe0", lineHeight: 1.2 }}>
              Was uns <span style={{ fontStyle: "italic", color: "#c9a84c" }}>ausmacht</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(201,168,76,0.08)" }} className="values-grid">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} style={{ background: "#161616", padding: "36px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
                <Icon size={22} color="#c9a84c" strokeWidth={1.5} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: "#f0ebe0" }}>{title}</h3>
                <p style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "#0c0c0c", padding: "72px 24px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 1, background: "#c9a84c" }} />
              <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>Ihr Team</span>
              <div style={{ width: 28, height: 1, background: "#c9a84c" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 600, color: "#f0ebe0" }}>
              Unser <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Team</span> in Quickborn
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="team-grid">
            {team.map(({ name, role, img }, i) => (
              <div key={i} style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.1)", borderRadius: 2, overflow: "hidden" }}>
                <img src={img} alt={`${name} – ${role}`} style={{ width: "100%", height: 280, objectFit: "cover", filter: "brightness(0.85) contrast(1.05) grayscale(0.3)", display: "block" }} />
                <div style={{ padding: "22px 24px" }}>
                  <div style={{ color: "#f0ebe0", fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{name}</div>
                  <div style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#161616", padding: "72px 24px", borderTop: "1px solid rgba(201,168,76,0.1)", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 600, color: "#f0ebe0", marginBottom: 16 }}>
            Kommen Sie <span style={{ fontStyle: "italic", color: "#c9a84c" }}>vorbei</span>
          </h2>
          <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>
            Wir freuen uns auf Ihren Besuch in unserem Friseursalon in Quickborn. Buchen Sie ganz einfach online Ihren Termin.
          </p>
          <button onClick={() => nav("/termin-buchen")} style={{ background: "#c9a84c", color: "#0c0c0c", border: "none", borderRadius: 2, padding: "16px 40px", fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
          >
            Jetzt Termin buchen
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .about-main-grid { grid-template-columns: 1fr !important; gap: 48px !important; } .values-grid { grid-template-columns: 1fr 1fr !important; } .team-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 500px) { .values-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
