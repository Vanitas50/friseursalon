interface PageHeroProps {
  tag: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  bg?: string;
}

export function PageHero({ tag, title, titleAccent, subtitle, bg }: PageHeroProps) {
  return (
    <section
      style={{
        paddingTop: 160,
        paddingBottom: 72,
        paddingLeft: 24,
        paddingRight: 24,
        background: bg ?? "#0c0c0c",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background accent */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
          <span style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>{tag}</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5.5vw, 60px)", fontWeight: 600, color: "#f0ebe0", lineHeight: 1.1, maxWidth: 700 }}>
          {title}{" "}
          {titleAccent && <span style={{ fontStyle: "italic", color: "#c9a84c" }}>{titleAccent}</span>}
        </h1>
        {subtitle && (
          <p style={{ color: "#8a8070", fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.7, maxWidth: 560, marginTop: 16 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
