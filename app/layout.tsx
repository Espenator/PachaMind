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
      <body className="min-h-full bg-cloudwhite text-deepearth">{children}</body>
    </html>
  );
}
