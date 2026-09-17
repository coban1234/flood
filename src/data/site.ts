/** Brand and origin live here — templates read these, they do not hardcode the name. */
export const brand = {
  shortName: "Calder",
  name: "Calder Restoration",
  domain: "calderrestoration.com",
  caDomain: "calderrestoration.ca",
  origin: "https://calderrestoration.com",
} as const;

export const vancouver = {
  slug: "vancouver",
  country: "CA" as const,
  locale: "en-CA",
  currency: "CAD",
  name: "Metro Vancouver",
  shortName: "Vancouver",
  path: "/ca/vancouver",
  phoneDisplay: "(604) 968-5835",
  phoneTel: "+16049685835",
  hours: "24/7",
  addressLine: "1201-888 Homer St, Vancouver, BC V6B 0H7",
  streetAddress: "1201-888 Homer St",
  postalCode: "V6B 0H7",
  licences: "WorkSafeBC #[CLIENT] · Business licence #[CLIENT]",
  certifications: "IICRC #[CLIENT]",
  insurance: "Liability and pollution coverage [CLIENT]",
  legalEntity: "[CLIENT — legal entity]",
  status: "live" as const,
  region: "Canada",
};

export const usMarkets = [
  { slug: "new-york", name: "New York City", shortName: "New York", region: "Northeast", status: "next" as const },
  { slug: "seattle", name: "Seattle", shortName: "Seattle", region: "Pacific Northwest", status: "planned" as const },
  { slug: "portland", name: "Portland", shortName: "Portland", region: "Pacific Northwest", status: "planned" as const },
  { slug: "boston", name: "Boston", shortName: "Boston", region: "Northeast", status: "planned" as const },
  { slug: "philadelphia", name: "Philadelphia", shortName: "Philadelphia", region: "Northeast", status: "planned" as const },
  { slug: "chicago", name: "Chicago", shortName: "Chicago", region: "Midwest", status: "planned" as const },
  { slug: "houston", name: "Houston", shortName: "Houston", region: "South", status: "planned" as const },
  { slug: "dallas", name: "Dallas–Fort Worth", shortName: "Dallas–Fort Worth", region: "South", status: "planned" as const },
  { slug: "tampa", name: "Tampa", shortName: "Tampa", region: "South", status: "planned" as const },
  { slug: "nashville", name: "Nashville", shortName: "Nashville", region: "South", status: "planned" as const },
] as const;

export type UsMarket = (typeof usMarkets)[number];

export function getUsMarket(slug: string) {
  return usMarkets.find((m) => m.slug === slug);
}

export const newYork = {
  slug: "new-york",
  country: "US" as const,
  locale: "en-US",
  currency: "USD",
  name: "New York City",
  shortName: "New York",
  path: "/us/new-york",
  phoneDisplay: "(212) 555-0148",
  phoneTel: "+12125550148",
};

export const SITE_ORIGIN = brand.origin;

export type Market = typeof vancouver;

export function marketUrl(path = "") {
  return `${SITE_ORIGIN}${vancouver.path}${path}`;
}

export function hreflang(path = "") {
  return [
    { lang: "en-CA", href: `${SITE_ORIGIN}${vancouver.path}${path}` },
    { lang: "en-US", href: `${SITE_ORIGIN}${newYork.path}${path}` },
    { lang: "x-default", href: `${SITE_ORIGIN}/` },
  ];
}
