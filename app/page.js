export default function Home() {
  return (
    <main style={container}>

      <div>
        <h1 style={heading}>WEBNEXIO</h1>
        <p style={subheading}>
          Minimalist insights on outbound systems, cold email, and lead generation.
        </p>
      </div>

      <div style={divider} />

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

const container = {
  maxWidth: "880px",
  margin: "100px auto",
  padding: "20px"
};

const heading = {
  fontSize: "44px",
  fontWeight: "600",
  letterSpacing: "-1.2px"
};

const subheading = {
  color: "#777",
  marginTop: "12px",
  fontSize: "15px",
  lineHeight: "1.6"
};

const divider = {
  height: "1px",
  background: "#1a1a1a",
  margin: "50px 0"
};

const grid = {
  display: "grid",
  gap: "18px"
};

const card = {
  display: "block",
  padding: "22px",
  border: "1px solid #1f1f1f",
  borderRadius: "14px",
  textDecoration: "none",
  color: "inherit"
};

const cardTitle = {
  margin: 0,
  fontSize: "20px",
  fontWeight: "500"
};

const cardDesc = {
  marginTop: "10px",
  color: "#888",
  fontSize: "14px"
};

const ctaBox = {
  marginTop: "70px",
  padding: "30px",
  border: "1px solid #1f1f1f",
  borderRadius: "14px",
  textAlign: "center"
};

const ctaText = {
  color: "#aaa",
  marginBottom: "15px",
  fontSize: "14px"
};

const ctaButton = {
  display: "inline-block",
  padding: "10px 18px",
  border: "1px solid #333",
  borderRadius: "999px",
  textDecoration: "none",
  color: "#fff",
  fontSize: "14px"
};
