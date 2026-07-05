import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE, waLink, waGeneral } from "@/lib/site";
import { Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact City Tech Laptops | WhatsApp & Phone" },
      { name: "description", content: "Get in touch with City Tech Laptops on WhatsApp or phone. We answer fast and help you pick the right business laptop." },
      { property: "og:title", content: "Contact City Tech Laptops" },
      { property: "og:description", content: "WhatsApp, call or send us a quick message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", laptop: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi ${SITE.name}, my name is ${form.name}. Phone: ${form.phone}. I'm interested in: ${form.laptop}. ${form.message}`;
    window.open(waLink(text), "_blank");
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h1 className="font-display font-bold text-3xl md:text-5xl">Get In Touch.</h1>
          <p className="mt-4 text-white/75 max-w-xl">Fastest way to reach us is WhatsApp, we usually reply within minutes during business hours.</p>
          <a href={waGeneral()} target="_blank" rel="noopener" className="btn-wa mt-6 !text-base !py-3 !px-5">
            <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display font-bold text-2xl text-ink">Contact details</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3"><WhatsAppIcon className="h-5 w-5 mt-0.5 text-wa-dark" />
              <div>
                <div className="font-semibold text-ink">WhatsApp</div>
                <a href={waGeneral()} target="_blank" rel="noopener" className="text-primary hover:underline">Message us on WhatsApp</a>
              </div>
            </li>
            <li className="flex items-start gap-3"><Phone className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-semibold text-ink">Phone</div>
                <a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phoneDisplay}</a>
              </div>
            </li>
            <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-semibold text-ink">Location</div>
                <div className="text-muted-foreground">{SITE.city}</div>
              </div>
            </li>
            <li className="flex items-start gap-3"><Clock className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-semibold text-ink">Business hours</div>
                <div className="text-muted-foreground">{SITE.hours}</div>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <h2 className="font-display font-bold text-xl text-ink">Send a quick message</h2>
          <div className="grid gap-3">
            <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required type="tel" />
            <Field label="Laptop you're interested in" value={form.laptop} onChange={(v) => setForm({ ...form, laptop: v })} placeholder="e.g. Dell Latitude 5410" />
            <label className="text-sm">
              <span className="font-medium text-ink">Message</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
          </div>
          <button type="submit" className="btn-wa w-full">
            <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
          </button>
          {sent && <p className="text-sm text-wa-dark">Opening WhatsApp… If nothing happened, tap the green button above.</p>}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, value, onChange, required, type = "text", placeholder }: {
  label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string; placeholder?: string;
}) {
  return (
    <label className="text-sm block">
      <span className="font-medium text-ink">{label}{required && <span className="text-destructive"> *</span>}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </label>
  );
}
