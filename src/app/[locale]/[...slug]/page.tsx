import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getTopic, topicSlugs, getRelated } from '@/lib/topics';
import type { TopicLocale } from '@/lib/topic-types';
import TopicPage from '@/components/TopicPage';

type Params = { locale: string; slug: string[] };

const BASE_URL = 'https://balconsdemadrid.com';

export function generateStaticParams() {
  const params: Params[] = [];
  for (const locale of routing.locales) {
    for (const slug of topicSlugs()) {
      params.push({ locale, slug: slug.split('/') });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  const slugStr = slug.join('/');
  const content = getTopic(slugStr, locale as TopicLocale);
  if (!content) return {};

  const selfUrl = `${BASE_URL}/${locale}/${slugStr}`;
  const glUrl = `${BASE_URL}/gl/${slugStr}`;
  const enUrl = `${BASE_URL}/en/${slugStr}`;
  const esUrl = `${BASE_URL}/es/${slugStr}`;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        gl: glUrl,
        en: enUrl,
        es: esUrl,
        'gl-ES': glUrl,
        'en-US': enUrl,
        'es-ES': esUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: selfUrl,
      type: 'article',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  if (!routing.locales.includes(locale as any)) notFound();

  const slugStr = slug.join('/');
  const content = getTopic(slugStr, locale as TopicLocale);
  if (!content) notFound();

  const related = getRelated(slugStr, locale as TopicLocale);
  const entityName = 'Balcones de Madrid';

  return (
    <main>
      <TopicPage
        content={content}
        locale={locale as TopicLocale}
        slug={slugStr}
        related={related}
        baseUrl={BASE_URL}
        entityName={entityName}
      />
    </main>
  );
}
