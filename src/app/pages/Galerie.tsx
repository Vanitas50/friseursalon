import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "../components/PageHero";

const categories = [
  { label: "Alle", key: "all" },
  { label: "Salon", key: "salon" },
  { label: "Damen", key: "damen" },
  { label: "Herren", key: "herren" },
  { label: "Styling", key: "styling" },
  { label: "Produkte", key: "produkte" },
];

const images = [
  { url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=700&h=500&fit=crop", label: "Salon – Außenansicht", cat: "salon" },
  { url: "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?w=700&h=500&fit=crop", label: "Salon – Innenbereich", cat: "salon" },
  { url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=700&h=500&fit=crop", label: "Salon – Atmosphäre", cat: "salon" },
  { url: "https://images.unsplash.com/photo-1761931403671-d020a14928d9?w=700&h=500&fit=crop", label: "Damenfrisur – Schnitt", cat: "damen" },
  { url: "https://images.unsplash.com/photo-1780504542350-5078d4080081?w=700&h=500&fit=crop", label: "Damenfrisur – Styling", cat: "damen" },
  { url: "https://images.unsplash.com/photo-1763048208932-cbe149724374?w=700&h=500&fit=crop", label: "Damenfrisur – Pflege", cat: "damen" },
  { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&h=500&fit=crop", label: "Herrenhaarschnitt", cat: "herren" },
  { url: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=700&h=500&fit=crop", label: "Herren – Präzisionsschnitt", cat: "herren" },
  { url: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=700&h=500&fit=crop", label: "Herren – Klassisch", cat: "herren" },
  { url: "https://images.unsplash.com/photo-1710367847973-152d445b23a6?w=700&h=500&fit=crop", label: "Styling – Blow-out", cat: "styling" },
  { url: "https://images.unsplash.com/photo-1616105996583-f9e3c00bb31f?w=700&h=500&fit=crop", label: "Styling – Finish", cat: "styling" },
  { url: "https://images.unsplash.com/photo-1776105609708-3d8908ab4dc2?w=700&h=500&fit=crop", label: "Pflegeprodukte – Regal", cat: "produkte" },
  { url: "https://images.unsplash.com/photo-1778331883876-5dc2a279ca4e?w=700&h=500&fit=crop", label: "Pflegeprodukte – Premium", cat: "produkte" },
];

export function Galerie() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? images : images.filter((img) => img.cat === active);

  const prev = () => setLightbox((n) => (n !== null ? (n === 0 ? filtered.length - 1 : n - 1) : null));
  const next = () => setLightbox((n) => (n !== null ? (n === filtered.length - 1 ? 0 : n + 1) : null));

  return (
    <div>
      <PageHero
        tag="Eindrücke"
        title="Unsere"
        titleAccent="Galerie"
        subtitle="Bilder aus dem Salon, von unseren Frisuren und Ergebnissen — für Damen, Herren und Kinder in Quickborn."
      />

      <section style={{ background: "#0c0c0c", padding: "64px 24px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {categories.map(({ label, key }) => (
              <button key={key} onClick={() => setActive(key)} style={{ background: active === key ? "#c9a84c" : "rgba(201,168,76,0.07)", color: active === key ? "#0c0c0c" : "#8a8070", border: `1px solid ${active === key ? "#c9a84c" : "rgba(201,168,76,0.2)"}`, borderRadius: 2, padding: "9px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer", fontWeight: active === key ? 600 : 400, transition: "all 0.2s" }}>
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4 }} className="gallery-main-grid">
            {filtered.map((img, i) => (
              <div key={img.url} onClick={() => setLightbox(i)} style={{ position: "relative", overflow: "hidden", height: 260, cursor: "pointer", background: "#1a1a1a" }}>
                <img src={img.url} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.78)", transition: "transform 0.5s, filter 0.3s", display: "block" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.92)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.78)"; }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px", background: "linear-gradient(transparent, rgba(12,12,12,0.8))", color: "#c9a898", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>
                  {img.label}
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>Keine Bilder in dieser Kategorie.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.94)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setLightbox(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", borderRadius: 2, padding: "12px", cursor: "pointer", display: "flex" }}><ChevronLeft size={20} /></button>
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 20, background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", borderRadius: 2, padding: "8px", cursor: "pointer", display: "flex" }}><X size={18} /></button>
          <img src={filtered[lightbox].url.replace("w=700&h=500", "w=1200&h=800")} alt={filtered[lightbox].label} style={{ maxWidth: "88vw", maxHeight: "82vh", objectFit: "contain", borderRadius: 2, pointerEvents: "none" }} onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next(); }} style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", borderRadius: 2, padding: "12px", cursor: "pointer", display: "flex" }}><ChevronRight size={20} /></button>
          <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2 }}>{filtered[lightbox].label} — {lightbox + 1} / {filtered.length}</div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .gallery-main-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 500px) { .gallery-main-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
