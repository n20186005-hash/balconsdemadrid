import { TOPICS } from '@/lib/topics';
import type { TopicLocale } from '@/lib/topic-types';

const GROUP_LABELS: Record<string, Record<TopicLocale, string>> = {
  acceso: { es: 'Cómo llegar y aparcar', gl: 'Como chegar e aparcar', en: 'Getting there & parking' },
  cerca: { es: 'Qué ver cerca', gl: 'Que ver preto', en: 'Nearby sights' },
  senderismo: { es: 'Senderismo', gl: 'Sendeirismo', en: 'Hiking' },
  comer: { es: 'Dónde comer', gl: 'Onde comer', en: 'Where to eat' },
  bodegas: { es: 'Bodegas', gl: 'Bodegas', en: 'Wineries' },
  vino: { es: 'Vino y bodegas', gl: 'Viño e bodegas', en: 'Wine & wineries' },
  rutas: { es: 'Rutas', gl: 'Rutas', en: 'Itineraries' },
  miradores: { es: 'Miradores', gl: 'Miradoiros', en: 'Viewpoints' },
  experiencias: { es: 'Experiencias', gl: 'Experiencias', en: 'Experiences' },
  'donde-dormir': { es: 'Dónde dormir', gl: 'Onde durmir', en: 'Where to stay' },
  visita: { es: 'Visita sin coche', gl: 'Visita sen coche', en: 'Visiting without a car' },
};

export default function TopicLinks({ locale }: { locale: TopicLocale }) {
  const items = TOPICS.map((t) => ({
    slug: t.slug,
    title: t[locale].h1,
    group: t.group,
  }));

  const groups = Array.from(new Set(items.map((i) => i.group)));

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }} id="guias">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {locale === 'gl'
            ? 'Guías da Ribeira Sacra'
            : locale === 'en'
              ? 'Ribeira Sacra guides'
              : 'Guías de la Ribeira Sacra'}
        </h2>
        <p className="mb-10 max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {locale === 'gl'
            ? 'Información práctica e independente para organizar a túa visita aos Balcones de Madrid e arredores.'
            : locale === 'en'
              ? 'Practical, independent information to plan your visit to Balcóns de Madrid and the surroundings.'
              : 'Información práctica e independiente para organizar tu visita a los Balcones de Madrid y los alrededores.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {groups.map((group) => (
            <div key={group}>
              <h3
                className="font-display text-lg font-semibold mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {GROUP_LABELS[group]?.[locale] ?? group}
              </h3>
              <ul className="flex flex-col gap-2">
                {items
                  .filter((i) => i.group === group)
                  .map((i) => (
                    <li key={i.slug}>
                      <a
                        href={`/${locale}/${i.slug}`}
                        className="block px-4 py-3 rounded-lg border transition-colors hover:underline"
                        style={{
                          background: 'var(--bg-tertiary)',
                          borderColor: 'var(--border-color)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {i.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
