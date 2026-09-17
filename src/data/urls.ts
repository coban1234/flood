import { SITE_ORIGIN, vancouver } from "./site";
import { services } from "./services";
import { builtAreas } from "./areas";
import { jobs } from "./jobs";
import { firstHourPages } from "./firstHour";
import { guides } from "./guides";

export const urls = [
  "/",
  "/about-calder/",
  "/guides/",
  `${vancouver.path}/`,
  `${vancouver.path}/emergency/`,
  `${vancouver.path}/tell/`,
  `${vancouver.path}/services/`,
  ...services.map((s) => `${vancouver.path}/services/${s.slug}/`),
  `${vancouver.path}/buildings/`,
  `${vancouver.path}/buildings/stack-leaks/`,
  `${vancouver.path}/buildings/multi-unit-response/`,
  `${vancouver.path}/buildings/who-pays/`,
  `${vancouver.path}/insurance/`,
  `${vancouver.path}/insurance/without-a-claim/`,
  `${vancouver.path}/pricing/`,
  `${vancouver.path}/first-hour/`,
  ...firstHourPages.map((p) => `${vancouver.path}/first-hour/${p.slug}/`),
  `${vancouver.path}/work/`,
  ...jobs.map((j) => `${vancouver.path}/work/${j.slug}/`),
  `${vancouver.path}/areas/`,
  ...builtAreas.map((a) => `${vancouver.path}/areas/${a.slug}/`),
  `${vancouver.path}/about/`,
  `${vancouver.path}/reviews/`,
  `${vancouver.path}/contact/`,
  `${vancouver.path}/privacy/`,
  `${vancouver.path}/terms/`,
  ...guides.map((g) => `/guides/${g.slug}/`),
];

export function xmlUrlset(paths: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (u) => `  <url>
    <loc>${SITE_ORIGIN}${u}</loc>
    <changefreq>weekly</changefreq>
  </url>`,
  )
  .join("\n")}
</urlset>`;
}
