import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/Intro/IntroOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const siteTitle = "GGE Enterprise — We run your operations. You run the business.";
const siteDescription =
  "GGE is a service company. We run the complete operating engine for retail businesses — Royal Inventory and Gendal, the Total Retail Engine — starting in Gambian retail.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "GGE Enterprise",
    type: "website",
    // og:image comes from app/opengraph-image.jpg (Next file convention).
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-gge-canvas text-gge-ink min-h-screen`}
      >
        <IntroOverlay />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
