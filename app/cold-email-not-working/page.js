export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial", maxWidth: "800px", margin: "auto" }}>
      
      <h1>WEBNEXIO Blog</h1>
      <p>Outbound systems, cold email, and lead generation.</p>

      <h2 style={{ marginTop: "40px" }}>Latest Articles</h2>

      <ul>
        <li>
          <a href="/cold-email-not-working">Cold Email Not Getting Replies? Fix This</a>
        </li>
        <li>
          <a href="/cold-email-going-to-spam">Cold Email Going to Spam? Fix This</a>
        </li>
        <li>
          <a href="/best-cold-email-examples">Best Cold Email Examples</a>
        </li>
      </ul>

    </main>
  );
}
