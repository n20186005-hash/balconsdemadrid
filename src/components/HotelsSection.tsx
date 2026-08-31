'use client';

import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';

export default function HotelsSection() {
  const t = useTranslations('hotels');
  const messages = useMessages() as any;
  const categories = (messages?.hotels?.categories || []) as Array<{
    id: string;
    name: string;
    suitableFor: string;
    features: string;
    average: string;
  }>;

  const iconKey = (id: string): ReactNode => {
    switch (id) {
      case 'rural':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18" />
            <path d="M5 21V7l8-4v18" />
            <path d="M19 21V11l-6-4" />
            <circle cx="8" cy="14" r="0.5" />
          </svg>
        );
      case 'farm':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7v15h20V7L12 2z" />
            <path d="M2 7l10 5 10-5" />
            <path d="M6 21V12h12v9" />
          </svg>
        );
      case 'hostel':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 20h20" />
            <rect x="4" y="4" width="16" height="16" rx="1" />
            <path d="M8 8h2v4H8zM14 8h2v4h-2zM8 14h8v2H8z" />
          </svg>
        );
      case 'camping':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 20h20" />
            <path d="M12 3L2 20h20L12 3z" />
            <path d="M12 3v5" />
            <circle cx="12" cy="14" r="1.5" />
          </svg>
        );
      case 'hotel':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18" />
            <rect x="4" y="7" width="16" height="14" rx="1" />
            <path d="M8 11v.01M12 11v.01M16 11v.01M8 15v.01M12 15v.01M16 15v.01" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section-padding">
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
          }}
        >
          {t('disclaimer')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <article
              key={c.id}
              className="rounded-xl p-5 sm:p-6 flex flex-col gap-3"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)', color: 'white' }}
                  aria-hidden="true"
                >
                  {iconKey(c.id)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display text-lg sm:text-xl font-semibold mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {c.name}
                  </h3>
                  <ul className="space-y-2.5 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 text-xs font-bold px-1.5 rounded" style={{ color: 'var(--accent)', background: 'rgba(var(--accent-rgb),0.08)' }}>
                        01
                      </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{c.suitableFor}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 text-xs font-bold px-1.5 rounded" style={{ color: 'var(--accent)', background: 'rgba(var(--accent-rgb),0.08)' }}>
                        02
                      </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{c.features}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 text-xs font-bold px-1.5 rounded" style={{ color: 'var(--accent)', background: 'rgba(var(--accent-rgb),0.08)' }}>
                        03
                      </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{c.average}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
