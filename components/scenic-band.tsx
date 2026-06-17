import type { ReactNode } from "react";

import { FillImage } from "@/components/fill-image";

interface ScenicBandProps {
  image: string;
  title?: string;
  body?: string;
  eyebrow?: string;
  alt: string;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
}

export function ScenicBand({
  image,
  title,
  body,
  eyebrow,
  alt,
  priority = false,
  children,
  className = "",
}: ScenicBandProps) {
  return (
    <article className={`photo-overlay relative overflow-hidden rounded-[2rem] ${className}`}>
      <FillImage
        src={image}
        alt={alt}
        priority={priority}
        sizes="(min-width: 1024px) 80rem, 100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-deepearth/80 via-deepearth/35 to-deepearth/10"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl p-8 sm:p-10 lg:p-14">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.3em] text-goldmoun">{eyebrow}</p>
        ) : null}
        {title ? <h2 className="headline-font text-3xl text-cloudwhite sm:text-4xl">{title}</h2> : null}
        {body ? <p className="mt-4 text-lg leading-8 text-cloudwhite/90">{body}</p> : null}
        {children}
      </div>
    </article>
  );
}
