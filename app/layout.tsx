export const metadata = {
  title: "Douglas Karanja | Portfolio",
  description: "Full-Stack Developer and AI Systems Enthusiast"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
