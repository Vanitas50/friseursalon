import { useNavigate } from "react-router";
import { Clock, MapPin, ChevronRight, Scissors, Palette, Star, Users, Tag, MessageCircle } from "lucide-react";

const services = [
  { icon: Scissors, label: "Damenfriseur Quickborn", desc: "Moderne Schnitte & Styling" },
  { icon: Scissors, label: "Herrenfriseur Quickborn", desc: "Präzise Herrencuts" },
  { icon: Users, label: "Kinderhaarschnitt Quickborn", desc: "Geduldig für die Kleinen" },
  { icon: Palette, label: "Farbe & Tönung", desc: "Balayage, Strähnen, Ansatz" },
];

const trust = [
  { icon: Star, label: "Erfahrenes Team" },
  { icon: Tag, label: "Faire Preise" },
  { icon: Users, label: "Für die ganze Familie" },
  { icon: MessageCircle, label: "Persönliche Beratung" },
];

const gallery = [
  { url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=500&h=340&fit=crop", label: "Salon" },
  { url: "https://images.unsplash.com/photo-1761931403671-d020a14928d9?w=500&h=340&fit=crop", label: "Damen" },
  { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=340&fit=crop", label: "Herren" },
  { url: "https://images.unsplash.com/photo-1780504542350-5078d4080081?w=500&h=340&fit=crop", label: "Styling" },
];

export function Home() {
  const nav = useNavigate();

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#0c0c0c",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(https://images.unsplash.com/photo-1675034743339-0b0747047727?w=1600&fit=crop&auto=format)`, backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.28 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,12,12,0.97) 0%, rgba(12,12,12,0.55) 55%, rgba(12,12,12,0.9) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: "10%", bottom: "10%", width: 3, background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "130px 24px 80px", width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32, padding: "6px 16px", border: "1px solid rgba(201,168,76,0.35)", borderRadius: 1 }}>
              <div style={{ width: 18, height: 1, background: "#c9a84c" }} />
              <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>Friseur Quickborn</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(44px, 7.5vw, 88px)", fontWeight: 600, color: "#f0ebe0", lineHeight: 1.05, marginBottom: 6, letterSpacing: -1 }}>
              NEW Style
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(44px, 7.5vw, 88px)", fontWeight: 400, fontStyle: "italic", color: "#c9a84c", lineHeight: 1.05, marginBottom: 32, letterSpacing: -1 }}>
              Quickborn
            </h1>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(16px, 2.2vw, 20px)", fontWeight: 300, color: "#b0a898", marginBottom: 8, letterSpacing: 0.3 }}>
              Ihr Friseur für Damen, Herren & Kinder in Quickborn
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 300, color: "#6a6050", marginBottom: 48, lineHeight: 1.7 }}>
              Haarschnitte, Styling, Farbe und Pflege — direkt in Quickborn.<br />
              Persönlich. Professionell. Preiswert.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
              <button
                onClick={() => nav("/termin-buchen")}
                style={{ background: "#c9a84c", color: "#0c0c0c", border: "none", borderRadius: 2, padding: "16px 34px", fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "background 0.2s, transform 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#e8c97a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Jetzt online Termin buchen
              </button>
              <button
                onClick={() => nav("/leistungen")}
                style={{ background: "transparent", color: "#f0ebe0", border: "1px solid rgba(240,235,224,0.25)", borderRadius: 2, padding: "16px 34px", fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,235,224,0.25)"; e.currentTarget.style.color = "#f0ebe0"; }}
              >
                Leistungen ansehen
              </button>
            </div>

            {/* Hours strip */}
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", padding: "18px 22px", background: "rgba(22,22,22,0.85)", borderLeft: "2px solid #c9a84c", backdropFilter: "blur(8px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Clock size={13} color="#c9a84c" />
                <div>
                  <div style={{ color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: 2, textTransform: "uppercase" }}>Mo – Fr</div>
                  <div style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500 }}>09:00 – 19:00 Uhr</div>
                </div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.06)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Clock size={13} color="#c9a84c" />
                <div>
                  <div style={{ color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: 2, textTransform: "uppercase" }}>Samstag</div>
                  <div style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500 }}>09:00 – 16:00 Uhr</div>
                </div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.06)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={13} color="#c9a84c" />
                <span style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Kieler Straße 23b, Quickborn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST ─── */}
      <section style={{ background: "#111", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "0 24px" }} className="trust-grid">
          {trust.map(({ icon: Icon, label }, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "32px 20px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <Icon size={18} color="#c9a84c" strokeWidth={1.5} />
              <span style={{ color: "#b0a898", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 400 }}>{label}</span>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 700px) { .trust-grid { grid-template-columns: 1fr 1fr !important; } .trust-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.05); } .trust-grid > div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.05) !important; } }
        `}</style>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section style={{ background: "#0c0c0c", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel tag="Unser Angebot" title="Leistungen" titleAccent="im Überblick" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(201,168,76,0.08)", marginTop: 48, marginBottom: 40 }} className="services-grid">
            {services.map(({ icon: Icon, label, desc }, i) => (
              <div key={i} style={{ background: "#161616", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 14, transition: "background 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1c1812")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#161616")}
                onClick={() => nav("/leistungen")}
              >
                <Icon size={22} color="#c9a84c" strokeWidth={1.5} />
                <div>
                  <div style={{ color: "#f0ebe0", fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{label}</div>
                  <div style={{ color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => nav("/leistungen")} style={linkBtn()}>
            Alle Leistungen ansehen <ChevronRight size={14} />
          </button>
        </div>
        <style>{`
          @media (max-width: 800px) { .services-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .services-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── GALLERY PREVIEW ─── */}
      <section style={{ background: "#0f0f0f", padding: "88px 24px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel tag="Eindrücke" title="Aus unserem" titleAccent="Salon" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4, marginTop: 48, marginBottom: 36 }} className="gallery-preview-grid">
            {gallery.map(({ url, label }, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", height: 220, cursor: "pointer" }} onClick={() => nav("/galerie")}>
                <img src={url} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75)", transition: "transform 0.5s, filter 0.3s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.9)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.75)"; }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 14px", background: "linear-gradient(transparent, rgba(12,12,12,0.75))", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
          <button onClick={() => nav("/galerie")} style={linkBtn()}>
            Zur vollständigen Galerie <ChevronRight size={14} />
          </button>
        </div>
        <style>{`
          @media (max-width: 700px) { .gallery-preview-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 420px) { .gallery-preview-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── KONTAKT TEASER ─── */}
      <section style={{ background: "#0c0c0c", padding: "88px 24px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="contact-teaser-grid">
          <div>
            <SectionLabel tag="Friseursalon Quickborn" title="Besuchen Sie" titleAccent="uns" />
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoRow icon={MapPin} label="Adresse" value="Kieler Straße 23b, 25451 Quickborn" />
              <InfoRow icon={Clock} label="Mo – Fr" value="09:00 – 19:00 Uhr" />
              <InfoRow icon={Clock} label="Samstag" value="09:00 – 16:00 Uhr" />
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
              <button onClick={() => nav("/termin-buchen")} style={{ background: "#c9a84c", color: "#0c0c0c", border: "none", borderRadius: 2, padding: "14px 28px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
              >Termin buchen</button>
              <button onClick={() => nav("/kontakt")} style={{ background: "transparent", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.35)", borderRadius: 2, padding: "14px 28px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >Kontakt</button>
            </div>
          </div>
          <div style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.12)", borderRadius: 2, overflow: "hidden", height: 300 }}>
            <iframe title="Karte" src="https://www.openstreetmap.org/export/embed.html?bbox=9.880,53.720,9.920,53.740&layer=mapnik&marker=53.730,9.900" style={{ width: "100%", height: "100%", border: "none", filter: "invert(0.88) hue-rotate(180deg) brightness(0.9)" }} loading="lazy" />
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .contact-teaser-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>
    </div>
  );
}

function SectionLabel({ tag, title, titleAccent }: { tag: string; title: string; titleAccent?: string }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ width: 28, height: 1, background: "#c9a84c" }} />
        <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>{tag}</span>
      </div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, color: "#f0ebe0", lineHeight: 1.15 }}>
        {title}{" "}
        {titleAccent && <span style={{ fontStyle: "italic", color: "#c9a84c" }}>{titleAccent}</span>}
      </h2>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <Icon size={14} color="#c9a84c" />
      <span style={{ color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 12, width: 60 }}>{label}</span>
      <span style={{ color: "#b0a898", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>{value}</span>
    </div>
  );
}

function linkBtn(): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "none",
    border: "1px solid rgba(201,168,76,0.25)",
    color: "#c9a84c",
    borderRadius: 2,
    padding: "12px 22px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "border-color 0.2s, background 0.2s",
  };
}
