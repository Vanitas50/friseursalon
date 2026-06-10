import { PageHero } from "../components/PageHero";

export function Datenschutz() {
  return (
    <div>
      <PageHero tag="Rechtliches" title="Datenschutz" titleAccent="erklärung" />
      <section style={{ background: "#0c0c0c", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <LegalSection title="1. Verantwortlicher">
            <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
            <p style={{ marginTop: 12 }}>NEW Style Quickborn<br />Kieler Straße 23b<br />25451 Quickborn</p>
          </LegalSection>
          <LegalSection title="2. Ihre Betroffenenrechte">
            <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
          </LegalSection>
          <LegalSection title="3. Kontaktformular">
            <p>Wenn Sie uns über das Kontaktformular oder die Terminbuchung kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </LegalSection>
          <LegalSection title="4. Cookies">
            <p>Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Daten gespeichert, die für den Betrieb der Website erforderlich sind.</p>
          </LegalSection>
          <LegalSection title="5. Hosting">
            <p>Diese Website wird auf Servern Dritter gehostet. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters verarbeitet. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
          </LegalSection>
          <LegalSection title="6. Änderungen dieser Datenschutzerklärung">
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services.</p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: "#f0ebe0", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(201,168,76,0.1)" }}>{title}</h2>
      <div style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.85, display: "flex", flexDirection: "column", gap: 10 }}>
        {children}
      </div>
    </div>
  );
}
