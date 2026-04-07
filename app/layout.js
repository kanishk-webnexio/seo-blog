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
        }}
      >
        {children}
      </body>
    </html>
  );
}
