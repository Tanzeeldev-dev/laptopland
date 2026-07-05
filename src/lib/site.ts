// Centralised business info. Replace placeholders before launch.
export const SITE = {
  name: "City Tech Laptops",
  owner: "Muhammad Omair",
  tagline: "High Quality Laptops at Low Prices.",
  // International format, no plus sign (wa.me requirement)
  whatsapp: "923006674039", // [CITY TECH WHATSAPP]
  whatsappCatalogueId: "CATALOGUEID", // [WA CATALOGUE ID]
  phoneDisplay: "+92 300 6674039",
  phoneHref: "tel:+923006674039",
  city: "Yousuf Garden, Bahawalpur, Pakistan",
  hours: "Mon–Sat, 10am – 9pm",
};

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const waGeneral = () => waLink(`Hi ${SITE.name}`);

export const waProduct = (title: string, specs: string, price: string) =>
  waLink(`Hi ${SITE.name}, I'm interested in ${title} (${specs}) - ${price}. Is it available?`);

export const waCatalogue = () => `https://wa.me/c/${SITE.whatsappCatalogueId}`;
