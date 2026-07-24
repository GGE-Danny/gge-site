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

export const metadata: Metadata = {
  title: "GGE Enterprise — We run your operations. You run the business.",
  description:
    "GGE is a service company. We run the complete operating engine for retail businesses — Royal Inventory and Gendal, the Total Retail Engine — starting in Gambian retail.",
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
