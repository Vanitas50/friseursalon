export function Products() {
  return (
    <section
      style={{
        background: "#161616",
        padding: "100px 24px",
        borderTop: "1px solid rgba(201,168,76,0.1)",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
      }}
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
        className="products-grid"
      >
        {/* Text */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
              Pflege & Produkte
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
            Professionelle Pflege{" "}
            <span style={{ fontStyle: "italic", color: "#c9a84c" }}>für zu Hause</span>
          </h2>

          <p style={{ color: "#b0a898", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
            Für die passende Pflege zu Hause beraten wir Sie gerne direkt im Salon. Wir verwenden und empfehlen professionelle Produkte für gesundes, gepflegtes Haar.
          </p>

          <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, marginBottom: 40 }}>
            Die richtigen Pflegeprodukte sind der Schlüssel zu langanhaltenden Ergebnissen. Unser Team berät Sie individuell, welche Produkte zu Ihrem Haartyp, Ihrem Schnitt und Ihrer täglichen Routine passen.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["Shampoos", "Conditioner", "Haarkuren", "Styling", "Hitzeschutz", "Colorpflege"].map((tag, i) => (
              <span
                key={i}
                style={{
                  background: "rgba(201, 168, 76, 0.08)",
                  border: "1px solid rgba(201, 168, 76, 0.2)",
                  color: "#c9a84c",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 1,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1776105609708-3d8908ab4dc2?w=700&h=600&fit=crop&auto=format"
            alt="Professionelle Haarpflegeprodukte im Salon NEW Style Quickborn"
            style={{
              width: "100%",
              height: 480,
              objectFit: "cover",
              borderRadius: 2,
              display: "block",
              filter: "brightness(0.85)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              background: "rgba(12,12,12,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "16px 20px",
              borderRadius: 2,
            }}
          >
            <div style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Persönliche Beratung</div>
            <div style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Direkt im Salon — kostenlos</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
