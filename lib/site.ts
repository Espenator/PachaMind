/** Absolute base URL used for metadata alternates, sitemap, and robots. */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://pachamind.vercel.app").replace(
    /\/$/,
    "",
  );
