import { useNavigate } from "react-router";
import { Scissors, Droplets, Palette, Wind, Sparkles, User, Users, MessageSquare } from "lucide-react";
import { PageHero } from "../components/PageHero";

const services = [
  {
    icon: User,
    title: "Damenhaarschnitt",
    tag: "Damen",
    desc: "Von der klassischen Bob-Frisur bis zum modernen Long-Bob oder Stufenschnitt — wir beraten Sie individuell und schneiden präzise nach Ihrem Wunsch und Haartyp. Jede Frisur wird auf Gesichtsform und Lebensalltag abgestimmt.",
    highlights: ["Beratung inklusive", "Alle Haarlängen", "Modisch & klassisch"],
    price: "ab 28 €",
    duration: "45–60 Min.",
  },
  {
    icon: Scissors,
    title: "Herrenhaarschnitt",
    tag: "Herren",
    desc: "Ob mit Maschine, Schere oder Kombination — wir schneiden sauber und präzise. Von kurz und kantig bis zum modernen Undercut oder klassischen Herrenschnitt. Auf Wunsch mit Nackenpflege und Finish.",
    highlights: ["Maschine oder Schere", "Nackenpflege auf Wunsch", "Schnell & sauber"],
    price: "ab 18 €",
    duration: "30 Min.",
  },
  {
    icon: Users,
    title: "Kinderhaarschnitt",
    tag: "Kinder",
    desc: "Wir nehmen uns Zeit und Geduld für unsere jüngsten Kunden. Kinder bis 12 Jahre erhalten bei uns einen sanften, einfühlsamen Haarschnitt in entspannter Atmosphäre — damit der Salonbesuch auch für Kinder Spaß macht.",
    highlights: ["Geduldig & behutsam", "Bis 12 Jahre", "Entspannte Atmosphäre"],
    price: "ab 12 €",
    duration: "30 Min.",
  },
  {
    icon: Droplets,
    title: "Waschen, Schneiden & Föhnen",
    tag: "Komplett",
    desc: "Das Rundum-Paket: Professionelles Waschen mit hochwertigen Pflegeprodukten, präziser Schnitt nach Ihren Wünschen und ein perfektes Föhnergebnis mit modernem Finish. Für Damen und Herren.",
    highlights: ["Waschen mit Pflegeprodukten", "Schnitt & Föhnen", "Perfektes Finish"],
    price: "ab 38 €",
    duration: "60 Min.",
  },
  {
    icon: Palette,
    title: "Farbe & Tönung",
    tag: "Farbe",
    desc: "Ob Haarfarbe, Ansatzfarbe, Tönung, Strähnen oder Balayage — wir beraten Sie ausführlich und erzielen natürliche, leuchtende Ergebnisse. Wir arbeiten mit professionellen Farben für optimale Haltbarkeit und Pflege.",
    highlights: ["Balayage & Strähnen", "Ansatz & Vollfarbe", "Professionelle Farben"],
    price: "ab 45 €",
    duration: "90–120 Min.",
  },
  {
    icon: Wind,
    title: "Styling",
    tag: "Styling",
    desc: "Für besondere Anlässe wie Hochzeiten, Abibälle oder Firmenfeiern — oder einfach für den perfekten täglichen Look. Blow-out, Wellen, Locken oder Glättung — professionell mit Wärme, Technik und den richtigen Produkten.",
    highlights: ["Besondere Anlässe", "Hochsteckfrisuren", "Blow-out & Wellen"],
    price: "ab 22 €",
    duration: "45 Min.",
  },
  {
    icon: Sparkles,
    title: "Pflegebehandlungen",
    tag: "Pflege",
    desc: "Intensive Haarkuren und Pflegemasken für mehr Glanz, Fülle, Feuchtigkeit und Geschmeidigkeit. Ideal nach dem Färben, bei strapaziertem oder trockenem Haar. Auf Wunsch als Zusatz zu jedem Schnitt buchbar.",
    highlights: ["Haarkur & Maske", "Ideal nach Färben", "Als Zusatz buchbar"],
    price: "ab 15 €",
    duration: "30–45 Min.",
  },
  {
    icon: MessageSquare,
    title: "Haarberatung",
    tag: "Beratung",
    desc: "Sie wissen noch nicht genau, welche Frisur, Farbe oder Pflege am besten zu Ihnen passt? Unser Team nimmt sich Zeit für eine ausführliche, unverbindliche Beratung — zu Haartyp, Gesichtsform, Trend und Pflegebedarf.",
    highlights: ["Persönlich & individuell", "Frisur & Farbberatung", "Unverbindlich"],
    price: "kostenlos",
    duration: "15 Min.",
  },
];

export function Leistungen() {
  const nav = useNavigate();

  return (
    <div>
      <PageHero
        tag="Friseursalon Quickborn"
        title="Unsere"
        titleAccent="Leistungen"
        subtitle="Von Damen, Herren bis Kinder — wir bieten alle Friseurleistungen aus einer Hand. Persönlich beraten, professionell ausgeführt."
      />

      <section style={{ background: "#0c0c0c", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "rgba(201,168,76,0.08)" }} className="leistungen-grid">
            {services.map((s, i) => (
              <div key={i} style={{ background: "#161616", padding: "40px 36px", display: "flex", flexDirection: "column", gap: 0, transition: "background 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1c1812")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#161616")}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <s.icon size={22} color="#c9a84c" strokeWidth={1.5} />
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#f0ebe0" }}>{s.title}</h2>
                  </div>
                  <span style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", padding: "4px 10px", borderRadius: 1, whiteSpace: "nowrap", flexShrink: 0 }}>{s.tag}</span>
                </div>

                <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {s.highlights.map((h, j) => (
                    <span key={j} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 11, padding: "4px 10px", borderRadius: 1 }}>{h}</span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: "#c9a84c", fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600 }}>{s.price}</div>
                  <div style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 12 }}>{s.duration}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 64, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}>Alle Preise auf Anfrage — je nach Haarlänge und Aufwand.</p>
            <button onClick={() => nav("/termin-buchen")} style={{ background: "#c9a84c", color: "#0c0c0c", border: "none", borderRadius: 2, padding: "16px 40px", fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
            >
              Jetzt Termin buchen
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 800px) { .leistungen-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
