import { notFound } from "next/navigation";

import { ContactForm } from "@/components/contact-form";
import { getContent, isLanguage } from "@/lib/content";

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
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="documentary-card grain p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.38em] text-terracotta font-medium">
            {content.brand.promise}
          </p>
          <h1 className="headline-font mt-5 text-fluid-4xl text-deepearth">
            {content.contact.title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-fluid-lg leading-[1.72] text-stonegray">
            {content.contact.intro}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
        <ContactForm content={content.contact} />
      </section>

      {/* Attribution band */}
      <section className="mx-auto mt-6 max-w-7xl px-5 sm:px-8 lg:px-10">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{
            backgroundImage: "url(/images/andes/hero-machu-picchu.jpg)",
          }}
        >
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs uppercase tracking-[0.38em] text-gold font-medium">
              {content.footer.credit}
            </p>
            <p className="headline-font mt-4 text-fluid-2xl text-cloud">
              {content.footer.mission}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
