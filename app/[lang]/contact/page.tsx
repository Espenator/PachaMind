import { notFound } from "next/navigation";

import { ContactForm } from "@/components/contact-form";
import { ScenicBand } from "@/components/scenic-band";
import { getContent, isLanguage } from "@/lib/content";
import { sharedAssets } from "@/lib/media";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.contact.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.contact.intro}</p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-6 lg:px-10">
        <ContactForm content={content.contact} />
      </section>

      {/* Attribution band */}
      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <ScenicBand
          image={sharedAssets.contactBand}
          eyebrow={content.footer.credit}
          title={content.footer.mission}
          alt={content.footer.mission}
        />
      </section>
    </div>
  );
}
