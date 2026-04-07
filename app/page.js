export default function Home() {
  return (
    <main style={container}>

      {/* Header */}
      <div>
        <h1 style={heading}>WEBNEXIO</h1>
        <p style={subheading}>
          Minimalist insights on outbound systems, cold email, and lead generation.
        </p>
      </div>

      {/* Divider */}
      <div style={divider} />

      {/* Articles */}
      <div style={grid}>

        <a href="/cold-email-not-working" style={card}>
          <h2 style={cardTitle}>
            Cold Email Not Getting Replies?
          </h2>
          <p style={cardDesc}>
            Diagnose why your outreach fails and how to fix it with precision.
          </p>
        </a>

      </div>

      {/* CTA */}
      <div style={ctaBox}>
        <p style={ctaText}>
          Want a system that consistently books qualified calls?
        </p>
        <a href="#" style={ctaButton}>
          Book a strategy call
        </a>
      </div>

    </main>
  );
}
