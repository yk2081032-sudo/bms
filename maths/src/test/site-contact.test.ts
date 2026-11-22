import { describe, expect, it } from "vitest";
import { SITE } from "@/lib/site";

describe("business contact details", () => {
  it("call links dial +44 7448 463568", () => {
    expect(SITE.phoneTel).toBe("tel:+447448463568");
    expect(SITE.phoneDisplay).toBe("07448 463568");
  });

  it("WhatsApp links open a chat with 447448463568", () => {
    expect(SITE.whatsapp).toBe("https://wa.me/447448463568");
    expect(SITE.whatsappWithMessage("Hi there")).toBe("https://wa.me/447448463568?text=Hi%20there");
  });
});
