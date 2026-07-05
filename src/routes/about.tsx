import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutMeSection } from "@/components/AboutMeSection";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waGeneral, SITE } from "@/lib/site";
import { ShieldCheck, Wrench, CheckCircle2, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About City Tech Laptops | Trusted Laptop Store Pakistan" },
      { name: "description", content: "City Tech Laptops, run by Omair, supplies quality refurbished business laptops across Pakistan. Tested, cleaned and backed by warranty." },
      { property: "og:title", content: "About City Tech Laptops" },
      { property: "og:description", content: "Run by Omair, quality refurbished Dell, HP and Lenovo business laptops across Pakistan." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <span className="chip !bg-white/10 !text-white/80 !border-white/20">About us</span>
          <h1 className="font-display font-bold text-3xl md:text-5xl mt-4">About {SITE.name}</h1>
          <p className="mt-4 text-white/75 text-lg max-w-3xl">
            Run by {SITE.owner}, City Tech Laptops supplies quality imported and refurbished business laptops to customers, students and professionals across Pakistan. Every unit is inspected, cleaned and tested before sale.
          </p>
        </div>
      </section>

      <AboutMeSection variant="page" />

      <section className="mx-auto max-w-5xl px-4 py-14 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display font-bold text-2xl text-ink">Our story</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We started City Tech Laptops with a simple promise: deliver genuine business laptops at honest prices, with the kind of after-sales support people can actually rely on. Today, we ship tested Dell Latitudes, HP ProBooks/EliteBooks/ZBooks and Lenovo ThinkPads to customers across Pakistan.
          </p>
        </div>
        <div>
          <h2 className="font-display font-bold text-2xl text-ink">Why business-grade?</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Dell Latitude, HP EliteBook and Lenovo ThinkPad are built to last, military-grade durability, full-size keyboards and serviceable components. That's why they hold up so well as refurbished units.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="font-display font-bold text-2xl text-ink">How we test & grade every laptop</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              { i: Wrench, t: "Full hardware check", d: "Battery, screen, keyboard, ports, speakers, everything tested before listing." },
              { i: ShieldCheck, t: "Cleaning & inspection", d: "Cleaned inside and out, thermal paste replaced where needed." },
              { i: Award, t: "Genuine specs verified", d: "We confirm processor, RAM, storage and serial, no fake claims." },
              { i: CheckCircle2, t: "Pre-shipment QA", d: "Final benchmark run before packing and dispatch." },
            ].map((f) => (
              <div key={f.t} className="rounded-xl border border-border p-5 bg-card">
                <f.i className="h-5 w-5 text-primary" />
                <h3 className="mt-2 font-display font-semibold text-ink">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="font-display font-bold text-2xl text-ink">Our promise</h2>
        <ul className="mt-5 grid sm:grid-cols-2 gap-3">
          {["Genuine specs", "Fair prices", "Warranty on every laptop", "Honest, responsive support"].map((p) => (
            <li key={p} className="flex items-center gap-2 text-foreground"><CheckCircle2 className="h-5 w-5 text-primary" /> {p}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waGeneral()} target="_blank" rel="noopener" className="btn-wa">
            <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
          </a>
          <Link to="/laptops" className="btn-outline-blue">Browse Laptops</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
