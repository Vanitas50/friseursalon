import { useState } from "react";
import { MapPin, Clock, Phone, Navigation, CheckCircle } from "lucide-react";

const services = [
  "Damenhaarschnitt",
  "Herrenhaarschnitt",
  "Kinderhaarschnitt",
  "Waschen, Schneiden & Föhnen",
  "Farbe / Tönung",
  "Strähnen / Balayage",
  "Styling",
  "Pflegebehandlung",
  "Sonstiges",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1e1e1e",
    border: "1px solid rgba(201,168,76,0.15)",
    borderRadius: 2,
    padding: "14px 16px",
    color: "#f0ebe0",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="kontakt"
      style={{ background: "#0f0f0f", padding: "100px 24px", borderTop: "1px solid rgba(201,168,76,0.1)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>Termin & Kontakt</span>
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: 600,
              color: "#f0ebe0",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Jetzt Termin bei{" "}
            <span style={{ fontStyle: "italic", color: "#c9a84c" }}>NEW Style Quickborn</span>{" "}
            anfragen
          </h2>
          <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>
            Schreiben Sie uns oder rufen Sie direkt an — wir freuen uns auf Ihren Besuch.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 48,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Address */}
            <div
              style={{
                background: "#161616",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: 2,
                padding: "28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <MapPin size={16} color="#c9a84c" />
                <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Adresse</span>
              </div>
              <p style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Kieler Straße 23b<br />
                25451 Quickborn
              </p>
            </div>

            {/* Hours */}
            <div
              style={{
                background: "#161616",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: 2,
                padding: "28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Clock size={16} color="#c9a84c" />
                <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Öffnungszeiten</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Montag – Freitag</span>
                  <span style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500 }}>09:00 – 19:00 Uhr</span>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Samstag</span>
                  <span style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500 }}>09:00 – 16:00 Uhr</span>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Sonntag</span>
                  <span style={{ color: "#6a6050", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Geschlossen</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="tel:+49"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: "#c9a84c",
                  color: "#0c0c0c",
                  border: "none",
                  borderRadius: 2,
                  padding: "16px 24px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
              >
                <Phone size={14} />
                Anrufen
              </a>
              <a
                href="https://maps.google.com/?q=Kieler+Straße+23b,+25451+Quickborn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: "transparent",
                  color: "#c9a84c",
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: 2,
                  padding: "16px 24px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 500,
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; e.currentTarget.style.borderColor = "#c9a84c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
              >
                <Navigation size={14} />
                Route planen
              </a>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: 2,
                overflow: "hidden",
                height: 180,
                position: "relative",
              }}
            >
              <iframe
                title="NEW Style Quickborn Standort"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.880,53.720,9.920,53.740&layer=mapnik&marker=53.730,9.900"
                style={{ width: "100%", height: "100%", border: "none", filter: "invert(0.85) hue-rotate(180deg)" }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "8px 12px",
                  background: "rgba(12,12,12,0.85)",
                  color: "#8a8070",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  textAlign: "center",
                }}
              >
                Kieler Straße 23b, 25451 Quickborn
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            style={{
              background: "#161616",
              border: "1px solid rgba(201,168,76,0.12)",
              borderRadius: 2,
              padding: "40px 36px",
            }}
          >
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, minHeight: 400 }}>
                <CheckCircle size={52} color="#c9a84c" strokeWidth={1.5} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: "#f0ebe0", textAlign: "center", margin: 0 }}>
                  Anfrage erhalten!
                </h3>
                <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, textAlign: "center" }}>
                  Vielen Dank, {form.name}. Wir melden uns schnellstmöglich bei Ihnen, um Ihren Termin zu bestätigen.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", date: "", message: "" }); }}
                  style={{
                    background: "transparent",
                    color: "#c9a84c",
                    border: "1px solid rgba(201,168,76,0.4)",
                    borderRadius: 2,
                    padding: "12px 24px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#f0ebe0", margin: "0 0 8px" }}>
                    Terminanfrage senden
                  </h3>
                  <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 13, margin: 0 }}>
                    Wir melden uns bei Ihnen zur Terminbestätigung.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                  <div>
                    <label style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Ihr Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Max Mustermann"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                    />
                  </div>
                  <div>
                    <label style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Telefonnummer *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+49 4106 ..."
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                  <div>
                    <label style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Gewünschte Leistung
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                    >
                      <option value="">Bitte wählen ...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Gewünschter Termin
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Besondere Wünsche, bevorzugte Uhrzeit o. Ä. ..."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#c9a84c",
                    color: "#0c0c0c",
                    border: "none",
                    borderRadius: 2,
                    padding: "16px 32px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.2s",
                    marginTop: 4,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
                >
                  Anfrage absenden
                </button>

                <p style={{ color: "#4a4038", fontFamily: "'DM Sans', sans-serif", fontSize: 11, lineHeight: 1.6, margin: 0 }}>
                  Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        select option {
          background: #1e1e1e;
          color: #f0ebe0;
        }
      `}</style>
    </section>
  );
}
