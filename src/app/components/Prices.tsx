const priceCategories = [
  {
    category: "Herren",
    items: [
      { label: "Herrenhaarschnitt", price: "ab 18 €", note: "Maschine oder Schere" },
      { label: "Herrenhaarschnitt mit Waschen & Föhnen", price: "ab 25 €", note: "Komplett" },
      { label: "Bart trimmen", price: "ab 8 €", note: "Pflege & Form" },
    ],
  },
  {
    category: "Damen",
    items: [
      { label: "Damenhaarschnitt", price: "ab 28 €", note: "Schnitt & Beratung" },
      { label: "Waschen, Schneiden & Föhnen", price: "ab 38 €", note: "Rundum-Paket" },
      { label: "Farbe / Tönung", price: "ab 45 €", note: "Ansatz oder komplett" },
      { label: "Strähnen / Balayage", price: "ab 55 €", note: "Auf Anfrage" },
      { label: "Styling / Hochsteckfrisur", price: "ab 30 €", note: "Für besondere Anlässe" },
      { label: "Pflegebehandlung", price: "ab 15 €", note: "Haarkur & Maske" },
    ],
  },
  {
    category: "Kinder",
    items: [
      { label: "Kinderhaarschnitt (bis 6 J.)", price: "ab 12 €", note: "Geduldig & behutsam" },
      { label: "Kinderhaarschnitt (7–12 J.)", price: "ab 15 €", note: "Jugendliche" },
    ],
  },
];

export function Prices() {
  return (
    <section
      id="preise"
      style={{ background: "#0c0c0c", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
              Transparenz
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              color: "#f0ebe0",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Unsere{" "}
            <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Preise</span>
          </h2>
          <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, maxWidth: 500 }}>
            Faire und transparente Preise — ohne versteckte Kosten. Bei speziellen Wünschen beraten wir Sie gerne persönlich.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="prices-grid"
        >
          {priceCategories.map((cat, i) => (
            <div
              key={i}
              style={{
                background: "#161616",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              {/* Category header */}
              <div
                style={{
                  background: i === 1 ? "#c9a84c" : "rgba(201,168,76,0.08)",
                  padding: "20px 28px",
                  borderBottom: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: i === 1 ? "#0c0c0c" : "#c9a84c",
                    margin: 0,
                  }}
                >
                  {cat.category}
                </h3>
                {i === 1 && (
                  <div style={{ color: "rgba(12,12,12,0.6)", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 2 }}>
                    Beliebt
                  </div>
                )}
              </div>

              {/* Items */}
              <div style={{ padding: "8px 0" }}>
                {cat.items.map((item, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      padding: "16px 28px",
                      borderBottom: j < cat.items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                      gap: 16,
                    }}
                  >
                    <div>
                      <div style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 400, marginBottom: 3 }}>
                        {item.label}
                      </div>
                      <div style={{ color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 0.5 }}>
                        {item.note}
                      </div>
                    </div>
                    <div style={{ color: "#c9a84c", fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.6, marginTop: 32, textAlign: "center" }}>
          * Alle Preise sind Richtwerte und können je nach Haarlänge, -dichte und gewünschtem Aufwand variieren. Bitte erfragen Sie genaue Preise direkt bei uns im Salon.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prices-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
