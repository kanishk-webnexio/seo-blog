export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#0b0b0b",
          color: "#eaeaea",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >

        {/* NAVBAR */}
        <header style={nav}>
          <a href="/" style={logo}>
            WEBNEXIO
          </a>
        </header>

        {/* PAGE CONTENT */}
        <div style={{ paddingTop: "80px" }}>
          {children}
        </div>

      </body>
    </html>
  );
}

const nav = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "20px 40px",
  borderBottom: "1px solid #1a1a1a",
  background: "rgba(11,11,11,0.7)",
  backdropFilter: "blur(10px)",
  zIndex: 1000
};

const logo = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "14px",
  letterSpacing: "1px",
  fontWeight: "500"
};
