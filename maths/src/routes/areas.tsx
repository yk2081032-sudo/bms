import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { AREAS } from "@/lib/site";

const TITLE = "Areas We Cover | Handyman in Castle Bromwich, Erdington, Sutton Coldfield & More";
const DESCRIPTION =
  "Based in Castle Bromwich B36, covering Hodge Hill, Shard End, Erdington, Castle Vale, Chelmsley Wood, Sutton Coldfield and surrounding Birmingham areas.";

export const Route = createFileRoute("/areas")({
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
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHero eyebrow="Areas we cover" title="Local to B36. Across Birmingham.">
        We&apos;re based in Castle Bromwich, so we can get to most of north and east Birmingham quickly. Don&apos;t see
        your area? Give us a call — we probably cover it.
      </PageHero>
      <section className="py-16 md:py-24">
        <div className="container-site">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((a) => (
              <li key={a.name} className="block-card flex items-start gap-3 p-5">
                <MapPin className="mt-0.5 size-5 shrink-0" />
                <div>
                  <p className="font-display text-lg font-extrabold leading-tight">{a.name}</p>
                  <p className="text-sm text-muted-foreground">{a.postcode}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-muted-foreground">
            We also regularly work further afield across Birmingham and the wider West Midlands, especially for
            landlords and letting agents with multiple properties.
          </p>
        </div>
      </section>
      <CtaBand title="Are you in our area?" body="Call or WhatsApp with your postcode and the job — we'll let you know straight away." />
    </>
  );
}
