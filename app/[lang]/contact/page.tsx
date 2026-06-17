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
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{
            backgroundImage:
              "url(/images/andes/andes-iss59-range.jpg)",
          }}
        >
          <div className="relative z-10 p-8 sm:p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.3em] text-goldmoun">{content.footer.credit}</p>
            <p className="headline-font mt-4 text-3xl text-cloudwhite sm:text-4xl">{content.footer.mission}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
