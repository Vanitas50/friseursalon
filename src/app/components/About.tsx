export function About() {
  return (
    <section
      id="ueber-uns"
      style={{ background: "#0f0f0f", padding: "100px 24px" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Image side */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: -16,
              left: -16,
              right: 16,
              bottom: 16,
              border: "1px solid rgba(201, 168, 76, 0.25)",
              borderRadius: 2,
              pointerEvents: "none",
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?w=700&h=850&fit=crop&auto=format"
            alt="Innenbereich NEW Style Quickborn – Professionelle Friseurausstattung"
            style={{
              width: "100%",
              height: 520,
              objectFit: "cover",
              borderRadius: 2,
              display: "block",
              filter: "brightness(0.85) contrast(1.05)",
            }}
          />
          {/* Overlay badge */}
          <div
            style={{
              position: "absolute",
              bottom: -24,
              right: -24,
              background: "#c9a84c",
              padding: "24px 28px",
              borderRadius: 2,
            }}
          >
            <div style={{ color: "#0c0c0c", fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, lineHeight: 1 }}>15+</div>
            <div style={{ color: "rgba(12,12,12,0.7)", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>Jahre Erfahrung</div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
              Über uns
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 600,
              color: "#f0ebe0",
              lineHeight: 1.2,
              marginBottom: 28,
            }}
          >
            Ihr Friseur mit{" "}
            <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Herz und Handwerk</span>{" "}
            in Quickborn
          </h2>

          <p style={{ color: "#b0a898", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
            Bei NEW Style Quickborn stehen saubere Schnitte, persönliche Beratung und ein gepflegtes Ergebnis im Mittelpunkt. Ob klassischer Haarschnitt, moderner Look oder neue Farbe – unser Team nimmt sich Zeit für Ihren Stil.
          </p>

          <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>
            Wir verstehen uns nicht nur als Friseur, sondern als Vertrauter für Ihren persönlichen Auftritt. Jeder Besuch soll angenehm, entspannt und das Ergebnis überzeugend sein — ob für Damen, Herren oder Kinder.
          </p>

          {/* Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {["Individuelle Beratung für jeden Kunden", "Professionelle Produkte & Techniken", "Angenehme Atmosphäre & freundliches Team"].map((val, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
                <span style={{ color: "#b0a898", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>{val}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const el = document.querySelector("#kontakt");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              marginTop: 40,
              background: "transparent",
              color: "#c9a84c",
              border: "1px solid #c9a84c",
              borderRadius: 2,
              padding: "14px 28px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#0c0c0c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c9a84c"; }}
          >
            Termin vereinbaren
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-grid > div:first-child img {
            height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
