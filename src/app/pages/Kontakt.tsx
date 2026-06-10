import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Clock, Phone, Navigation, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#1e1e1e",
  border: "1px solid rgba(201,168,76,0.15)",
  borderRadius: 2,
  padding: "13px 15px",
  color: "#f0ebe0",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

export function Kontakt() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div>
      <PageHero tag="Kontakt & Anfahrt" title="So erreichen" titleAccent="Sie uns" subtitle="Rufen Sie an, schreiben Sie uns oder buchen Sie direkt online Ihren Termin." />

      {/* Booking prompt */}
      <div style={{ background: "#c9a84c", padding: "0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "22px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ color: "#0c0c0c", fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600 }}>Online Terminbuchung verfügbar</div>
            <div style={{ color: "rgba(12,12,12,0.65)", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Wählen Sie Leistung, Datum & Uhrzeit — direkt und ohne Telefonat.</div>
          </div>
          <button onClick={() => nav("/termin-buchen")} style={{ display: "flex", alignItems: "center", gap: 8, background: "#0c0c0c", color: "#c9a84c", border: "none", borderRadius: 2, padding: "12px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
            Termin buchen <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <section style={{ background: "#0c0c0c", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48 }} className="kontakt-grid">
          {/* Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <InfoCard>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <MapPin size={15} color="#c9a84c" />
                <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase" }}>Adresse</span>
              </div>
              <p style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                NEW Style Quickborn<br />
                Kieler Straße 23b<br />
                25451 Quickborn
              </p>
            </InfoCard>

            <InfoCard>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <Clock size={15} color="#c9a84c" />
                <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase" }}>Öffnungszeiten</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[{ d: "Montag – Freitag", h: "09:00 – 19:00 Uhr" }, { d: "Samstag", h: "09:00 – 16:00 Uhr" }, { d: "Sonntag", h: "Geschlossen" }].map(({ d, h }) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>{d}</span>
                    <span style={{ color: h === "Geschlossen" ? "#4a4038" : "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: h === "Geschlossen" ? 400 : 500 }}>{h}</span>
                  </div>
                ))}
              </div>
            </InfoCard>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:+49" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#c9a84c", color: "#0c0c0c", borderRadius: 2, padding: "15px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
              >
                <Phone size={13} /> Anrufen
              </a>
              <a href="https://maps.google.com/?q=Kieler+Straße+23b,+25451+Quickborn" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "transparent", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.35)", borderRadius: 2, padding: "15px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Navigation size={13} /> Route planen
              </a>
            </div>

            {/* Map */}
            <div style={{ background: "#1a1a1a", border: "1px solid rgba(201,168,76,0.1)", borderRadius: 2, overflow: "hidden", height: 220 }}>
              <iframe title="Karte NEW Style Quickborn" src="https://www.openstreetmap.org/export/embed.html?bbox=9.880,53.720,9.920,53.740&layer=mapnik&marker=53.730,9.900" style={{ width: "100%", height: "100%", border: "none", filter: "invert(0.88) hue-rotate(180deg) brightness(0.9)" }} loading="lazy" />
            </div>
          </div>

          {/* Contact form */}
          <div style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.12)", borderRadius: 2, padding: "40px 36px" }}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18, minHeight: 380, textAlign: "center" }}>
                <CheckCircle size={48} color="#c9a84c" strokeWidth={1.5} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600, color: "#f0ebe0", margin: 0 }}>Nachricht erhalten!</h3>
                <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>Vielen Dank, {form.name}. Wir melden uns so schnell wie möglich bei Ihnen.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", message: "" }); }} style={{ background: "transparent", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.35)", borderRadius: 2, padding: "11px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>Neue Nachricht</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#f0ebe0", margin: "0 0 6px" }}>Nachricht senden</h3>
                  <p style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 13, margin: 0 }}>Für Terminbuchung → <button type="button" onClick={() => nav("/termin-buchen")} style={{ background: "none", border: "none", color: "#c9a84c", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 13, padding: 0, textDecoration: "underline" }}>Online buchen</button></p>
                </div>
                <Field label="Ihr Name *" name="name" value={form.name} onChange={handleChange} required placeholder="Max Mustermann" />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-row-2">
                  <Field label="Telefon" name="phone" value={form.phone} onChange={handleChange} placeholder="+49 4106 ..." />
                  <Field label="E-Mail" name="email" value={form.email} onChange={handleChange} placeholder="hallo@example.de" type="email" />
                </div>
                <div>
                  <label style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Nachricht</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Ihre Frage oder Anmerkung ..." rows={5} style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                  />
                </div>
                <button type="submit" style={{ background: "#c9a84c", color: "#0c0c0c", border: "none", borderRadius: 2, padding: "15px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", marginTop: 4, transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
                >
                  Absenden
                </button>
                <p style={{ color: "#3a3028", fontFamily: "'DM Sans', sans-serif", fontSize: 11, lineHeight: 1.5, margin: 0 }}>Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .kontakt-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 500px) { .form-row-2 { grid-template-columns: 1fr !important; } }
        select option { background: #1e1e1e; color: #f0ebe0; }
      `}</style>
    </div>
  );
}

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.1)", borderRadius: 2, padding: "24px" }}>
      {children}
    </div>
  );
}

function Field({ label, name, value, onChange, required, placeholder, type = "text" }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string; type?: string }) {
  return (
    <div>
      <label style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} style={{ width: "100%", background: "#1e1e1e", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 2, padding: "13px 15px", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
      />
    </div>
  );
}
