import { Link } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Birmingham Handyman Services — home">
      <span
        className={cn(
          "grid size-11 place-items-center rounded-md border-2 bg-primary text-primary-foreground transition-transform group-hover:-rotate-6",
          inverted ? "border-secondary-foreground" : "border-foreground shadow-block-sm",
        )}
      >
        <Wrench className="size-5" strokeWidth={2.5} />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.05rem] font-extrabold tracking-tight">Birmingham</span>
        <span
          className={cn(
            "block font-display text-[0.7rem] font-bold uppercase tracking-[0.16em]",
            inverted ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          Handyman Services
        </span>
      </span>
    </Link>
  );
}
