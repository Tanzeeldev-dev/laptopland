import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCard } from "@/components/ProductCard";
import { products, type Brand, type Product } from "@/data/products";
import { Search } from "lucide-react";

export const Route = createFileRoute("/laptops/")({
  head: () => ({
    meta: [
      { title: "Shop Refurbished Laptops | City Tech Laptops" },
      { name: "description", content: "Browse refurbished Dell, HP and Lenovo business laptops with full specs and prices. Filter by brand, processor, RAM and budget. Order on WhatsApp." },
      { property: "og:title", content: "Shop Refurbished Laptops | City Tech Laptops" },
      { property: "og:description", content: "Filter by brand, processor, RAM and budget. Order on WhatsApp." },
      { property: "og:url", content: "/laptops" },
    ],
    links: [{ rel: "canonical", href: "/laptops" }],
  }),
  component: Shop,
});

export interface ShopProps {
  brand?: Brand;
  intro?: { title: string; lead: string };
}

export function Shop({ brand, intro }: ShopProps = {}) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [brandSel, setBrand] = useState<Brand | "All">(brand ?? "All");
  const [proc, setProc] = useState<"All" | "i5" | "i7">("All");
  const [ram, setRam] = useState<"All" | 4 | 8 | 16>("All");
  const [storage, setStorage] = useState<"All" | 128 | 256>("All");
  const [sort, setSort] = useState<"newest" | "price-asc" | "price-desc">("newest");

  const filtered = useMemo(() => {
    let list: Product[] = products;
    if (brand) list = list.filter((p) => p.brand === brand);
    if (brandSel !== "All") list = list.filter((p) => p.brand === brandSel);
    if (proc !== "All") list = list.filter((p) => p.processor === proc);
    if (ram !== "All") list = list.filter((p) => p.ram === ram);
    if (storage !== "All") list = list.filter((p) => p.storage === storage);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter((p) =>
        (p.title + " " + p.specs.map((x) => x.value).join(" ")).toLowerCase().includes(s)
      );
    }
    if (sort === "price-asc") {
      list = [...list].sort((a, b) => (a.price ?? a.priceFrom ?? 9e9) - (b.price ?? b.priceFrom ?? 9e9));
    } else if (sort === "price-desc") {
      list = [...list].sort((a, b) => (b.price ?? b.priceFrom ?? -1) - (a.price ?? a.priceFrom ?? -1));
    }
    return list;
  }, [q, brandSel, proc, ram, storage, sort, brand]);

  return (
    <SiteLayout>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <nav className="text-xs text-muted-foreground mb-3">
            <button onClick={() => navigate({ to: "/" })} className="hover:text-foreground">Home</button>
            <span className="mx-1.5">/</span>
            <span className="text-foreground">{intro?.title ?? "All Laptops"}</span>
          </nav>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink">{intro?.title ?? "All Laptops"}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">{intro?.lead ?? "Tested Dell, HP and Lenovo business laptops. Filter by brand, processor, RAM and storage."}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 grid lg:grid-cols-[260px_1fr] gap-8">
        {/* Filters */}
        <aside className="lg:sticky lg:top-20 lg:self-start space-y-5">
          <div>
            <label className="text-xs font-semibold text-ink uppercase tracking-wider">Search</label>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Model or spec…"
                className="w-full rounded-lg border border-border bg-card pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>
          {!brand && (
            <FilterGroup label="Brand" value={brandSel} setValue={setBrand as (v: string) => void} options={["All", "Dell", "HP", "Lenovo"]} />
          )}
          <FilterGroup label="Processor" value={proc} setValue={setProc as (v: string) => void} options={["All", "i5", "i7"]} />
          <FilterGroup label="RAM" value={String(ram)} setValue={(v) => setRam(v === "All" ? "All" : (Number(v) as 4 | 8 | 16))} options={["All", "4", "8", "16"]} suffix="GB" />
          <FilterGroup label="Storage" value={String(storage)} setValue={(v) => setStorage(v === "All" ? "All" : (Number(v) as 128 | 256))} options={["All", "128", "256"]} suffix="GB" />
        </aside>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="text-sm text-muted-foreground">{filtered.length} laptop{filtered.length !== 1 && "s"}</div>
            <label className="text-sm flex items-center gap-2">
              <span className="text-muted-foreground">Sort:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </label>
          </div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
              No laptops match your filters. Try clearing some filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((p) => <ProductCard key={p.slug} p={p} />)}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function FilterGroup({ label, value, setValue, options, suffix }: {
  label: string; value: string; setValue: (v: string) => void; options: string[]; suffix?: string;
}) {
  return (
    <div>
      <div className="text-xs font-semibold text-ink uppercase tracking-wider">{label}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => setValue(o)}
              className={
                "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors " +
                (active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary/40")
              }
            >
              {o === "All" ? "All" : `${o}${suffix ?? ""}`}
            </button>
          );
        })}
      </div>
    </div>
  );
}
