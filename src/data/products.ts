import genericImg from "@/assets/laptop-generic.jpg";
import thinkpadImg from "@/assets/laptop-thinkpad.jpg";
import hpImg from "@/assets/laptop-hp.jpg";

export type Brand = "Dell" | "HP" | "Lenovo";

export interface Product {
  slug: string;
  title: string;
  brand: Brand;
  processor: string; // "i5" | "i7"
  generation: number; // 4, 6, 7, 8, 10, 11
  ram: number; // GB
  storage: number; // GB
  type: "Standard" | "Touch 2-in-1" | "Slim" | "Workstation";
  condition: "Refurbished / Used – Tested";
  price: number | null; // PKR, null = ask
  priceFrom?: number | null; // for variants
  display?: string;
  description: string;
  specs: { label: string; value: string }[];
  included: string[];
  image: string;
}

const img = (b: Brand) => (b === "Lenovo" ? thinkpadImg : b === "HP" ? hpImg : genericImg);

const base = (extra: string[] = []) => [
  "Cleaned & inspected",
  "Charger included",
  "Tested warranty card",
  ...extra,
];

export const products: Product[] = [
  {
    slug: "dell-latitude-7320-i7-11th-16gb-256gb",
    title: "Dell Latitude 7320 i7 11th Gen 16GB 256GB",
    brand: "Dell", processor: "i7", generation: 11, ram: 16, storage: 256,
    type: "Slim", condition: "Refurbished / Used – Tested", price: null,
    display: "13.3\" FHD",
    description: "Premium ultra-light business laptop with 11th Gen i7 power, 16GB RAM and fast NVMe SSD. Backlit keyboard and Type-C charging.",
    specs: [
      { label: "Processor", value: "Intel Core i7 11th Gen" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Display", value: "13.3\" FHD" },
      { label: "Keyboard", value: "Backlit" },
      { label: "Ports", value: "Type-C, USB-A, HDMI" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "dell-latitude-3410-i5-11th-8gb-256gb",
    title: "Dell Latitude 3410 i5 11th Gen 8GB 256GB",
    brand: "Dell", processor: "i5", generation: 11, ram: 8, storage: 256,
    type: "Standard", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" FHD 1080p",
    description: "Reliable 14\" business laptop with the latest 11th Gen i5 and Full HD display. Great everyday workhorse.",
    specs: [
      { label: "Processor", value: "Intel Core i5 11th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Display", value: "14\" FHD 1080p" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "hp-zbook-firefly-g8-i5-11th-8gb-256gb",
    title: "HP ZBook Firefly G8 i5 11th Gen 8GB 256GB",
    brand: "HP", processor: "i5", generation: 11, ram: 8, storage: 256,
    type: "Workstation", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" FHD",
    description: "Mobile workstation built for serious work. 11th Gen i5, NVMe SSD, RAM extendable for heavier workloads.",
    specs: [
      { label: "Processor", value: "Intel Core i5 11th Gen" },
      { label: "RAM", value: "8GB DDR4 (extendable)" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Class", value: "Workstation" },
    ],
    included: base(),
    image: img("HP"),
  },
  {
    slug: "dell-latitude-5310-2in1-touch-i5-10th-8gb-256gb",
    title: "Dell Latitude 5310 2-in-1 Touch 360 i5 10th Gen 8GB 256GB",
    brand: "Dell", processor: "i5", generation: 10, ram: 8, storage: 256,
    type: "Touch 2-in-1", condition: "Refurbished / Used – Tested", price: null,
    display: "13.3\" FHD Touch",
    description: "Flip 360° convertible with touchscreen, laptop, tent or tablet mode. Perfect for presentations and notes.",
    specs: [
      { label: "Processor", value: "Intel Core i5 10th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Display", value: "13.3\" FHD Touch (360°)" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "dell-latitude-5410-i5-10th-8gb-256gb",
    title: "Dell Latitude 5410 i5 10th Gen 8GB 256GB",
    brand: "Dell", processor: "i5", generation: 10, ram: 8, storage: 256,
    type: "Standard", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" HD",
    description: "Sleek silver Latitude with backlit keyboard, 10th Gen i5 and NVMe SSD. Solid daily driver.",
    specs: [
      { label: "Processor", value: "Intel Core i5 10th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Keyboard", value: "Backlit" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "lenovo-thinkpad-x280-i5-8th-8gb-128gb",
    title: "Lenovo ThinkPad X280 i5 8th Gen 8GB 128GB",
    brand: "Lenovo", processor: "i5", generation: 8, ram: 8, storage: 128,
    type: "Slim", condition: "Refurbished / Used – Tested", price: 38000,
    display: "12.5\" HD",
    description: "Compact, tough ThinkPad with Type-C charging, built for travel and long workdays.",
    specs: [
      { label: "Processor", value: "Intel Core i5 8th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "128GB NVMe SSD" },
      { label: "Ports", value: "Type-C" },
    ],
    included: base(),
    image: img("Lenovo"),
  },
  {
    slug: "hp-zbook-firefly-14-g8-i5-11th-8gb-256gb",
    title: "HP ZBook Firefly 14 G8 i5 11th Gen 8GB 256GB",
    brand: "HP", processor: "i5", generation: 11, ram: 8, storage: 256,
    type: "Workstation", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" FHD",
    description: "Power workstation with 11th Gen i5 2.60GHz, 3200MHz RAM and fast NVMe storage.",
    specs: [
      { label: "Processor", value: "Intel Core i5 11th Gen 2.60GHz" },
      { label: "RAM", value: "8GB DDR4 3200MHz" },
      { label: "Storage", value: "256GB NVMe SSD" },
    ],
    included: base(),
    image: img("HP"),
  },
  {
    slug: "dell-latitude-5400-i5-8th-8gb",
    title: "Dell Latitude 5400 i5 8th Gen 8GB",
    brand: "Dell", processor: "i5", generation: 8, ram: 8, storage: 128,
    type: "Standard", condition: "Refurbished / Used – Tested",
    price: null, priceFrom: 43000,
    display: "14\" HD",
    description: "Trusted Latitude with two storage options. 128GB at Rs. 43,000, 256GB available, ask on WhatsApp.",
    specs: [
      { label: "Processor", value: "Intel Core i5 8th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "128GB / 256GB SSD options" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "dell-latitude-5300-i5-8th-8gb-128gb",
    title: "Dell Latitude 5300 i5 8th Gen 8GB 128GB",
    brand: "Dell", processor: "i5", generation: 8, ram: 8, storage: 128,
    type: "Slim", condition: "Refurbished / Used – Tested", price: null,
    display: "13.3\" borderless",
    description: "Borderless 13\" display with backlit keyboard and fast NVMe storage. Premium build, portable size.",
    specs: [
      { label: "Processor", value: "Intel Core i5 8th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "128GB NVMe SSD" },
      { label: "Display", value: "13.3\" borderless" },
      { label: "Keyboard", value: "Backlit" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "hp-probook-440-g8-i5-11th-8gb-256gb",
    title: "HP ProBook 440 G8 i5 11th Gen 8GB 256GB",
    brand: "HP", processor: "i5", generation: 11, ram: 8, storage: 256,
    type: "Standard", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" FHD 1080p",
    description: "Latest-gen ProBook with backlit keyboard and Full HD display. Excellent for students and offices.",
    specs: [
      { label: "Processor", value: "Intel Core i5 11th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Display", value: "14\" FHD 1080p" },
      { label: "Keyboard", value: "Backlit" },
    ],
    included: base(),
    image: img("HP"),
  },
  {
    slug: "hp-probook-430-g7-i5-10th-8gb-256gb",
    title: "HP ProBook 430 G7 i5 10th Gen 8GB 256GB",
    brand: "HP", processor: "i5", generation: 10, ram: 8, storage: 256,
    type: "Slim", condition: "Refurbished / Used – Tested", price: null,
    display: "13.3\" FHD",
    description: "Compact 13\" ProBook, original condition, Full HD display, SSD storage.",
    specs: [
      { label: "Processor", value: "Intel Core i5 10th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Display", value: "13.3\" FHD 1080p" },
    ],
    included: base(),
    image: img("HP"),
  },
  {
    slug: "lenovo-thinkpad-x240-i5-4th-4gb-128gb",
    title: "Lenovo ThinkPad X240 i5 4th Gen 4GB 128GB",
    brand: "Lenovo", processor: "i5", generation: 4, ram: 4, storage: 128,
    type: "Slim", condition: "Refurbished / Used – Tested", price: null,
    display: "12.5\" HD",
    description: "Budget-friendly ThinkPad in 10/10 condition. Comes with original charger.",
    specs: [
      { label: "Processor", value: "Intel Core i5 4th Gen" },
      { label: "RAM", value: "4GB" },
      { label: "Storage", value: "128GB M.2 SSD" },
      { label: "Extras", value: "Original charger included" },
    ],
    included: base(["Original charger"]),
    image: img("Lenovo"),
  },
  {
    slug: "dell-latitude-7300-i5-8th-8gb",
    title: "Dell Latitude 7300 i5 8th Gen 8GB",
    brand: "Dell", processor: "i5", generation: 8, ram: 8, storage: 128,
    type: "Slim", condition: "Refurbished / Used – Tested", price: null,
    display: "13.3\" HD",
    description: "Premium 7-series Latitude, slim, light, with upgradable storage (128GB included, extendable to 256GB).",
    specs: [
      { label: "Processor", value: "Intel Core i5 8th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "128GB M.2 SSD (extendable to 256GB)" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "dell-latitude-5270-i5-6th-8gb-128gb",
    title: "Dell Latitude 5270 i5 6th Gen 8GB 128GB",
    brand: "Dell", processor: "i5", generation: 6, ram: 8, storage: 128,
    type: "Slim", condition: "Refurbished / Used – Tested", price: null,
    display: "12.5\" HD",
    description: "Compact, lightweight Latitude with backlit keyboard. Easy to carry every day.",
    specs: [
      { label: "Processor", value: "Intel Core i5 6th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "128GB M.2 SSD" },
      { label: "Keyboard", value: "Backlit" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "hp-probook-440-g7-i7-10th-8gb-256gb",
    title: "HP ProBook 440 G7 i7 10th Gen 8GB 256GB",
    brand: "HP", processor: "i7", generation: 10, ram: 8, storage: 256,
    type: "Standard", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" FHD",
    description: "i7 power in the proven ProBook chassis. Backlit keyboard, fingerprint reader, NVMe SSD.",
    specs: [
      { label: "Processor", value: "Intel Core i7 10th Gen" },
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Extras", value: "Backlit keyboard, fingerprint" },
    ],
    included: base(),
    image: img("HP"),
  },
  {
    slug: "hp-elitebook-840-g5-i5-7th-8gb-128gb",
    title: "HP EliteBook 840 G5 i5 7th Gen 8GB 128GB",
    brand: "HP", processor: "i5", generation: 7, ram: 8, storage: 128,
    type: "Standard", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" HD",
    description: "Premium EliteBook business build. Backlit keyboard, fast NVMe SSD.",
    specs: [
      { label: "Processor", value: "Intel Core i5 7th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "128GB NVMe SSD" },
      { label: "Keyboard", value: "Backlit" },
    ],
    included: base(),
    image: img("HP"),
  },
  {
    slug: "dell-latitude-7270-i5-6th-8gb-128gb",
    title: "Dell Latitude 7270 i5 6th Gen 8GB 128GB",
    brand: "Dell", processor: "i5", generation: 6, ram: 8, storage: 128,
    type: "Slim", condition: "Refurbished / Used – Tested", price: 36000,
    display: "12.5\" HD",
    description: "Premium 7-series build at a budget price. Backlit keyboard and fast SSD storage.",
    specs: [
      { label: "Processor", value: "Intel Core i5 6th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "128GB M.2 SSD" },
      { label: "Keyboard", value: "Backlit" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "dell-latitude-7410-slim-i7-10th-16gb-256gb",
    title: "Dell Latitude 7410 Slim i7 10th Gen 16GB 256GB",
    brand: "Dell", processor: "i7", generation: 10, ram: 16, storage: 256,
    type: "Slim", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" FHD",
    description: "Top-tier slim i7 Latitude with 16GB RAM, multitasking and demanding apps with ease.",
    specs: [
      { label: "Processor", value: "Intel Core i7 10th Gen" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Keyboard", value: "Backlit" },
    ],
    included: base(),
    image: img("Dell"),
  },
  {
    slug: "hp-probook-440-g7-i5-10th-8gb-256gb",
    title: "HP ProBook 440 G7 i5 10th Gen 8GB 256GB",
    brand: "HP", processor: "i5", generation: 10, ram: 8, storage: 256,
    type: "Standard", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" FHD",
    description: "Reliable ProBook G7 with backlit keyboard and NVMe SSD.",
    specs: [
      { label: "Processor", value: "Intel Core i5 10th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Keyboard", value: "Backlit" },
    ],
    included: base(),
    image: img("HP"),
  },
  {
    slug: "hp-elitebook-840-g7-i5-10th-8gb-256gb",
    title: "HP EliteBook 840 G7 i5 10th Gen 8GB 256GB",
    brand: "HP", processor: "i5", generation: 10, ram: 8, storage: 256,
    type: "Standard", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" FHD",
    description: "Original-condition EliteBook with backlit keyboard, fingerprint reader and fast NVMe storage.",
    specs: [
      { label: "Processor", value: "Intel Core i5 10th Gen" },
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "256GB NVMe SSD" },
      { label: "Extras", value: "Backlit keyboard, fingerprint" },
    ],
    included: base(),
    image: img("HP"),
  },
  {
    slug: "hp-probook-440-g5-i5-8th-8gb-256gb",
    title: "HP ProBook 440 G5 i5 8th Gen 8GB 256GB",
    brand: "HP", processor: "i5", generation: 8, ram: 8, storage: 256,
    type: "Standard", condition: "Refurbished / Used – Tested", price: null,
    display: "14\" HD",
    description: "Solid 14\" ProBook with 8th Gen i5 and NVMe SSD. Dependable business machine.",
    specs: [
      { label: "Processor", value: "Intel Core i5 8th Gen" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "256GB NVMe SSD" },
    ],
    included: base(),
    image: img("HP"),
  },
];

export const getBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const byBrand = (b: Brand) => products.filter((p) => p.brand === b);
export const allSlugs = () => products.map((p) => p.slug);

export const formatPKR = (n: number) =>
  "Rs. " + new Intl.NumberFormat("en-PK").format(n);

export const displayPrice = (p: Product) => {
  if (p.price != null) return formatPKR(p.price);
  if (p.priceFrom != null) return "from " + formatPKR(p.priceFrom);
  return "Ask on WhatsApp for price";
};
