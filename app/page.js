export default function Home() {
  return (
    <main style={{
      maxWidth: "900px",
      margin: "80px auto",
      padding: "20px"
    }}>

      {/* Header */}
      <h1 style={{
        fontSize: "42px",
        fontWeight: "600",
        letterSpacing: "-1px"
      }}>
        WEBNEXIO
      </h1>

      <p style={{
        color: "#888",
        marginTop: "10px"
      }}>
        A minimalist blog on outbound systems, cold email, and lead generation.
      </p>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: "#222",
        margin: "40px 0"
      }} />

      {/* Articles */}
      <div style={{
        display: "grid",
        gap: "20px"
      }}>

        <a href="/cold-email-not-working" style={cardStyle}>
          <h2 style={titleStyle}>
            Cold Email Not Getting Replies?
          </h2>
          <p style={descStyle}>
            Why your emails fail and how to fix them.
          </p>
        </a>

      </div>

    </main>
  );
}

const cardStyle = {
  display: "block",
  padding: "20px",
  border: "1px solid #222",
  borderRadius: "12px",
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.2s ease"
};

const titleStyle = {
  margin: 0,
  fontSize: "20px",
  fontWeight: "500"
};

const descStyle = {
  marginTop: "8px",
  color: "#888",
  fontSize: "14px"
};
