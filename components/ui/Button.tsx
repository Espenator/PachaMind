import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  href?: string;
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const VARIANT_STYLES: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-accent)",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--color-accent)",
    border: "1.5px solid var(--color-accent)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-foreground)",
  },
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const sizeClass = SIZE_CLASSES[size];
  const style = VARIANT_STYLES[variant];
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sizeClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} style={style} {...rest}>
      {children}
    </button>
  );
}
