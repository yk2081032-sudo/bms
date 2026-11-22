import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground bg-secondary text-secondary-foreground">
      <div className="container-site py-16 md:py-24">
        <p className="eyebrow animate-rise text-primary">{eyebrow}</p>
        <h1 className="animate-rise mt-4 max-w-3xl text-5xl md:text-7xl [animation-delay:80ms]">{title}</h1>
        {children ? (
          <div className="animate-rise mt-6 max-w-2xl text-lg text-ink-muted [animation-delay:160ms]">{children}</div>
        ) : null}
      </div>
      <div className="hazard absolute bottom-0 right-0 h-full w-6 opacity-90 md:w-10" aria-hidden />
    </section>
  );
}
