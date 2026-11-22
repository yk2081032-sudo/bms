import { Link } from "@tanstack/react-router";
import { SITE, SERVICES, AREAS } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-secondary pb-28 text-secondary-foreground md:pb-0">
      <div className="hazard h-3" aria-hidden />
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <Logo inverted />
          <p className="text-sm text-ink-muted">
            Reliable, fast and affordable property repairs for homeowners, landlords and letting agents across{" "}
            {SITE.region}.
          </p>
        </div>
        <div>
          <h3 className="eyebrow mb-4 text-primary">Services</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-ink-muted hover:text-secondary-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-4 text-primary">Areas</h3>
          <ul className="space-y-2 text-sm">
            {AREAS.slice(0, 6).map((a) => (
              <li key={a.name} className="text-ink-muted">
                {a.name} <span className="opacity-60">{a.postcode}</span>
              </li>
            ))}
            <li>
              <Link to="/areas" className="font-bold text-secondary-foreground underline underline-offset-4 hover:text-primary">
                See all areas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-4 text-primary">Get in touch</h3>
          <a href={SITE.phoneTel} className="block font-display text-2xl font-extrabold hover:text-primary">
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-bold underline underline-offset-4 hover:text-primary"
          >
            Message on WhatsApp
          </a>
          <p className="mt-4 text-sm text-ink-muted">Based in {SITE.base}</p>
        </div>
      </div>
      <div className="border-t border-ink-soft">
        <div className="container-site flex flex-col justify-between gap-2 py-6 text-xs text-ink-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>Handyman in Birmingham, Castle Bromwich &amp; the West Midlands</span>
        </div>
      </div>
    </footer>
  );
}
