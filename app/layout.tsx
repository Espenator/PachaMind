import "./globals.css";
import type { ReactNode } from "react";

// The <html> and <body> tags are rendered by app/[lang]/layout.tsx so that
// the correct `lang` attribute is set per locale.  This root layout only
// imports global styles and passes children through.
export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
