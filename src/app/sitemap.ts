import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { topicSlugs } from '@/lib/topics';

const BASE_URL = 'https://balconsdemadrid.com';
const LEGAL = ['privacy-policy', 'terms-of-service', 'cookie-settings'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const addEntry = (path: string, opts?: { noIndex?: boolean }) => {
    for (const locale of routing.locales) {
      const url = `${BASE_URL}/${locale}${path}`;
      entries.push({
        url,
        lastModified: new Date('2026-10-23'),
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.6,
        alternates: {
          languages: {
            es: `${BASE_URL}/es${path}`,
            gl: `${BASE_URL}/gl${path}`,
            en: `${BASE_URL}/en${path}`,
          },
        },
      });
    }
  };

  // Home + legal pages
  addEntry('');
  LEGAL.forEach((p) => addEntry(`/${p}`));

  // Topic pages
  for (const slug of topicSlugs()) {
    addEntry(`/${slug}`);
  }

  return entries;
}
