import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutMeSection } from "@/components/AboutMeSection";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { products } from "@/data/products";
import { waGeneral, SITE } from "@/lib/site";
import { CheckCircle2, ShieldCheck, Truck, Wallet, Wrench, MessageCircle, GraduationCap, Briefcase, Code2, Video, HardDrive, Headphones, MapPin, Package, Banknote } from "lucide-react";
import heroImg from "@/assets/hero-laptop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "City Tech Laptops | Refurbished Business Laptops in Pakistan" },
      { name: "description", content: "Buy quality refurbished Dell, HP and Lenovo business laptops in Pakistan. Tested units, warranty, cash on delivery. Order on WhatsApp from City Tech Laptops." },
      { property: "og:title", content: "City Tech Laptops | Refurbished Business Laptops in Pakistan" },
      { property: "og:description", content: "Tested Dell, HP and Lenovo business laptops with warranty and Cash on Delivery." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trustChips = [
  "Tested & cleaned",
  "Warranty included",
  "Cash on Delivery",
  "Nationwide delivery",
];

const brandCards = [
  { brand: "Dell", to: "/laptops/dell" as const, tagline: "Latitude, durable & reliable" },
  { brand: "HP", to: "/laptops/hp" as const, tagline: "ProBook · EliteBook · ZBook" },
  { brand: "Lenovo", to: "/laptops/lenovo" as const, tagline: "ThinkPad, built to last" },
];

const budgetCards = [
  { label: "Under Rs. 40,000", to: "/laptops" as const, hint: "Best value picks" },
  { label: "Rs. 40k – 60k", to: "/laptops" as const, hint: "Sweet-spot specs" },
  { label: "Premium i7", to: "/laptops" as const, hint: "Power & multitasking" },
  { label: "2-in-1 Touch", to: "/laptops" as const, hint: "Flip & touchscreen" },
];

const why = [
  { icon: Wrench, title: "Every unit tested & cleaned", text: "We inspect, clean and benchmark every laptop before it leaves the shop." },
  { icon: CheckCircle2, title: "Genuine specs, no fake claims", text: "What you read is what you get. We list exact processor, RAM and storage." },
  { icon: ShieldCheck, title: "Warranty on every laptop", text: "Buy with confidence, every unit is backed by our standard warranty." },
  { icon: Wallet, title: "Cash on Delivery available", text: "Pay when your laptop arrives. We accept COD across most of Pakistan." },
  { icon: Truck, title: "Fast nationwide delivery", text: "Tracked shipping to your door, anywhere in Pakistan." },
  { icon: MessageCircle, title: "Honest after-sales support", text: "Real help on WhatsApp from Muhammad Omair's team, before and after you buy." },
];

const useCaseCards = [
  { icon: GraduationCap, title: "Students", text: "Affordable i5 laptops for classes, research and everyday study.", to: "/laptops" as const },
  { icon: Briefcase, title: "Office & Business", text: "Reliable Dell Latitude and HP ProBook for daily office work.", to: "/laptops/dell" as const },
  { icon: Code2, title: "Freelancers", text: "Solid specs for coding, design tools and client projects.", to: "/laptops/lenovo" as const },
  { icon: Video, title: "Online Classes", text: "Smooth video calls, multitasking and long battery life.", to: "/laptops/hp" as const },
];

const serviceCards = [
  { icon: Wrench, title: "Full testing & cleaning", text: "Screen, keyboard, battery, ports and performance checked on every unit." },
  { icon: ShieldCheck, title: "Warranty on every laptop", text: "Each laptop ships with a tested warranty card for peace of mind." },
  { icon: HardDrive, title: "RAM & SSD upgrades", text: "Need more storage or memory? Ask us on WhatsApp before you order." },
  { icon: Headphones, title: "After-sales support", text: "Message Muhammad Omair's team anytime for help, advice or warranty claims." },
];

const deliveryPoints = [
  { icon: MapPin, title: "Nationwide delivery", text: "Lahore, Karachi, Islamabad and cities across Pakistan." },
  { icon: Wallet, title: "Cash on Delivery", text: "Pay when your laptop arrives. Inspect it first, then pay." },
  { icon: Banknote, title: "Bank transfer", text: "Advance payment option for faster dispatch." },
  { icon: Package, title: "Safe packaging", text: "Secure box, bubble wrap and tracked courier shipping." },
];

function Home() {
  const featured = products.slice(0, 8);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden min-h-[26rem] sm:min-h-[30rem] md:min-h-[34rem] flex items-center">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={1200}
            className="absolute inset-0 h-full w-full object-contain object-center md:object-cover md:object-[center_35%] opacity-45 md:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55 md:bg-gradient-to-r md:from-ink md:via-ink/85 md:to-ink/15" />
        </div>
        <div className="relative mx-auto max-w-7xl w-full px-4 py-10 sm:py-14 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
          <div>
            <span className="chip !bg-white/10 !text-white/80 !border-white/20 text-[0.68rem] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-tech" /> Pakistan-wide delivery
            </span>
            <h1 className="mt-3 sm:mt-4 font-display font-bold text-[1.5rem] leading-[1.12] sm:text-[1.875rem] md:text-5xl lg:text-6xl md:leading-[1.05]">
              Quality Business Laptops <span className="text-cyan-tech">At The Best Prices</span> In Pakistan.
            </h1>
            <p className="mt-4 sm:mt-5 text-white/75 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Tested, reliable Dell, HP and Lenovo laptops, with warranty, cash on delivery and fast nationwide shipping.
            </p>
            <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
              <a href={waGeneral()} target="_blank" rel="noopener" className="btn-wa w-full sm:w-auto justify-center text-sm sm:text-base">
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> Order on WhatsApp
              </a>
              <Link to="/laptops" className="btn-outline-blue w-full sm:w-auto justify-center !text-white !border-white/30 hover:!bg-white hover:!text-ink text-sm sm:text-base">
                Shop Laptops
              </Link>
            </div>
            <ul className="mt-6 sm:mt-8 flex flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm text-white/80">
              {trustChips.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-tech shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SHOP BY BRAND */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <SectionHeader eyebrow="Browse" title="Shop by brand" subtitle="Trusted business-grade lines from Dell, HP and Lenovo." />
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {brandCards.map((b) => (
            <Link
              key={b.brand}
              to={b.to}
              className="card-lift rounded-xl border border-border bg-card p-6 flex items-center justify-between"
            >
              <div>
                <div className="font-display font-bold text-2xl text-ink">{b.brand}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.tagline}</div>
              </div>
              <span className="text-primary font-semibold text-sm">View →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SHOP BY BUDGET */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <SectionHeader eyebrow="Find your fit" title="Shop by budget & use" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {budgetCards.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="card-lift rounded-xl bg-card border border-border p-5"
              >
                <div className="font-display font-semibold text-ink">{c.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.hint}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeader eyebrow="Hand-picked" title="Featured laptops" />
          <Link to="/laptops" className="text-primary font-semibold text-sm hover:underline">View all laptops →</Link>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* ABOUT ME */}
      <AboutMeSection variant="home" />

      {/* SHOP BY USE CASE */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <SectionHeader eyebrow="Find your match" title="Shop by use case" subtitle="Pick the right laptop for how you actually work and study." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {useCaseCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="card-lift rounded-xl border border-border bg-card p-5 flex flex-col"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-semibold text-ink">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed flex-1">{c.text}</p>
              <span className="mt-4 text-primary font-semibold text-sm">Browse →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <SectionHeader eyebrow="What we do" title="Our services" subtitle="More than just selling laptops. We test, support and stand behind every unit." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {serviceCards.map((s) => (
              <div key={s.title} className="rounded-xl bg-card border border-border p-5">
                <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display font-semibold text-ink">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={waGeneral()} target="_blank" rel="noopener" className="btn-wa text-sm sm:text-base">
              <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" /> Ask about upgrades or warranty
            </a>
          </div>
        </div>
      </section>

      {/* DELIVERY & PAYMENT */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <SectionHeader eyebrow="Safe & simple" title="Delivery & payment" subtitle={`Based in ${SITE.city}. We ship laptops across Pakistan with flexible payment options.`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {deliveryPoints.map((d) => (
            <div key={d.title} className="rounded-xl border border-border bg-card p-5">
              <div className="h-10 w-10 rounded-lg bg-cyan-tech/20 grid place-items-center text-ink">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-semibold text-ink">{d.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { value: "100+", label: "Happy customers" },
            { value: "1–3 days", label: "Typical delivery" },
            { value: "COD", label: "Cash on delivery" },
            { value: "3 brands", label: "Dell · HP · Lenovo" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-surface border border-border p-4 text-center">
              <div className="font-display font-bold text-xl sm:text-2xl text-primary">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
          <Link to="/how-to-order" className="btn-outline-blue w-full sm:w-auto justify-center text-sm sm:text-base">How to order</Link>
          <Link to="/contact" className="btn-blue w-full sm:w-auto justify-center text-sm sm:text-base">Contact us</Link>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <SectionHeader eyebrow="Why City Tech" title="Why customers buy from us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {why.map((w) => (
              <div key={w.title} className="rounded-xl bg-card border border-border p-5">
                <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center text-primary">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display font-semibold text-ink">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <SectionHeader eyebrow="Simple & safe" title="How to order" />
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { n: "1", t: "Browse laptops", d: "Pick a laptop that matches your budget and specs." },
            { n: "2", t: "Message us on WhatsApp", d: "We'll confirm availability and answer any question." },
            { n: "3", t: "Pay on delivery or shipped", d: "Cash on Delivery or bank transfer, across Pakistan." },
          ].map((s) => (
            <div key={s.n} className="rounded-xl border border-border p-6 bg-card">
              <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground font-display font-bold grid place-items-center">{s.n}</div>
              <h3 className="mt-3 font-display font-semibold text-ink">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <SectionHeader eyebrow="Real customers" title="What buyers say" subtitle="Replaceable placeholders. Swap with real reviews." />
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { q: "Got my ThinkPad in 2 days. Tested, clean, exactly as described.", a: "Hassan, Lahore" },
              { q: "Honest specs, fair price, and Omar answered every question on WhatsApp.", a: "Aisha, Karachi" },
              { q: "Smooth COD experience. Laptop works great for office use.", a: "Bilal, Islamabad" },
            ].map((t, i) => (
              <figure key={i} className="rounded-xl bg-card border border-border p-5">
                <blockquote className="text-sm text-foreground leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-3 text-xs text-muted-foreground">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 grid md:grid-cols-[1.4fr_auto] gap-5 sm:gap-6 items-center">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl">Ready to find your laptop?</h2>
            <p className="text-white/75 mt-2 text-sm sm:text-base">Message us on WhatsApp and we'll help you pick the right one for your budget.</p>
          </div>
          <a href={waGeneral()} target="_blank" rel="noopener" className="btn-wa w-full md:w-auto justify-center !text-sm sm:!text-base !py-3 !px-5">
            <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <SectionHeader eyebrow="FAQ" title="Common questions" />
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {[
            { q: "Are the laptops new or refurbished?", a: "All laptops are imported refurbished business units, fully tested, cleaned and backed by warranty." },
            { q: "Do you offer Cash on Delivery?", a: "Yes, COD is available across most of Pakistan. Bank transfer is also accepted." },
            { q: "How long is the warranty?", a: "Every laptop comes with a tested warranty card. Contact us on WhatsApp for the latest terms." },
            { q: "Can I check the laptop before paying?", a: "Yes, you can inspect the laptop on delivery before completing payment." },
          ].map((f) => (
            <div key={f.q} className="rounded-xl border border-border p-5 bg-card">
              <h3 className="font-display font-semibold text-ink">{f.q}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <div className="text-[0.68rem] sm:text-xs uppercase tracking-[0.18em] text-primary font-semibold">{eyebrow}</div>}
      <h2 className="mt-2 font-display font-bold text-xl sm:text-2xl md:text-3xl text-ink">{title}</h2>
      {subtitle && <p className="text-sm sm:text-base text-muted-foreground mt-2">{subtitle}</p>}
    </div>
  );
}
