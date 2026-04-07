export default function Page() {
  return (
    <main style={{
      maxWidth: "700px",
      margin: "80px auto",
      padding: "20px"
    }}>

      <h1 style={{
        fontSize: "36px",
        fontWeight: "600",
        letterSpacing: "-0.5px"
      }}>
        Cold Email Not Getting Replies?
      </h1>

      <p style={{
        color: "#888",
        marginTop: "10px"
      }}>
        A direct breakdown of why your outreach is failing.
      </p>

      <div style={{
        height: "1px",
        background: "#222",
        margin: "30px 0"
      }} />

      <p>
        Most cold emails fail because they are irrelevant, generic, and weak.
      </p>

      <h2>Why this happens</h2>
      <ul>
        <li>No personalization</li>
        <li>Weak offer</li>
        <li>Wrong targeting</li>
      </ul>

      <h2>Fix</h2>
      <p>
        Focus on clarity, relevance, and a strong outcome-driven message.
      </p>

    </main>
  );
}
