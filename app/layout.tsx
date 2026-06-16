import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PachaMind",
  description:
    "A free bilingual learning platform for sacred documentary lessons and reflection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Preconnect hints shave ~200ms off font resolution on first load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full bg-cloud text-deepearth">{children}</body>
    </html>
  );
}
