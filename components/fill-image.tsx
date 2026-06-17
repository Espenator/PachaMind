import Image from "next/image";

import { getImagePlaceholderProps } from "@/lib/media";

interface FillImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export function FillImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className = "object-cover",
}: FillImageProps) {
  return (
    <Image
      fill
      src={src}
      alt={alt}
      priority={priority}
      sizes={sizes}
      className={className}
      {...getImagePlaceholderProps(src)}
    />
  );
}
