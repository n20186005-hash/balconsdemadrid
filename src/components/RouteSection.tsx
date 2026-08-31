'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function RouteSection() {
  const t = useTranslations('route');
  const messages = useMessages() as any;
  const levels = (messages?.route?.levels || []) as Array<{
    id: string;
    levelName: string;
    duration: string;
    elevation: string;
    audience: string;
    highlights: string;
    steps: string[];
  }>;

  const levelBadgeColor = (id: string) => {
    switch (id) {
      case 'light':
        return {
          badge: { background: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)', border: '1px solid var(--accent)' },
          border: '1px solid var(--accent)',
        };
      case 'medium':
        return {
          badge: { background: 'rgba(245, 158, 11, 0.1)', color: '#d97706', border: '1px solid #f59e0b' },
          border: '1px solid #f59e0b',
        };
      case 'advanced':
        return {
          badge: { background: 'rgba(220, 38, 38, 0.08)', color: '#dc2626', border: '1px solid #dc2626' },
          border: '1px solid #dc2626',
        };
      default:
        return {
          badge: { background: 'var(--bg-tertiary)', color: 'var(--text-muted)' },
          border: '1px solid var(--border-color)',
        };
    }
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />
        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('intro')}
        </p>

        <div className="space-y-10">
          {levels.map((level) => {
            const color = levelBadgeColor(level.id);
            return (
              <article
                key={level.id}
                className="rounded-2xl p-6 sm:p-8"
                style={{ background: 'var(--bg-tertiary)', border: color.border }}
              >
                <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={color.badge}
                    >
                      {level.levelName}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <p
                        className="flex items-start gap-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--accent)' }}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {level.duration}
                      </p>
                      <p
                        className="flex items-start gap-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--accent)' }}
                        >
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                        {level.elevation}
                      </p>
                    </div>
                  </div>
                </header>

                <div className="mb-6 space-y-2">
                  <p
                    className="text-sm leading-relaxed p-3 rounded-lg"
                    style={{ color: 'var(--text-secondary)', background: 'var(--bg-secondary)' }}
                  >
                    {level.audience}
                  </p>
                  <p
                    className="text-sm leading-relaxed p-3 rounded-lg"
                    style={{ color: 'var(--text-secondary)', background: 'var(--bg-secondary)' }}
                  >
                    {level.highlights}
                  </p>
                </div>

                <div className="relative">
                  <div
                    className="absolute left-5 top-0 bottom-0 w-0.5"
                    style={{ background: 'var(--border-color)' }}
                  />
                  <ol className="space-y-4">
                    {level.steps.map((step, i) => (
                      <li key={i} className="relative pl-16">
                        <span
                          className="absolute left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ background: 'var(--accent)', color: 'white' }}
                        >
                          {i + 1}
                        </span>
                        <div
                          className="rounded-xl p-4 text-sm leading-relaxed"
                          style={{
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-secondary)',
                            border: '1px dashed var(--border-color)',
                          }}
                        >
                          {step}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
