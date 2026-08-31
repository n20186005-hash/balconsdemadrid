import { useTranslations, useMessages } from 'next-intl';
import RichInline from './RichInline';

export default function Intro() {
  const t = useTranslations('intro');
  const tOff = useTranslations('officialManagement');
  const tEntity = useTranslations('entity');
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];

  return (
    <section className="section-padding" id="about">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="mb-6">
          <nav
            className="inline-flex flex-wrap items-center gap-2 text-xs sm:text-sm px-4 py-2 rounded-lg"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
            aria-label="Breadcrumb"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{t('breadcrumb')}</span>
          </nav>
        </div>

        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          <RichInline text={t('description')} />
        </p>

        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('extendedDescription')}
        </p>

        <div
          className="mb-12 rounded-xl p-6 sm:p-8 border-t-4"
          style={{
            background: 'var(--bg-tertiary)',
            borderColor: 'var(--accent)',
            borderTopLeftRadius: '0.75rem',
            borderTopRightRadius: '0.75rem',
          }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'var(--accent)', color: 'white' }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div>
              <h3
                className="font-display text-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                {t('etymologyTitle')}
              </h3>
            </div>
          </div>
          <div
            className="text-sm sm:text-base leading-relaxed pl-13"
            style={{ color: 'var(--text-secondary)' }}
          >
            <RichInline text={t('etymologyDescription')} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 rounded-xl p-6 sm:p-8 border border-dashed"
          style={{ borderColor: 'var(--accent)', background: 'var(--bg-tertiary)' }}
        >
          <h3
            className="font-display text-xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('nearbyTitle')}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div
              className="flex-1 text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <RichInline text={t('nearbyDescription')} />
            </div>
            <div className="flex flex-wrap gap-3 sm:flex-shrink-0">
              <div
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)', border: '1px solid var(--accent)' }}
              >
                📍 {tEntity('nearbyLandmark1')}
              </div>
              <div
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)', border: '1px solid var(--accent)' }}
              >
                🏞️ {tEntity('nearbyLandmark2')}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>
      </div>
    </section>
  );
}
