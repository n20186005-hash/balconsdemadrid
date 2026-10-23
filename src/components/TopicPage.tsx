import RichInline from './RichInline';
import type { TopicContent, TopicLocale } from '@/lib/topic-types';
import { INDEPENDENT_NOTE } from '@/lib/topic-types';

type Props = {
  content: TopicContent;
  locale: TopicLocale;
  slug: string;
  related: { slug: string; title: string }[];
  baseUrl: string;
  entityName: string;
};

const UPDATED_LABEL: Record<TopicLocale, string> = {
  es: 'Información actualizada',
  gl: 'Información actualizada',
  en: 'Information updated',
};

export default function TopicPage({
  content,
  locale,
  slug,
  related,
  baseUrl,
  entityName,
}: Props) {
  const selfUrl = `${baseUrl}/${locale}/${slug}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/${locale}` },
      { '@type': 'ListItem', position: 2, name: content.h1, item: selfUrl },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.h1,
    description: content.description,
    url: selfUrl,
    inLanguage: locale,
    about: { '@type': 'TouristAttraction', name: entityName },
    isPartOf: { '@type': 'WebSite', name: entityName, url: baseUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <article className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <a
            href={`/${locale}`}
            className="text-sm hover:underline mb-6 inline-block"
            style={{ color: 'var(--text-muted)' }}
          >
            {locale === 'gl' ? '← Inicio' : locale === 'en' ? '← Home' : '← Inicio'}
          </a>

          <h1
            className="font-display text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {content.h1}
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            <RichInline text={content.intro} />
          </p>

          <div className="space-y-10">
            {content.sections.map((section) => (
              <section key={section.id ?? section.title}>
                <h2
                  className="font-display text-2xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                  id={section.id}
                >
                  {section.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <RichInline text={section.body} />
                </p>
              </section>
            ))}
          </div>

          {content.faq.length > 0 && (
            <section className="mt-12">
              <h2
                className="font-display text-2xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {locale === 'gl' ? 'Preguntas frecuentes' : locale === 'en' ? 'Frequently asked questions' : 'Preguntas frecuentes'}
              </h2>
              <div className="space-y-3">
                {content.faq.map((f, i) => (
                  <details
                    key={i}
                    className="rounded-lg border p-4"
                    style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
                  >
                    <summary className="font-medium cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                      {f.question}
                    </summary>
                    <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-12">
              <h2
                className="font-display text-xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {locale === 'gl' ? 'Léxico relacionado' : locale === 'en' ? 'Related guides' : 'Guías relacionadas'}
              </h2>
              <ul className="flex flex-col gap-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <a
                      href={`/${locale}/${r.slug}`}
                      className="block px-4 py-3 rounded-lg border transition-colors hover:underline"
                      style={{
                        background: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <p className="mt-12 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {INDEPENDENT_NOTE[locale]}
          </p>
          <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
            {UPDATED_LABEL[locale]}: {content.updated}.
          </p>
        </div>
      </article>
    </>
  );
}
