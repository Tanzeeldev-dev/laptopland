import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waGeneral } from "@/lib/site";

export const Route = createFileRoute("/how-to-order")({
  head: () => ({
    meta: [
      { title: "How to Order | City Tech Laptops" },
      { name: "description", content: "How to order a laptop from City Tech Laptops: browse, message on WhatsApp, choose delivery and pay via Cash on Delivery or bank transfer." },
      { property: "og:title", content: "How to Order from City Tech Laptops" },
      { property: "og:description", content: "Simple, safe steps, order on WhatsApp, pay on delivery." },
      { property: "og:url", content: "/how-to-order" },
    ],
    links: [{ rel: "canonical", href: "/how-to-order" }],
  }),
  component: HowToOrder,
});

const steps = [
  { n: "1", t: "Browse & pick a laptop", d: "Choose your model from our catalogue with full specs and price." },
  { n: "2", t: "Tap \"Order on WhatsApp\"", d: "We'll confirm availability and answer any spec questions." },
  { n: "3", t: "Choose delivery or pickup", d: "Pakistan-wide delivery, or pickup if you're nearby." },
  { n: "4", t: "Pay via COD or bank transfer", d: "Cash on Delivery available across most of Pakistan." },
  { n: "5", t: "Receive your tested laptop", d: "With its tested warranty card and original charger." },
];

function HowToOrder() {
  return (
    <SiteLayout>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h1 className="font-display font-bold text-3xl md:text-5xl">How to Order. Simple & Safe.</h1>
          <p className="mt-4 text-white/75 max-w-2xl">From browsing to delivery, here's exactly how it works.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 grid gap-4">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-4 rounded-xl border border-border p-5 bg-card">
            <div className="h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground font-display font-bold grid place-items-center">{s.n}</div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-ink">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border p-5 bg-card">
            <h3 className="font-display font-semibold text-ink">Payment</h3>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1.5">
              <li>• Cash on Delivery (most cities)</li>
              <li>• Bank transfer (advance)</li>
              <li>• Prices fixed, no hidden charges</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 bg-card">
            <h3 className="font-display font-semibold text-ink">Delivery</h3>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1.5">
              <li>• Pakistan-wide tracked shipping</li>
              <li>• Usually 1–3 working days</li>
              <li>• Inspect on delivery before paying (COD)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 bg-card md:col-span-2">
            <h3 className="font-display font-semibold text-ink">Warranty & Returns</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every laptop ships with a tested warranty card. If a unit develops an issue covered by warranty, message us on WhatsApp and we'll arrange a repair or replacement. <span className="text-foreground">[Confirm exact warranty terms]</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <a href={waGeneral()} target="_blank" rel="noopener" className="btn-wa !text-base !py-3 !px-5">
          <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
        </a>
      </section>
    </SiteLayout>
  );
}
