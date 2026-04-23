import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marvel Adeniyi - Frontend Engineer",
  description: "Front-end developer & Tech Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}