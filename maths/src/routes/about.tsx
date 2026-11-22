import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import carpentryImg from "@/assets/service-carpentry.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { PROMISES } from "@/lib/site";

const TITLE = "About Us | Birmingham Handyman Services, Castle Bromwich";
const DESCRIPTION =
  "A friendly, no-nonsense local handyman based in Castle Bromwich. Honest prices, reliable timekeeping and tidy work for homes and rental properties.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Honest work from a local you can trust.">
        No call centres, no big-company mark-ups. Just a reliable handyman from Castle Bromwich who does the job
        properly.
      </PageHero>
      <section className="py-16 md:py-24">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <img
            src={carpentryImg}
            alt="Handyman carefully fitting a level shelf in a Birmingham home"
            loading="lazy"
            width={1536}
            height={1024}
            className="aspect-[4/3] w-full rounded-lg border-2 border-foreground object-cover shadow-block-yellow"
          />
          <div className="space-y-5 text-lg">
            <h2 className="text-4xl">Why people keep calling us back</h2>
            <p className="text-muted-foreground">
              Finding someone who turns up, does a good job and charges a fair price shouldn&apos;t be hard. That&apos;s
              exactly what we set out to be for homeowners, landlords and letting agents across Birmingham.
            </p>
            <p className="text-muted-foreground">
              Whether it&apos;s one small fix or a long list of jobs, you&apos;ll get a clear price up front, a time that
              suits you and a tidy finish.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t-2 border-foreground bg-muted py-16 md:py-24">
        <div className="container-site">
          <p className="eyebrow text-muted-foreground">Our promise</p>
          <h2 className="mt-3 text-4xl md:text-5xl">What you can count on</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((p) => (
              <div key={p.title} className="block-card p-6">
                <span className="grid size-10 place-items-center rounded-md bg-primary">
                  <Check className="size-5" strokeWidth={3} />
                </span>
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
