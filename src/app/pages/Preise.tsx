import { useNavigate } from "react-router";
import { PageHero } from "../components/PageHero";

const categories = [
  {
    title: "Herren",
    accent: false,
    items: [
      { label: "Herrenhaarschnitt (Maschine)", price: "ab 18 €", note: "Klassisch & schnell" },
      { label: "Herrenhaarschnitt (Schere)", price: "ab 22 €", note: "Präziser Schnitt" },
      { label: "Herrenhaarschnitt mit Waschen & Föhnen", price: "ab 28 €", note: "Rundum-Paket" },
      { label: "Bart trimmen & formen", price: "ab 8 €", note: "Pflege & Form" },
      { label: "Bart mit Rasur", price: "ab 15 €", note: "Inkl. heißem Tuch" },
    ],
  },
  {
    title: "Damen",
    accent: true,
    items: [
      { label: "Damenhaarschnitt", price: "ab 28 €", note: "Beratung inklusive" },
      { label: "Waschen, Schneiden & Föhnen", price: "ab 38 €", note: "Komplett-Paket" },
      { label: "Ansatzfarbe", price: "ab 35 €", note: "Je nach Länge" },
      { label: "Vollfarbe", price: "ab 45 €", note: "Alle Längen" },
      { label: "Strähnen / Balayage", price: "ab 55 €", note: "Auf Anfrage" },
      { label: "Tönung", price: "ab 30 €", note: "Schonende Tönung" },
      { label: "Styling / Hochsteckfrisur", price: "ab 30 €", note: "Besondere Anlässe" },
      { label: "Blow-out & Finish", price: "ab 20 €", note: "Inkl. Produkte" },
    ],
  },
  {
    title: "Kinder",
    accent: false,
    items: [
      { label: "Kinderhaarschnitt (bis 6 Jahre)", price: "ab 12 €", note: "Geduldig & sanft" },
      { label: "Kinderhaarschnitt (7–12 Jahre)", price: "ab 15 €", note: "Jugendliche" },
      { label: "Kinderhaarschnitt mit Waschen", price: "ab 18 €", note: "Inkl. Föhnen" },
    ],
  },
  {
    title: "Pflege & Extra",
    accent: false,
    items: [
      { label: "Pflegebehandlung / Haarkur", price: "ab 15 €", note: "Als Zusatz buchbar" },
      { label: "Intensive Haarkur", price: "ab 22 €", note: "Tiefenpflege" },
      { label: "Haarberatung", price: "kostenlos", note: "Unverbindlich" },
    ],
  },
];

export function Preise() {
  const nav = useNavigate();

  return (
    <div>
      <PageHero
        tag="Transparenz"
        title="Unsere"
        titleAccent="Preise"
        subtitle="Faire, transparente Preise ohne versteckte Kosten. Alle Angaben sind Richtwerte — der genaue Preis hängt von Haarlänge, -dichte und Aufwand ab."
      />

      <section style={{ background: "#0c0c0c", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }} className="prices-grid">
            {categories.map((cat, i) => (
              <div key={i} style={{ background: "#161616", border: `1px solid ${cat.accent ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)"}`, borderRadius: 2, overflow: "hidden" }}>
                <div style={{ background: cat.accent ? "#c9a84c" : "rgba(201,168,76,0.07)", padding: "22px 28px", borderBottom: "1px solid rgba(201,168,76,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600, color: cat.accent ? "#0c0c0c" : "#c9a84c", margin: 0 }}>{cat.title}</h2>
                  {cat.accent && <span style={{ color: "rgba(12,12,12,0.55)", fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: 2, textTransform: "uppercase" }}>Beliebt</span>}
                </div>
                <div>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 28px", borderBottom: j < cat.items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", gap: 12 }}>
                      <div>
                        <div style={{ color: "#e0dbd0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 400, marginBottom: 3 }}>{item.label}</div>
                        <div style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 11 }}>{item.note}</div>
                      </div>
                      <div style={{ color: "#c9a84c", fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.1)", borderRadius: 2, padding: "24px 28px", marginBottom: 48 }}>
            <p style={{ color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#8a8070" }}>Hinweis:</strong> Alle Preise können je nach Haarlänge, Haardichte und individuellem Aufwand variieren. Bei speziellen Wünschen, wie z. B. Balayage, Highlights oder aufwendigen Hochsteckfrisuren, erstellen wir Ihnen gerne vorab einen individuellen Kostenvoranschlag. Kommen Sie einfach auf uns zu!
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
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
        @media (max-width: 800px) { .prices-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
