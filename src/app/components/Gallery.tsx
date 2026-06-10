import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&h=400&fit=crop&auto=format",
    label: "Außenansicht",
    span: "wide",
  },
  {
    url: "https://images.unsplash.com/photo-1761931403671-d020a14928d9?w=400&h=500&fit=crop&auto=format",
    label: "Damenfrisur",
    span: "tall",
  },
  {
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&auto=format",
    label: "Herrenhaarschnitt",
    span: "normal",
  },
  {
    url: "https://images.unsplash.com/photo-1780504542350-5078d4080081?w=400&h=300&fit=crop&auto=format",
    label: "Styling",
    span: "normal",
  },
  {
    url: "https://images.unsplash.com/photo-1776105609708-3d8908ab4dc2?w=600&h=350&fit=crop&auto=format",
    label: "Pflegeprodukte",
    span: "wide",
  },
  {
    url: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=400&h=500&fit=crop&auto=format",
    label: "Herrenschnitt",
    span: "tall",
  },
  {
    url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=400&h=300&fit=crop&auto=format",
    label: "Innenbereich",
    span: "normal",
  },
  {
    url: "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?w=400&h=300&fit=crop&auto=format",
    label: "Salon Atmosphäre",
    span: "normal",
  },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      id="galerie"
      style={{ background: "#0c0c0c", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
              Eindrücke
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              color: "#f0ebe0",
              lineHeight: 1.1,
            }}
          >
            Unsere{" "}
            <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Galerie</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "200px",
            gap: 4,
          }}
          className="gallery-grid"
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setLightbox(item.url.replace(/w=\d+&h=\d+/, "w=1200&h=800"))}
              style={{
                gridColumn: item.span === "wide" ? "span 2" : "span 1",
                gridRow: item.span === "tall" ? "span 2" : "span 1",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                background: "#1e1e1e",
              }}
            >
              <img
                src={item.url}
                alt={`NEW Style Quickborn – ${item.label}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.8) contrast(1.05)",
                  transition: "transform 0.5s ease, filter 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                  (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.9) contrast(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.8) contrast(1.05)";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px",
                  background: "linear-gradient(transparent, rgba(12,12,12,0.8))",
                  color: "#f0ebe0",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "rgba(201,168,76,0.15)",
              border: "1px solid #c9a84c",
              color: "#c9a84c",
              borderRadius: 2,
              padding: 8,
              cursor: "pointer",
              display: "flex",
            }}
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="Galerie"
            style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 2 }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
