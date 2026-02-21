import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThreeBackground from "@/components/ui/ThreeBackground";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxe Beauty Lounge - Premium Beauty & Wellness",
  description: "Experience luxury beauty treatments in a serene, modern environment. Expert stylists, premium products, personalized care.",
  keywords: ["beauty salon", "spa", "hair styling", "skincare", "wellness", "luxury beauty"],
  openGraph: {
    title: "Luxe Beauty Lounge",
    description: "Premium beauty and wellness services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        <ThreeBackground />
        <Navbar />
        <main className="min-h-screen relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
