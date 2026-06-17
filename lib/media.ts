import { assetBlurData } from "@/lib/generated/asset-blurs";

export const lessonPosterByTopic = {
  listening: "/images/andes/machu-picchu-inti-punku.jpg",
  reciprocity: "/images/andes/andes-iss47-mountain-road.jpg",
  ritual: "/images/andes/machu-picchu-hb10.jpg",
  stewardship: "/images/andes/machu-picchu-urubamba-canyon.jpg",
  cosmovision: "/images/andes/machu-picchu-aster-nasa.jpg",
  integration: "/images/andes/andes-iss64-range.jpg",
} as const;

export const sharedAssets = {
  heroPoster: "/video/andes-hero-poster.jpg",
  defaultOgImage: "/images/andes/machu-picchu-inti-punku.jpg",
  aboutAttribution: "/images/andes/machu-picchu-urubamba-canyon.jpg",
  aboutValues: "/images/andes/machu-picchu-hb10.jpg",
  contactBand: "/images/andes/machu-picchu-general.png",
  conservationAttribution: "/images/andes/machu-picchu-partial-1911.jpg",
} as const;

export function getBlurDataURL(src: string) {
  return assetBlurData[src];
}

export function getImagePlaceholderProps(src: string) {
  const blurDataURL = getBlurDataURL(src);

  if (!blurDataURL) {
    return {};
  }

  return {
    blurDataURL,
    placeholder: "blur" as const,
  };
}

export function getLessonPoster(topic?: string) {
  if (topic && topic in lessonPosterByTopic) {
    return lessonPosterByTopic[topic as keyof typeof lessonPosterByTopic];
  }

  return sharedAssets.defaultOgImage;
}
