import { Scissors, Droplets, Palette, Wind, Sparkles, User, Users } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Damenhaarschnitt",
    desc: "Modernes oder klassisches Styling, perfekt auf Ihren Typ abgestimmt. Von Bob bis Longstyle.",
    price: "ab 28 €",
    tag: "Damen",
  },
  {
    icon: Scissors,
    title: "Herrenhaarschnitt",
    desc: "Präzise Schnitte für den modernen Herrn — Maschine, Schere oder Kombination.",
    price: "ab 18 €",
    tag: "Herren",
  },
  {
    icon: Users,
    title: "Kinderhaarschnitt",
    desc: "Behutsame und geduldige Behandlung für die Kleinen. Bis 12 Jahre.",
    price: "ab 12 €",
    tag: "Kinder",
  },
  {
    icon: Droplets,
    title: "Waschen, Schneiden & Föhnen",
    desc: "Das Rundum-Paket: Professionelles Waschen, präziser Schnitt und perfektes Finish.",
    price: "ab 38 €",
    tag: "Komplett",
  },
  {
    icon: Palette,
    title: "Farbe & Tönung",
    desc: "Haarfarbe, Strähnen, Balayage oder Tönung — für frischen Glanz und Ausdruck.",
    price: "ab 45 €",
    tag: "Farbe",
  },
  {
    icon: Wind,
    title: "Styling",
    desc: "Für besondere Anlässe oder den täglichen Look — professionell gestylt mit Wärme und Technik.",
    price: "ab 22 €",
    tag: "Styling",
  },
  {
    icon: Sparkles,
    title: "Pflegebehandlungen",
    desc: "Intensive Haarkuren und Pflegemasken für mehr Glanz, Fülle und Gesundheit.",
    price: "ab 15 €",
    tag: "Pflege",
  },
];

export function Services() {
  return (
    <section
      id="leistungen"
      style={{
        background: "#0c0c0c",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 64, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
              Was wir anbieten
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              color: "#f0ebe0",
              lineHeight: 1.1,
              maxWidth: 500,
            }}
          >
            Unsere{" "}
            <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Leistungen</span>
          </h2>
          <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, maxWidth: 520 }}>
            Von Damen, Herren bis Kinder — in unserem Friseursalon in Quickborn erhalten alle Ihre individuelle Beratung und ein professionelles Ergebnis.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(201, 168, 76, 0.1)",
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                background: "#161616",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transition: "background 0.25s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1e1a14")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#161616")}
            >
              {/* Tag */}
              <span
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  background: "rgba(201, 168, 76, 0.12)",
                  color: "#c9a84c",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 9,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 1,
                }}
              >
                {service.tag}
              </span>

              <service.icon size={24} color="#c9a84c" strokeWidth={1.5} />

              <div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#f0ebe0",
                    marginBottom: 10,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.7 }}>
                  {service.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  color: "#c9a84c",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
