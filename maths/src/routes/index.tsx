import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Camera, BadgePoundSterling, CalendarCheck, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-handyman.jpg";
import { ContactButtons } from "@/components/site/ContactButtons";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { SITE, SERVICES, AREAS, PROMISES } from "@/lib/site";

const TITLE = "Handyman in Birmingham & Castle Bromwich | Birmingham Handyman Services";
const DESCRIPTION =
  "Local handyman for homeowners, landlords and letting agents in Birmingham, Castle Bromwich (B36) and the West Midlands. Repairs, odd jobs and improvements. Call or WhatsApp 07448 463568.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: SITE.name,
          telephone: "+447448463568",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Castle Bromwich, Birmingham",
            postalCode: "B36",
            addressCountry: "GB",
          },
          areaServed: AREAS.map((a) => a.name),
        }),
      },
    ],
  }),
  component: Index,
});

const STEPS = [
  { icon: Camera, title: "Send a photo", body: "WhatsApp a picture of the job or give us a quick call." },
  { icon: BadgePoundSterling, title: "Get a clear price", body: "A straight, fixed quote — no hidden extras." },
  { icon: CalendarCheck, title: "Job done", body: "We turn up on time, do it properly and tidy up after." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-12 py-12 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow animate-rise inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1.5">
              <MapPin className="size-3.5" /> Castle Bromwich · B36<span className="hidden sm:inline"> · Birmingham</span>
            </p>
            <h1 className="animate-rise mt-6 text-5xl sm:text-6xl lg:text-7xl [animation-delay:80ms]">
              Your local handyman. <span className="marker">No job too small.</span>
            </h1>
            <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground md:text-xl [animation-delay:160ms]">
              Reliable, fast and affordable repairs, odd jobs and home improvements for homeowners, landlords and
              letting agents across Birmingham.
            </p>
            <div className="animate-rise mt-8 [animation-delay:240ms]">
              <ContactButtons />
            </div>
            <ul className="animate-rise mt-8 grid gap-2 text-sm font-semibold sm:grid-cols-2 [animation-delay:320ms]">
              {["Clear, fixed prices", "Turn up when we say", "Tidy, respectful work", "Landlords & agents welcome"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="grid size-5 place-items-center rounded-sm bg-foreground text-background">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="animate-rise relative [animation-delay:200ms]">
            <div className="hazard absolute -right-4 -top-4 h-24 w-24 rounded-md md:-right-6 md:-top-6" aria-hidden />
            <img
              src={heroImg}
              alt="Friendly local handyman with tool belt at the front door of a red-brick Birmingham terraced house"
              width={1312}
              height={1199}
              className="relative aspect-[4/4.2] w-full rounded-lg border-2 border-foreground object-cover shadow-block-yellow"
            />
            <div className="block-card absolute -bottom-6 left-4 max-w-[15rem] p-4 md:-left-8">
              <p className="eyebrow text-muted-foreground">Call or WhatsApp</p>
              <a href={SITE.phoneTel} className="mt-1 block font-display text-2xl font-extrabold hover:underline">
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y-2 border-foreground bg-muted py-20">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-muted-foreground">What we do</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Repairs, odd jobs &amp; improvements</h2>
            </div>
            <Button asChild variant="ink" size="lg">
              <Link to="/services">
                All services <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="block-card group flex flex-col p-6 transition-transform hover:-translate-y-1"
              >
                <span className="grid size-12 place-items-center rounded-md border-2 border-foreground bg-primary">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-bold group-hover:underline">
                  Find out more <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container-site">
          <p className="eyebrow text-muted-foreground">How it works</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Sorted in three simple steps</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative rounded-lg border-2 border-foreground p-8">
                <span className="absolute -top-5 left-6 grid size-10 place-items-center rounded-md bg-foreground font-display text-lg font-extrabold text-background">
                  {i + 1}
                </span>
                <step.icon className="size-8" />
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Landlords */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">Landlords &amp; letting agents</p>
            <h2 className="mt-3 text-4xl md:text-5xl">One reliable number for all your properties</h2>
            <p className="mt-5 max-w-xl text-lg text-ink-muted">
              Reactive repairs, end-of-tenancy touch-ups and void refreshes across Birmingham. We liaise with tenants,
              send photos when the job&apos;s done and keep things moving so your properties stay let.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href={SITE.phoneTel}>Call {SITE.phoneDisplay}</a>
              </Button>
              <Button asChild variant="onInk" size="xl">
                <a
                  href={SITE.whatsappWithMessage("Hi, I'm a landlord / letting agent and I'd like to discuss property maintenance.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp about a property
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROMISES.map((p) => (
              <div key={p.title} className="rounded-lg border-2 border-ink-soft bg-ink-soft/40 p-6">
                <Check className="size-6 text-primary" strokeWidth={3} />
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-muted-foreground">Areas we cover</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Based in B36, working across Birmingham</h2>
            </div>
            <Button asChild variant="outline" size="lg" className="border-2 border-foreground font-display font-bold">
              <Link to="/areas">
                See all areas <ArrowRight />
              </Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <li
                key={a.name}
                className="rounded-full border-2 border-foreground bg-card px-4 py-2 font-display text-sm font-bold"
              >
                {a.name} <span className="font-medium text-muted-foreground">{a.postcode}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
