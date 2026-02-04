import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nabps.org"),
  title: {
    default: "NABPS - National Association of Ballot Printing Standards",
    template: "%s | NABPS",
  },
  description: "Setting the Standard for Ballot Printing Integrity. NABPS is the industry coalition establishing shared standards, certifications, and best practices for Vote by Mail systems.",
  keywords: [
    "ballot printing",
    "election standards",
    "vote by mail",
    "ballot certification",
    "election security",
    "NABPS",
    "ballot printing certification",
    "election integrity",
    "VBM standards",
  ],
  authors: [{ name: "NABPS" }],
  creator: "NABPS",
  publisher: "NABPS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nabps.org",
    siteName: "NABPS",
    title: "NABPS - National Association of Ballot Printing Standards",
    description: "Setting the Standard for Ballot Printing Integrity",
    images: [
      {
        url: "/images/NABPS_Transparent.png",
        width: 1200,
        height: 630,
        alt: "NABPS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NABPS - National Association of Ballot Printing Standards",
    description: "Setting the Standard for Ballot Printing Integrity",
    images: ["/images/NABPS_Transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
