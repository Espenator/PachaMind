import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  /** Pacha visual zone affects background color */
  pacha?: "uku" | "kay" | "hanaq" | "none";
  className?: string;
  id?: string;
}

const PACHA_BG: Record<string, string> = {
  uku: "var(--color-uku-pacha)",
  kay: "var(--color-kay-pacha)",
  hanaq: "var(--color-hanaq-pacha)",
  none: "transparent",
};

const PACHA_TEXT: Record<string, string> = {
  uku: "var(--color-stone-100)",
  kay: "var(--color-foreground)",
  hanaq: "var(--color-foreground)",
  none: "var(--color-foreground)",
};

export function SectionContainer({
  children,
  pacha = "none",
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`section-pad ${className}`}
      style={{
        backgroundColor: PACHA_BG[pacha],
        color: PACHA_TEXT[pacha],
      }}
    >
      <div className="container-pm">{children}</div>
    </section>
  );
}
