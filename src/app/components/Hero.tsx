import { Clock, MapPin, ChevronDown } from "lucide-react";

export function Hero() {
  const scroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="start"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0c0c0c",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(https://images.unsplash.com/photo-1675034743339-0b0747047727?w=1600&h=1000&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.3,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(12,12,12,0.95) 0%, rgba(12,12,12,0.6) 50%, rgba(12,12,12,0.85) 100%)",
        }}
      />

      {/* Gold accent line left */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "15%",
          bottom: "15%",
          width: 3,
          background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          {/* Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 32,
              padding: "6px 16px",
              border: "1px solid rgba(201, 168, 76, 0.4)",
              borderRadius: 1,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
              Friseur Quickborn
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 600,
              color: "#f0ebe0",
              lineHeight: 1.1,
              marginBottom: 8,
              letterSpacing: -0.5,
            }}
          >
            NEW Style
          </h1>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#c9a84c",
              lineHeight: 1.1,
              marginBottom: 28,
              letterSpacing: -0.5,
            }}
          >
            Quickborn
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              fontWeight: 300,
              color: "#b0a898",
              marginBottom: 12,
              letterSpacing: 0.5,
            }}
          >
            Ihr Friseur für Damen, Herren & Kinder
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              fontWeight: 300,
              color: "#8a8070",
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            Moderne Haarschnitte, Styling, Farbe und Pflege — direkt in Quickborn.<br />
            Persönlich. Professionell. Preiswert.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
            <button
              onClick={() => scroll("#kontakt")}
              style={{
                background: "#c9a84c",
                color: "#0c0c0c",
                border: "none",
                borderRadius: 2,
                padding: "16px 32px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#e8c97a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Jetzt Termin anfragen
            </button>
            <button
              onClick={() => scroll("#leistungen")}
              style={{
                background: "transparent",
                color: "#f0ebe0",
                border: "1px solid rgba(240, 235, 224, 0.3)",
                borderRadius: 2,
                padding: "16px 32px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 400,
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240, 235, 224, 0.3)"; e.currentTarget.style.color = "#f0ebe0"; }}
            >
              Leistungen ansehen
            </button>
          </div>

          {/* Opening hours */}
          <div
            style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              padding: "20px 24px",
              background: "rgba(30, 30, 30, 0.8)",
              borderLeft: "2px solid #c9a84c",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Clock size={14} color="#c9a84c" />
              <div>
                <div style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>Mo – Fr</div>
                <div style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500 }}>09:00 – 19:00 Uhr</div>
              </div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Clock size={14} color="#c9a84c" />
              <div>
                <div style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>Samstag</div>
                <div style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500 }}>09:00 – 16:00 Uhr</div>
              </div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MapPin size={14} color="#c9a84c" />
              <div style={{ color: "#b0a898", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
                Kieler Straße 23b, Quickborn
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scroll("#vorteile")}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#8a8070",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          animation: "bounce 2s infinite",
        }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>Entdecken</span>
        <ChevronDown size={16} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
