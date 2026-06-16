import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "PachaMind — Free Andean Cosmovision Learning",
    template: "%s | PachaMind",
  },
  description:
    "Free educational videos and lessons on Andean cosmovision, the Three Pachas, the Five Andean Values, archaeo-astronomy, and conservation — taught by Mallku Aribalo (James Arevalo Merejildo).",
  keywords: [
    "Andean cosmovision",
    "Three Pachas",
    "Mallku Aribalo",
    "Andean learning",
    "free education",
    "Pachamama",
    "Ayni",
    "Sacred Valley",
  ],
  authors: [{ name: "Mallku Aribalo (James Arevalo Merejildo)" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PachaMind",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C17F5E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
