import { PageHero } from "../components/PageHero";

export function Impressum() {
  return (
    <div>
      <PageHero tag="Rechtliches" title="Impressum" />
      <section style={{ background: "#0c0c0c", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <LegalSection title="Angaben gemäß § 5 TMG">
            <p>NEW Style Quickborn<br />Kieler Straße 23b<br />25451 Quickborn</p>
          </LegalSection>
          <LegalSection title="Kontakt">
            <p>Telefon: [Telefonnummer eintragen]<br />E-Mail: [E-Mail-Adresse eintragen]</p>
          </LegalSection>
          <LegalSection title="Berufsbezeichnung und berufsrechtliche Regelungen">
            <p>Berufsbezeichnung: Friseur/Friseurmeister<br />Zuständige Kammer: [Handwerkskammer eintragen]<br />Verliehen durch: Deutschland</p>
          </LegalSection>
          <LegalSection title="Umsatzsteuer-ID">
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: [USt-IdNr. eintragen]</p>
          </LegalSection>
          <LegalSection title="EU-Streitschlichtung">
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </LegalSection>
          <LegalSection title="Haftung für Inhalte">
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          </LegalSection>
          <LegalSection title="Haftung für Links">
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          </LegalSection>
          <LegalSection title="Urheberrecht">
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: "#f0ebe0", marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid rgba(201,168,76,0.1)" }}>{title}</h2>
      <div style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.85, display: "flex", flexDirection: "column", gap: 8 }}>
        {children}
      </div>
    </div>
  );
}
