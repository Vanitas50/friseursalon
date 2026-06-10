import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Clock, CalendarDays, Scissors, User } from "lucide-react";
import { PageHero } from "../components/PageHero";

// ─── Service definitions ───────────────────────────────────────────────────
const SERVICES = [
  { id: "herren", label: "Herrenhaarschnitt", duration: 30, price: "ab 18 €", icon: "✂" },
  { id: "herren-komplett", label: "Herren – Waschen, Schneiden, Föhnen", duration: 45, price: "ab 28 €", icon: "✂" },
  { id: "damen", label: "Damenhaarschnitt", duration: 45, price: "ab 28 €", icon: "✂" },
  { id: "damen-wsf", label: "Damen – Waschen, Schneiden, Föhnen", duration: 60, price: "ab 38 €", icon: "✂" },
  { id: "kinder", label: "Kinderhaarschnitt", duration: 30, price: "ab 12 €", icon: "✂" },
  { id: "farbe", label: "Farbe / Tönung", duration: 90, price: "ab 45 €", icon: "●" },
  { id: "strähnen", label: "Strähnen / Balayage", duration: 120, price: "ab 55 €", icon: "●" },
  { id: "styling", label: "Styling / Hochsteckfrisur", duration: 45, price: "ab 22 €", icon: "✦" },
  { id: "pflege", label: "Pflegebehandlung", duration: 30, price: "ab 15 €", icon: "✦" },
];

// Opening hours
const OPENING = { weekday: { start: 9, end: 19 }, saturday: { start: 9, end: 16 } };

// Pre-seeded mock booked slots (day-of-week + hour for demo)
const MOCK_BOOKED = new Set([
  "2025-01-01T09:00", "2025-01-01T09:30",
]);

function getBookedKey(date: Date, time: string) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${time}`;
}

// ─── Helpers ──────────────────────────────────────────────────────────────
const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

function getDayOfWeek(d: Date) { return (d.getDay() + 6) % 7; } // 0=Mo...6=So

function isAvailableDay(d: Date) {
  const dow = getDayOfWeek(d);
  if (dow === 6) return false; // Sunday
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return d >= today;
}

function getTimeSlots(date: Date, durationMin: number): string[] {
  const dow = getDayOfWeek(date);
  const hours = dow === 5 ? OPENING.saturday : OPENING.weekday;
  const slots: string[] = [];
  let current = hours.start * 60;
  const end = hours.end * 60 - durationMin;
  while (current <= end) {
    const h = Math.floor(current / 60).toString().padStart(2, "0");
    const m = (current % 60).toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
    current += 30;
  }
  return slots;
}

function getBookedSlotsForDay(date: Date): Set<string> {
  // Simulate some bookings based on day-of-week for demo variety
  const dow = getDayOfWeek(date);
  const mock = new Set<string>();
  const patterns: Record<number, string[]> = {
    0: ["09:00", "09:30", "11:00", "14:00", "15:30"],
    1: ["10:00", "13:30", "16:00"],
    2: ["09:00", "10:00", "12:00", "12:30", "17:00"],
    3: ["11:30", "14:00", "14:30", "15:00"],
    4: ["09:30", "10:00", "10:30", "13:00"],
    5: ["09:00", "10:30", "13:00", "14:30"],
  };
  (patterns[dow] || []).forEach((t) => mock.add(t));
  return mock;
}

function buildCalendar(year: number, month: number) {
  const firstDay = getDayOfWeek(new Date(year, month, 1));
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
}

// ─── Step components ──────────────────────────────────────────────────────

function StepBar({ step }: { step: number }) {
  const steps = ["Leistung", "Datum", "Uhrzeit", "Ihre Daten", "Bestätigung"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 48 }}>
      {steps.map((label, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : 0 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: i < step ? "#c9a84c" : i === step ? "rgba(201,168,76,0.15)" : "transparent", border: i <= step ? "2px solid #c9a84c" : "2px solid rgba(255,255,255,0.1)", color: i <= step ? "#c9a84c" : "#4a4038", fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, transition: "all 0.3s", flexShrink: 0 }}>
              {i < step ? "✓" : i + 1}
            </div>
            <span style={{ color: i <= step ? "#c9a84c" : "#4a4038", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", whiteSpace: "nowrap" }} className="step-label">{label}</span>
          </div>
          {i < steps.length - 1 && (
            <div style={{ flex: 1, height: 1, background: i < step ? "#c9a84c" : "rgba(255,255,255,0.06)", margin: "0 8px", marginBottom: 22, transition: "background 0.3s" }} />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────
export function TerminBuchen() {
  const today = new Date();
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [confirmed, setConfirmed] = useState(false);

  const calCells = useMemo(() => buildCalendar(calYear, calMonth), [calYear, calMonth]);

  const bookedSlots = useMemo(() =>
    selectedDate ? getBookedSlotsForDay(selectedDate) : new Set<string>(),
    [selectedDate]
  );

  const timeSlots = useMemo(() =>
    selectedDate && selectedService ? getTimeSlots(selectedDate, selectedService.duration) : [],
    [selectedDate, selectedService]
  );

  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setStep(4);
  };

  const btnPrimary: React.CSSProperties = { background: "#c9a84c", color: "#0c0c0c", border: "none", borderRadius: 2, padding: "14px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" };
  const btnSecondary: React.CSSProperties = { background: "transparent", color: "#7a7060", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2, padding: "14px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer", transition: "border-color 0.2s, color 0.2s" };

  return (
    <div>
      <PageHero tag="Online Terminbuchung" title="Termin" titleAccent="buchen" subtitle="Wählen Sie Ihre Leistung, Datum und Uhrzeit — schnell, einfach und ohne Telefonat." />

      <section style={{ background: "#0c0c0c", padding: "64px 24px 96px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <StepBar step={step} />

          {/* ─ STEP 0: Leistung ─ */}
          {step === 0 && (
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: "#f0ebe0", marginBottom: 8 }}>Welche Leistung wünschen Sie?</h2>
              <p style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 32 }}>Wählen Sie eine Leistung aus — die Dauer wird automatisch berechnet.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {SERVICES.map((s) => (
                  <button key={s.id} onClick={() => setSelectedService(s)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: selectedService?.id === s.id ? "rgba(201,168,76,0.1)" : "#161616", border: `1px solid ${selectedService?.id === s.id ? "#c9a84c" : "rgba(255,255,255,0.06)"}`, borderRadius: 2, padding: "18px 22px", cursor: "pointer", transition: "all 0.2s", textAlign: "left" }}
                    onMouseEnter={(e) => { if (selectedService?.id !== s.id) { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; } }}
                    onMouseLeave={(e) => { if (selectedService?.id !== s.id) { e.currentTarget.style.background = "#161616"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; } }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 2, background: selectedService?.id === s.id ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c", fontSize: 16, flexShrink: 0 }}>{s.icon}</div>
                      <div>
                        <div style={{ color: selectedService?.id === s.id ? "#f0ebe0" : "#c0b8a8", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{s.label}</div>
                        <div style={{ display: "flex", gap: 12 }}>
                          <span style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}><Clock size={10} /> {s.duration} Min.</span>
                        </div>
                      </div>
                    </div>
                    <span style={{ color: "#c9a84c", fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, flexShrink: 0 }}>{s.price}</span>
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => { if (selectedService) setStep(1); }} style={{ ...btnPrimary, opacity: selectedService ? 1 : 0.4, cursor: selectedService ? "pointer" : "not-allowed" }}>
                  Weiter →
                </button>
              </div>
            </div>
          )}

          {/* ─ STEP 1: Datum ─ */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: "#f0ebe0", marginBottom: 8 }}>Wählen Sie ein Datum</h2>
              <p style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 32 }}>
                Leistung: <span style={{ color: "#c9a84c" }}>{selectedService?.label}</span> · <span style={{ color: "#7a7060" }}>{selectedService?.duration} Minuten</span>
              </p>

              {/* Calendar */}
              <div style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.12)", borderRadius: 2, padding: "28px", maxWidth: 520, margin: "0 auto 32px" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                  <button onClick={prevMonth} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#c9a84c", borderRadius: 2, padding: "6px 10px", cursor: "pointer", display: "flex" }}><ChevronLeft size={16} /></button>
                  <span style={{ color: "#f0ebe0", fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600 }}>{MONTHS[calMonth]} {calYear}</span>
                  <button onClick={nextMonth} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#c9a84c", borderRadius: 2, padding: "6px 10px", cursor: "pointer", display: "flex" }}><ChevronRight size={16} /></button>
                </div>

                {/* Day headers */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 8 }}>
                  {DAYS.map((d) => (
                    <div key={d} style={{ textAlign: "center", color: "#4a4038", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", padding: "4px 0" }}>{d}</div>
                  ))}
                </div>

                {/* Days grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
                  {calCells.map((day, i) => {
                    if (!day) return <div key={i} />;
                    const avail = isAvailableDay(day);
                    const isSunday = getDayOfWeek(day) === 6;
                    const isSelected = selectedDate?.toDateString() === day.toDateString();
                    const isToday = day.toDateString() === today.toDateString();

                    return (
                      <button key={i} onClick={() => { if (avail) { setSelectedDate(day); setSelectedTime(null); } }}
                        disabled={!avail || isSunday}
                        style={{
                          background: isSelected ? "#c9a84c" : isToday ? "rgba(201,168,76,0.1)" : "transparent",
                          border: isSelected ? "2px solid #c9a84c" : isToday ? "1px solid rgba(201,168,76,0.4)" : "1px solid transparent",
                          borderRadius: 2,
                          color: isSelected ? "#0c0c0c" : !avail || isSunday ? "#2a2820" : "#d0c8b8",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
                          padding: "8px 4px",
                          cursor: avail && !isSunday ? "pointer" : "not-allowed",
                          fontWeight: isSelected ? 700 : 400,
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => { if (avail && !isSelected) { e.currentTarget.style.background = "rgba(201,168,76,0.12)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; } }}
                        onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.background = isToday ? "rgba(201,168,76,0.1)" : "transparent"; e.currentTarget.style.borderColor = isToday ? "rgba(201,168,76,0.4)" : "transparent"; } }}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>

                <div style={{ marginTop: 20, display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <Legend color="#c9a84c" label="Ausgewählt" />
                  <Legend color="rgba(201,168,76,0.4)" label="Heute" />
                  <Legend color="#2a2820" label="Nicht verfügbar" />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => setStep(0)} style={btnSecondary}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#7a7060"; }}
                >← Zurück</button>
                <button onClick={() => { if (selectedDate) setStep(2); }} style={{ ...btnPrimary, opacity: selectedDate ? 1 : 0.4, cursor: selectedDate ? "pointer" : "not-allowed" }}>
                  Weiter →
                </button>
              </div>
            </div>
          )}

          {/* ─ STEP 2: Uhrzeit ─ */}
          {step === 2 && selectedDate && selectedService && (
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: "#f0ebe0", marginBottom: 8 }}>Wählen Sie eine Uhrzeit</h2>
              <p style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 8 }}>
                <span style={{ color: "#c9a84c" }}>{selectedService.label}</span>
              </p>
              <p style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 13, marginBottom: 32, display: "flex", alignItems: "center", gap: 6 }}>
                <CalendarDays size={13} /> {DAYS[getDayOfWeek(selectedDate)]}, {selectedDate.getDate()}. {MONTHS[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 8, marginBottom: 32 }} className="slots-grid">
                {timeSlots.map((slot) => {
                  const booked = bookedSlots.has(slot);
                  const isSelected = selectedTime === slot;
                  return (
                    <button key={slot} onClick={() => { if (!booked) setSelectedTime(slot); }} disabled={booked} style={{ background: isSelected ? "#c9a84c" : booked ? "rgba(255,255,255,0.02)" : "#161616", border: `1px solid ${isSelected ? "#c9a84c" : booked ? "rgba(255,255,255,0.04)" : "rgba(201,168,76,0.12)"}`, borderRadius: 2, padding: "12px 8px", color: isSelected ? "#0c0c0c" : booked ? "#2a2820" : "#c0b8a8", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: isSelected ? 600 : 400, cursor: booked ? "not-allowed" : "pointer", transition: "all 0.15s", textDecoration: booked ? "line-through" : "none" }}
                      onMouseEnter={(e) => { if (!booked && !isSelected) { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#c9a84c"; } }}
                      onMouseLeave={(e) => { if (!booked && !isSelected) { e.currentTarget.style.background = "#161616"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"; } }}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>

              <div style={{ display: "flex", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
                <Legend color="#c9a84c" label="Verfügbar" />
                <Legend color="#2a2820" label="Bereits gebucht" />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => setStep(1)} style={btnSecondary}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#7a7060"; }}
                >← Zurück</button>
                <button onClick={() => { if (selectedTime) setStep(3); }} style={{ ...btnPrimary, opacity: selectedTime ? 1 : 0.4, cursor: selectedTime ? "pointer" : "not-allowed" }}>
                  Weiter →
                </button>
              </div>
            </div>
          )}

          {/* ─ STEP 3: Daten ─ */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: "#f0ebe0", marginBottom: 8 }}>Ihre Kontaktdaten</h2>

              {/* Summary */}
              <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2, padding: "18px 22px", marginBottom: 32, display: "flex", gap: 32, flexWrap: "wrap" }}>
                <SummaryItem icon={<Scissors size={13} />} label="Leistung" value={selectedService?.label ?? ""} />
                <SummaryItem icon={<CalendarDays size={13} />} label="Datum" value={selectedDate ? `${DAYS[getDayOfWeek(selectedDate)]}, ${selectedDate.getDate()}. ${MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()}` : ""} />
                <SummaryItem icon={<Clock size={13} />} label="Uhrzeit" value={selectedTime ?? ""} />
              </div>

              <form onSubmit={handleConfirm} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <FormField label="Vollständiger Name *" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Max Mustermann" required />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-2">
                  <FormField label="E-Mail-Adresse *" name="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="hallo@example.de" type="email" required />
                  <FormField label="Telefonnummer" name="phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+49 4106 ..." />
                </div>
                <div>
                  <label style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Anmerkungen (optional)</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Besondere Wünsche, bevorzugte Stylisten o. Ä. ..." rows={3}
                    style={{ width: "100%", background: "#1e1e1e", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 2, padding: "13px 15px", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box", resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                  <button type="button" onClick={() => setStep(2)} style={btnSecondary}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#7a7060"; }}
                  >← Zurück</button>
                  <button type="submit" style={btnPrimary}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
                  >
                    Termin verbindlich anfragen
                  </button>
                </div>
                <p style={{ color: "#3a3028", fontFamily: "'DM Sans', sans-serif", fontSize: 11 }}>Ihre Daten werden vertraulich behandelt und nicht weitergegeben.</p>
              </form>
            </div>
          )}

          {/* ─ STEP 4: Bestätigung ─ */}
          {step === 4 && confirmed && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24, padding: "40px 0" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(201,168,76,0.12)", border: "2px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CheckCircle size={36} color="#c9a84c" strokeWidth={1.5} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 600, color: "#f0ebe0", marginBottom: 8 }}>Anfrage erhalten!</h2>
                <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, maxWidth: 460 }}>
                  Vielen Dank, <strong style={{ color: "#c9a84c" }}>{form.name}</strong>. Ihre Terminanfrage ist bei uns eingegangen. Wir bestätigen Ihnen Ihren Termin schnellstmöglich per E-Mail oder telefonisch.
                </p>
              </div>

              {/* Summary card */}
              <div style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2, padding: "28px 32px", width: "100%", maxWidth: 480, textAlign: "left" }}>
                <div style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 20 }}>Ihre Buchungsübersicht</div>
                {[
                  { label: "Leistung", value: selectedService?.label ?? "" },
                  { label: "Datum", value: selectedDate ? `${DAYS[getDayOfWeek(selectedDate)]}, ${selectedDate.getDate()}. ${MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()}` : "" },
                  { label: "Uhrzeit", value: selectedTime ?? "" },
                  { label: "Dauer", value: `${selectedService?.duration} Minuten` },
                  { label: "Name", value: form.name },
                  { label: "E-Mail", value: form.email },
                  ...(form.phone ? [{ label: "Telefon", value: form.phone }] : []),
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>{label}</span>
                    <span style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500 }}>{value}</span>
                  </div>
                ))}
              </div>

              <p style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.6 }}>
                Bei Fragen: <strong style={{ color: "#8a8070" }}>Kieler Straße 23b, 25451 Quickborn</strong>
              </p>

              <button onClick={() => { setStep(0); setSelectedService(null); setSelectedDate(null); setSelectedTime(null); setForm({ name: "", email: "", phone: "", message: "" }); setConfirmed(false); }}
                style={{ ...btnPrimary }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
              >
                Weiteren Termin buchen
              </button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .step-label { display: none; }
          .slots-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .form-2 { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 400px) {
          .slots-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 12, height: 12, borderRadius: 2, background: color }} />
      <span style={{ color: "#5a5040", fontFamily: "'DM Sans', sans-serif", fontSize: 11 }}>{label}</span>
    </div>
  );
}

function SummaryItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#c9a84c", marginBottom: 4 }}>
        {icon}
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase" }}>{label}</span>
      </div>
      <div style={{ color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500 }}>{value}</div>
    </div>
  );
}

function FormField({ label, name, value, onChange, required, placeholder, type = "text" }: { label: string; name: string; value: string; onChange: (v: string) => void; required?: boolean; placeholder?: string; type?: string }) {
  return (
    <div>
      <label style={{ color: "#7a7060", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>{label}</label>
      <input type={type} name={name} value={value} onChange={(e) => onChange(e.target.value)} required={required} placeholder={placeholder}
        style={{ width: "100%", background: "#1e1e1e", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 2, padding: "13px 15px", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
      />
    </div>
  );
}
