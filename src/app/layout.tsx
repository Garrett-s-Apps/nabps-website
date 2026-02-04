import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NABPS - National Association of Ballot Printing Standards",
  description: "Setting the Standard for Ballot Printing Integrity. NABPS is the industry coalition establishing shared standards, certifications, and best practices for Vote by Mail systems.",
  keywords: ["ballot printing", "election standards", "vote by mail", "ballot certification", "election security"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
