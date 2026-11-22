import { Phone, MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { SITE, DEFAULT_WHATSAPP_TEXT } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  size?: ButtonProps["size"];
  className?: string;
  whatsappText?: string;
  stacked?: boolean;
};

export function ContactButtons({ size = "xl", className, whatsappText, stacked }: Props) {
  return (
    <div className={cn("flex gap-3", stacked ? "flex-col" : "flex-col sm:flex-row", className)}>
      <Button asChild variant="hero" size={size}>
        <a href={SITE.phoneTel} aria-label={`Call ${SITE.phoneDisplay}`}>
          <Phone />
          Call {SITE.phoneDisplay}
        </a>
      </Button>
      <Button asChild variant="whatsapp" size={size}>
        <a
          href={SITE.whatsappWithMessage(whatsappText ?? DEFAULT_WHATSAPP_TEXT)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle />
          WhatsApp us
        </a>
      </Button>
    </div>
  );
}
