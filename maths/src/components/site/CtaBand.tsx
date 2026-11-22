import { ContactButtons } from "./ContactButtons";

export function CtaBand({
  title = "Got a job that needs doing?",
  body = "Send us a photo on WhatsApp or give us a ring. We'll give you a clear price and a time that suits you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-site flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg font-medium">{body}</p>
        </div>
        <div className="[&_a]:shadow-block">
          <ContactButtons />
        </div>
      </div>
    </section>
  );
}
