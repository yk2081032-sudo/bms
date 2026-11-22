import { Link } from "@tanstack/react-router";
import { Menu, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { ContactButtons } from "./ContactButtons";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/areas", label: "Areas we cover" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-secondary text-secondary-foreground">
        <div className="container-site flex h-9 items-center justify-between text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="size-3.5 text-primary" />
            Birmingham &amp; Castle Bromwich (B36)
          </span>
          <a href={SITE.phoneTel} className="hidden font-bold hover:text-primary sm:inline">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="border-b-2 border-foreground bg-background/95 backdrop-blur">
        <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 font-display text-sm font-bold transition-colors hover:bg-muted"
                activeProps={{ className: "bg-accent" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="lg" className="hidden md:inline-flex">
              <a href={SITE.phoneTel}>
                <Phone />
                {SITE.phoneDisplay}
              </a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="size-11 border-2 border-foreground lg:hidden [&_svg]:size-6" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[85%] max-w-sm flex-col gap-6 bg-background p-6">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
                <nav className="flex flex-col" aria-label="Mobile">
                  <Link to="/" onClick={() => setOpen(false)} className="border-b py-4 font-display text-xl font-extrabold">
                    Home
                  </Link>
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="border-b py-4 font-display text-xl font-extrabold"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <ContactButtons size="lg" stacked />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
