import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { products, getBySlug, displayPrice } from "@/data/products";
import { SITE, waProduct } from "@/lib/site";
import { CheckCircle2, ShieldCheck, Truck, Wallet, Phone } from "lucide-react";

export const Route = createFileRoute("/laptops/$slug")({
  loader: ({ params }) => {
    const product = getBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    const title = p ? `${p.title} | Price in Pakistan | City Tech Laptops` : "Laptop | City Tech Laptops";
    const desc = p
      ? `${p.title}, ${displayPrice(p)}. Refurbished, tested with warranty. Cash on Delivery across Pakistan. Order on WhatsApp.`
      : "Refurbished business laptop with warranty and Cash on Delivery.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/laptops/${params.slug}` },
        { property: "og:image", content: p?.image ?? "" },
      ],
      links: [{ rel: "canonical", href: `/laptops/${params.slug}` }],
      scripts: p ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.title,
          brand: { "@type": "Brand", name: p.brand },
          description: p.description,
          itemCondition: "https://schema.org/RefurbishedCondition",
          offers: {
            "@type": "Offer",
            priceCurrency: "PKR",
            price: p.price ?? p.priceFrom ?? undefined,
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: SITE.name },
          },
        }),
      }] : [],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display font-bold text-3xl text-ink">Laptop not found</h1>
        <p className="text-muted-foreground mt-2">This product is unavailable or has been moved.</p>
        <Link to="/laptops" className="btn-blue mt-6">Browse all laptops</Link>
      </div>
    </SiteLayout>
  ),
});

function ProductPage() {
  const { product: p } = Route.useLoaderData() as { product: import("@/data/products").Product };
  const price = displayPrice(p);
  const specsShort = `${p.processor.toUpperCase()} ${p.generation}th Gen, ${p.ram}GB, ${p.storage}GB SSD`;
  const wa = waProduct(p.title, specsShort, price);

  const related = products
    .filter((x) => x.slug !== p.slug && x.brand === p.brand)
    .slice(0, 4);

  return (
    <SiteLayout mobileBar={{ waHref: wa, label: `Order ${price}` }}>
      <div className="mx-auto max-w-7xl px-4 py-6">
        <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">/</span>
          <Link to="/laptops" className="hover:text-foreground">Laptops</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">{p.title}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 pb-12">
        {/* Gallery */}
        <div>
          <div className="rounded-2xl bg-surface border border-border overflow-hidden aspect-[4/3] grid place-items-center">
            <img src={p.image} alt={p.title} width={1200} height={900} className="h-full w-full object-contain p-6" />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[p.image, p.image, p.image, p.image].map((src, i) => (
              <div key={i} className="rounded-lg border border-border bg-surface aspect-square overflow-hidden">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-contain p-1.5" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <span className="chip">{p.condition}</span>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-ink mt-3 leading-tight">{p.title}</h1>
          <div className="mt-4 text-3xl md:text-4xl font-display font-bold text-primary">{price}</div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            <span className="chip">{p.processor.toUpperCase()} · Gen {p.generation}</span>
            <span className="chip">{p.ram}GB RAM</span>
            <span className="chip">{p.storage}GB SSD</span>
            {p.display && <span className="chip">{p.display}</span>}
            <span className="chip">{p.type}</span>
          </div>

          <p className="mt-5 text-muted-foreground leading-relaxed">{p.description}</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {[
              { i: CheckCircle2, t: "Tested" },
              { i: ShieldCheck, t: "Warranty" },
              { i: Wallet, t: "COD" },
              { i: Truck, t: "Pakistan-wide" },
            ].map((b) => (
              <div key={b.t} className="rounded-lg border border-border p-2.5 bg-card flex items-center gap-2">
                <b.i className="h-4 w-4 text-primary" /> <span className="font-medium">{b.t}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-[1fr_auto] gap-3">
            <a href={wa} target="_blank" rel="noopener" className="btn-wa !text-base !py-3">
              <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
            </a>
            <a href={SITE.phoneHref} className="btn-outline-blue !text-base !py-3 !px-4" aria-label="Call us">
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Specs table */}
          <div className="mt-8">
            <h2 className="font-display font-semibold text-lg text-ink">Full specifications</h2>
            <table className="mt-3 w-full text-sm border border-border rounded-lg overflow-hidden">
              <tbody>
                {p.specs.map((s, i) => (
                  <tr key={s.label} className={i % 2 ? "bg-surface" : "bg-card"}>
                    <th className="text-left font-medium text-muted-foreground px-3 py-2.5 w-1/3">{s.label}</th>
                    <td className="px-3 py-2.5 text-foreground">{s.value}</td>
                  </tr>
                ))}
                <tr className="bg-surface">
                  <th className="text-left font-medium text-muted-foreground px-3 py-2.5">Condition</th>
                  <td className="px-3 py-2.5">{p.condition}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Included */}
          <div className="mt-7">
            <h2 className="font-display font-semibold text-lg text-ink">What's included</h2>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
              {p.included.map((i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <h2 className="font-display font-bold text-2xl text-ink">More {p.brand} laptops</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => <ProductCard key={r.slug} p={r} />)}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
