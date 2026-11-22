import type { LucideIcon } from "lucide-react";
import {
  Hammer,
  Wrench,
  PaintRoller,
  Drill,
  Grid3x3,
  Lightbulb,
  KeyRound,
  Fence,
} from "lucide-react";

export const SITE = {
  name: "Birmingham Handyman Services",
  shortName: "Birmingham Handyman",
  phoneDisplay: "07448 463568",
  phoneTel: "tel:+447448463568",
  whatsapp: "https://wa.me/447448463568",
  whatsappWithMessage: (text: string) =>
    `https://wa.me/447448463568?text=${encodeURIComponent(text)}`,
  base: "Castle Bromwich, Birmingham B36",
  region: "Birmingham & the West Midlands",
} as const;

export const DEFAULT_WHATSAPP_TEXT =
  "Hi, I found you on your website. I need a hand with a job at my property:";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  jobs: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "repairs",
    title: "General repairs & odd jobs",
    icon: Hammer,
    summary: "That list of little jobs you keep meaning to get round to — sorted in one visit.",
    jobs: ["Sticking doors & locks", "Loose handles & hinges", "Draught proofing", "Filling & patching walls"],
  },
  {
    slug: "plumbing",
    title: "Plumbing repairs",
    icon: Wrench,
    summary: "Small plumbing fixes done properly, before a drip turns into a disaster.",
    jobs: ["Dripping taps & washers", "Leaking pipes & traps", "Toilet cisterns & seats", "Re-sealing baths & showers"],
  },
  {
    slug: "decorating",
    title: "Painting & decorating",
    icon: PaintRoller,
    summary: "Clean, crisp finishes for single rooms, hallways or a whole property refresh.",
    jobs: ["Walls & ceilings", "Woodwork & skirting", "Feature walls", "Fence & shed painting"],
  },
  {
    slug: "carpentry",
    title: "Carpentry & assembly",
    icon: Drill,
    summary: "Shelves up level, furniture built right, doors hung so they actually close.",
    jobs: ["Flat-pack assembly", "Shelves & storage", "TV wall mounting", "Hanging doors & skirting"],
  },
  {
    slug: "tiling",
    title: "Tiling & grouting",
    icon: Grid3x3,
    summary: "Splashbacks, replacement tiles and fresh grout to make kitchens and bathrooms look new.",
    jobs: ["Kitchen splashbacks", "Cracked tile replacement", "Re-grouting", "Small floor areas"],
  },
  {
    slug: "fittings",
    title: "Fixtures & fittings",
    icon: Lightbulb,
    summary: "All the fiddly fixing jobs — curtain poles, blinds, mirrors, pictures and more.",
    jobs: ["Curtain poles & blinds", "Mirrors & pictures", "Like-for-like light fittings", "Smoke alarms"],
  },
  {
    slug: "landlords",
    title: "Landlord & letting agent maintenance",
    icon: KeyRound,
    summary: "Reliable reactive repairs and void refreshes so your properties are let-ready, fast.",
    jobs: ["End-of-tenancy touch-ups", "Reactive repair call-outs", "Void property refresh", "Photos sent on completion"],
  },
  {
    slug: "exterior",
    title: "Garden & exterior",
    icon: Fence,
    summary: "Keep the outside as tidy as the inside — fences, gates, gutters and patios.",
    jobs: ["Fence panel repairs", "Gate fixing", "Gutter clearing", "Pressure washing"],
  },
];

export type Area = { name: string; postcode: string };

export const AREAS: Area[] = [
  { name: "Castle Bromwich", postcode: "B36" },
  { name: "Hodge Hill", postcode: "B36" },
  { name: "Bromford", postcode: "B36" },
  { name: "Shard End", postcode: "B34" },
  { name: "Stechford", postcode: "B33" },
  { name: "Castle Vale", postcode: "B35" },
  { name: "Chelmsley Wood", postcode: "B37" },
  { name: "Kingshurst", postcode: "B37" },
  { name: "Erdington", postcode: "B23 / B24" },
  { name: "Tyburn", postcode: "B24" },
  { name: "Ward End", postcode: "B8" },
  { name: "Washwood Heath", postcode: "B8" },
  { name: "Sutton Coldfield", postcode: "B72 / B73" },
  { name: "Minworth", postcode: "B76" },
  { name: "Water Orton", postcode: "B46" },
  { name: "Coleshill", postcode: "B46" },
];

export const PROMISES = [
  { title: "Clear price first", body: "You get a straight, fixed price before any work starts. No surprises on the bill." },
  { title: "On time, every time", body: "We turn up when we say we will — and let you know if anything changes." },
  { title: "Tidy & respectful", body: "Dust sheets down, mess cleared up, rubbish taken away when we leave." },
  { title: "Proper local", body: `Based in Castle Bromwich, so we're never far away when you need us.` },
];
