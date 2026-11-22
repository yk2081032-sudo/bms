import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import plumbingImg from "@/assets/service-plumbing.jpg";
import paintingImg from "@/assets/service-painting.jpg";
import carpentryImg from "@/assets/service-carpentry.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { ContactButtons } from "@/components/site/ContactButtons";
import { SERVICES } from "@/lib/site";

const TITLE = "Handyman Services in Birmingham | Repairs, Plumbing, Decorating & More";
const DESCRIPTION =
  "Plumbing repairs, painting & decorating, carpentry, tiling, odd jobs and landlord maintenance across Birmingham and Castle Bromwich. Clear fixed prices.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const IMAGES: Record<string, { src: string; alt: string }> = {
  plumbing: { src: plumbingImg, alt: "Handyman tightening a kitchen tap fitting with a spanner" },
  decorating: { src: paintingImg, alt: "Decorator rolling fresh paint onto a living room wall" },
  carpentry: { src: carpentryImg, alt: "Handyman drilling to fit a floating oak shelf, with a spirit level" },
};

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Whatever needs fixing, we'll sort it.">
        From a dripping tap to a full void-property refresh — one reliable local handyman for homes and rentals across
        Birmingham.
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container-site space-y-16 md:space-y-24">
          {SERVICES.map((s, i) => {
            const img = IMAGES[s.slug];
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-32 items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <div className={i % 2 === 1 && img ? "md:order-2" : ""}>
                  <span className="grid size-14 place-items-center rounded-md border-2 border-foreground bg-primary shadow-block-sm">
                    <s.icon className="size-7" />
                  </span>
                  <h2 className="mt-5 text-3xl md:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-lg text-muted-foreground">{s.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.jobs.map((job) => (
                      <li key={job} className="flex items-center gap-2 font-semibold">
                        <Check className="size-5 shrink-0" strokeWidth={3} />
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>
                {img ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1536}
                    height={1024}
                    className="aspect-[3/2] w-full rounded-lg border-2 border-foreground object-cover shadow-block"
                  />
                ) : (
                  <div className="rounded-lg border-2 border-dashed border-foreground/40 bg-muted p-8">
                    <p className="font-display text-xl font-extrabold">Need this doing?</p>
                    <p className="mt-2 text-muted-foreground">
                      Send a quick photo on WhatsApp and we&apos;ll come back with a clear price.
                    </p>
                    <ContactButtons
                      size="lg"
                      className="mt-6"
                      whatsappText={`Hi, I'd like a price for ${s.title.toLowerCase()}. Here's the job:`}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand title="Can't see your job listed?" body="Just ask. If it's a job around the house, chances are we can help." />
    </>
  );
}
