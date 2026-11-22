import { Phone, MessageCircle } from "lucide-react";
import { SITE, DEFAULT_WHATSAPP_TEXT } from "@/lib/site";

/** Always-visible call + WhatsApp bar on phones. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t-2 border-foreground bg-background p-2 md:hidden">
      <a
        href={SITE.phoneTel}
        className="flex h-14 items-center justify-center gap-2 rounded-md border-2 border-foreground bg-primary font-display text-base font-extrabold text-primary-foreground"
      >
        <Phone className="size-5" />
        Call now
      </a>
      <a
        href={SITE.whatsappWithMessage(DEFAULT_WHATSAPP_TEXT)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center justify-center gap-2 rounded-md border-2 border-foreground bg-whatsapp font-display text-base font-extrabold text-whatsapp-foreground"
      >
        <MessageCircle className="size-5" />
        WhatsApp
      </a>
    </div>
  );
}
