'use client';

import { useState } from 'react';
import { useTranslations, useMessages } from 'next-intl';

export default function SourcesSection() {
  const t = useTranslations('sources');
  const messages = useMessages() as any;
  const sections = (messages?.sources?.sections || []) as Array<{
    id: string;
    title: string;
    items: string[];
  }>;
  const [openId, setOpenId] = useState<string | null>(
    sections[0]?.id || null
  );

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />
        <p
          className="mb-10 text-sm leading-relaxed p-5 rounded-xl"
          style={{
            color: 'var(--text-secondary)',
            background: 'var(--bg-tertiary)',
            border: '1px dashed var(--border-color)',
            fontFamily: 'var(--font-display)',
          }}
        >
          {t('intro')}
        </p>

        <div className="space-y-4">
          {sections.map((s) => {
            const open = openId === s.id;
            return (
              <details
                key={s.id}
                open={open}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) setOpenId(s.id);
                  else if (openId === s.id) setOpenId(null);
                }}
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: `1px solid ${open ? 'var(--accent)' : 'var(--border-color)'}`,
                }}
              >
                <summary
                  className="cursor-pointer list-none p-5 sm:p-6 flex items-start justify-between gap-4"
                >
                  <h3
                    className="font-display text-lg sm:text-xl font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {s.title}
                  </h3>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-transform"
                    style={{
                      background: open ? 'var(--accent)' : 'transparent',
                      border: '1px solid var(--accent)',
                      color: open ? 'white' : 'var(--accent)',
                      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <ul
                  className="px-5 sm:px-6 pb-6 space-y-3"
                  style={{ borderTop: '1px dashed var(--border-color)' }}
                >
                  {s.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 pt-4 text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span
                        className="mt-1.5 flex-shrink-0 font-mono text-xs px-1.5 py-0.5 rounded"
                        style={{
                          color: 'var(--accent)',
                          background: 'rgba(var(--accent-rgb), 0.08)',
                        }}
                      >
                        [{i + 1}]
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>

        <div
          className="mt-10 p-5 sm:p-6 rounded-xl text-center"
          style={{ background: 'var(--bg-tertiary)', borderTop: '3px solid var(--accent)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('footerText')}
          </p>
        </div>
      </div>
    </section>
  );
}
