import fs from 'fs';
import path from 'path';

const STATIC_PAGES = [
  { loc: 'https://scorecalculator.net/', priority: '1.0', changefreq: 'daily', lastmod: '2026-09-16' },
  { loc: 'https://scorecalculator.net/all-calculators', priority: '0.9', changefreq: 'weekly', lastmod: '2026-09-16' },
  { loc: 'https://scorecalculator.net/about', priority: '0.5', changefreq: 'monthly', lastmod: '2026-09-16' },
  { loc: 'https://scorecalculator.net/contact', priority: '0.5', changefreq: 'monthly', lastmod: '2026-09-16' },
  { loc: 'https://scorecalculator.net/privacy', priority: '0.3', changefreq: 'monthly', lastmod: '2026-09-16' },
  { loc: 'https://scorecalculator.net/disclaimer', priority: '0.3', changefreq: 'monthly', lastmod: '2026-09-16' },
  { loc: 'https://scorecalculator.net/terms', priority: '0.3', changefreq: 'monthly', lastmod: '2026-09-16' },
  { loc: 'https://scorecalculator.net/sitemap', priority: '0.6', changefreq: 'weekly', lastmod: '2026-09-16' }
];

const AP_CALCULATORS = [
  'ap-chem-score-calculator',
  'ap-bio-score-calculator',
  'ap-physics-1-score-calculator',
  'ap-calc-ab-score-calculator',
  'ap-calc-bc-score-calculator',
  'ap-stats-score-calculator',
  'apes-score-calculator',
  'ap-csa-score-calculator',
  'ap-human-geography-score-calculator',
  'ap-world-history-score-calculator',
  'apush-score-calculator',
  'ap-psych-score-calculator',
  'ap-lang-score-calculator',
  'ap-lit-score-calculator',
  'ap-macro-score-calculator',
  'ap-micro-score-calculator',
  'ap-government-score-calculator',
  'ap-csp-score-calculator',
  'ap-precalc-score-calculator'
];

const GRAD_CALCULATORS = [
  'gre-score-calculator'
];

const ACADEMIC_CALCULATORS = [
  'marks-percentage-calculator',
  'attendance-calculator'
];

export function generateSitemapXml(): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 1. Static Pages
  xml += `  <!-- Core Static Pages -->\n`;
  for (const page of STATIC_PAGES) {
    xml += `  <url>\n    <loc>${page.loc}</loc>\n    <lastmod>${page.lastmod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
  }

  // 2. AP Calculators
  xml += `\n  <!-- AP Exam Calculators -->\n`;
  for (const slug of AP_CALCULATORS) {
    xml += `  <url>\n    <loc>https://scorecalculator.net/${slug}</loc>\n    <lastmod>2026-09-16</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  }

  // 3. Graduate Exam Calculators
  xml += `\n  <!-- Graduate Exam Calculators -->\n`;
  for (const slug of GRAD_CALCULATORS) {
    xml += `  <url>\n    <loc>https://scorecalculator.net/${slug}</loc>\n    <lastmod>2026-09-21</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  }

  // 4. Academic Calculators
  xml += `\n  <!-- Academic Calculators -->\n`;
  for (const slug of ACADEMIC_CALCULATORS) {
    xml += `  <url>\n    <loc>https://scorecalculator.net/${slug}</loc>\n    <lastmod>2026-09-21</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.80</priority>\n  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

export function syncSitemap(rootDir = process.cwd()): void {
  const xml = generateSitemapXml();
  const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf-8');
}

// Run directly if executed via CLI
if (process.argv[1] && process.argv[1].endsWith('sync-sitemap.ts')) {
  syncSitemap();
}
