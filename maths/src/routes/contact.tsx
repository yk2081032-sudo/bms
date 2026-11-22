import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Camera } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SITE, DEFAULT_WHATSAPP_TEXT } from "@/lib/site";

const TITLE = "Contact | Call or WhatsApp Birmingham Handyman Services";
const DESCRIPTION =
  "Get a clear price for your job. Call or WhatsApp 07448 463568 — local handyman based in Castle Bromwich, Birmingham B36.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's get your job sorted.">
        The quickest way to a price is a photo on WhatsApp. Prefer to talk? Just give us a ring.
      </PageHero>
      <section className="py-16 md:py-24">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <a
            href={SITE.phoneTel}
            className="block-card group flex flex-col bg-primary p-8 transition-transform hover:-translate-y-1 md:p-10"
          >
            <Phone className="size-10" />
            <p className="eyebrow mt-6">Call us</p>
            <p className="mt-2 font-display text-4xl font-extrabold md:text-5xl">{SITE.phoneDisplay}</p>
            <p className="mt-4 font-medium">Tap to call. If we&apos;re on a job, leave a message and we&apos;ll call you back.</p>
          </a>
          <a
            href={SITE.whatsappWithMessage(DEFAULT_WHATSAPP_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="block-card group flex flex-col bg-whatsapp p-8 text-whatsapp-foreground transition-transform hover:-translate-y-1 md:p-10"
          >
            <MessageCircle className="size-10" />
            <p className="eyebrow mt-6">WhatsApp</p>
            <p className="mt-2 font-display text-4xl font-extrabold md:text-5xl">Send a message</p>
            <p className="mt-4 font-medium">Include a photo, your postcode and a short description of the job.</p>
          </a>
        </div>
        <div className="container-site mt-12 grid gap-6 md:grid-cols-2">
          <div className="flex gap-4 rounded-lg border-2 border-foreground p-6">
            <Camera className="size-7 shrink-0" />
            <div>
              <h2 className="text-xl">Tips for a fast quote</h2>
              <p className="mt-2 text-muted-foreground">
                A couple of photos, rough measurements and your postcode help us give you an accurate price straight
                away.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border-2 border-foreground p-6">
            <MapPin className="size-7 shrink-0" />
            <div>
              <h2 className="text-xl">Where we&apos;re based</h2>
              <p className="mt-2 text-muted-foreground">
                {SITE.base} — covering Birmingham and the surrounding West Midlands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
