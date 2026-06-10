import { Users, Tag, Star, MessageCircle, MapPin } from "lucide-react";

const benefits = [
  { icon: Star, label: "Erfahrenes Team", desc: "Jahrelange Expertise in Haar & Stil" },
  { icon: Tag, label: "Faire Preise", desc: "Transparent & ohne Überraschungen" },
  { icon: Users, label: "Damen, Herren & Kinder", desc: "Für die ganze Familie" },
  { icon: MessageCircle, label: "Persönliche Beratung", desc: "Individuell auf Sie zugeschnitten" },
  { icon: MapPin, label: "Zentral in Quickborn", desc: "Kieler Str. 23b, gut erreichbar" },
];

export function TrustBar() {
  return (
    <section
      id="vorteile"
      style={{
        background: "#161616",
        borderTop: "1px solid rgba(201, 168, 76, 0.15)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
        padding: "0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          padding: "0 24px",
        }}
        className="trust-grid"
      >
        {benefits.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "40px 20px",
              borderRight: i < benefits.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              gap: 12,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201, 168, 76, 0.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <item.icon size={20} color="#c9a84c" strokeWidth={1.5} />
            <div>
              <div style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, marginBottom: 4 }}>
                {item.label}
              </div>
              <div style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
          .trust-grid > div:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.06) !important;
          }
        }
        @media (max-width: 480px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
          .trust-grid > div {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
