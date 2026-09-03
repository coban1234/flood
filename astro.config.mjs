// @ts-check
import { defineConfig } from 'astro/config';

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: githubPages ? 'https://coban1234.github.io' : 'https://tidemarkrestoration.com',
  base: githubPages ? '/flood/' : '/',
  trailingSlash: 'always',
});
