import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Marvel's Portfolio",
  description: "Front-end developer with Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
