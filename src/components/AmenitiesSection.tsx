'use client';

import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';
import RichInline from './RichInline';

export default function AmenitiesSection() {
  const t = useTranslations('amenities');
  const messages = useMessages() as any;
  const categories = (messages?.amenities?.categories || []) as Array<{
    id: string;
    name: string;
    icon: string;
    level: string;
    summary: string;
    distance: string;
  }>;

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
          className="mb-10 text-sm leading-relaxed p-4 rounded-xl"
          style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)', border: '1px dashed var(--border-color)' }}
        >
          {t('disclaimer')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <AmenityCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityCard({
  category,
}: {
  category: { id: string; name: string; icon: string; level: string; summary: string; distance: string };
}) {
  return (
    <article
      className="rounded-xl p-5 sm:p-6 flex flex-col gap-3"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
          style={{ background: 'var(--accent)', color: 'white' }}
          aria-hidden="true"
        >
          <AmenityIcon id={category.icon} />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-display text-lg sm:text-xl font-semibold mb-1"
            style={{ color: 'var(--text-primary)' }}
          >
            {category.name}
          </h3>
          <p className="text-xs font-medium mb-2" style={{ color: 'var(--accent)' }}>
            {category.level}
          </p>
          <div
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            <RichInline text={category.summary} />
          </div>
          <p
            className="mt-3 text-xs pt-3 border-t border-dashed"
            style={{ color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}
          >
            {category.distance}
          </p>
        </div>
      </div>
    </article>
  );
}

function AmenityIcon({ id }: { id: string }): ReactNode {
  switch (id) {
    case 'wc':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3h6v5h2v13h-4v-6h-4v6H5V8h2z" />
        </svg>
      );
    case 'parking':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      );
    case 'food':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 2v7c0 1.1.9 2 2 2h4V5" />
          <path d="M7 2v20" />
          <path d="M11 22V9c0-1.1.9-2 2-2h2V2" />
          <path d="M21 15V2" />
        </svg>
      );
    case 'shop':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case 'fuel':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="22" x2="15" y2="22" />
          <path d="M4 22V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v18" />
          <path d="M18 11V8h2a1 1 0 0 1 1 1v7" />
          <circle cx="20" cy="17" r="2" />
        </svg>
      );
    case 'access':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v8" />
          <path d="M8 11h8" />
          <path d="M8 22l4-7 4 7" />
        </svg>
      );
    case 'pet':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="4" r="2" />
          <circle cx="18" cy="8" r="2" />
          <circle cx="4" cy="8" r="2" />
          <circle cx="17" cy="16" r="2" />
          <path d="M11 13c-2 0-4 1-5 3s0 4 2 4h8c2 0 3-2 2-4s-3-3-5-3z" />
        </svg>
      );
    case 'medical':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a3 3 0 0 0-3 3v3H6a3 3 0 0 0 0 6h3v3a3 3 0 0 0 6 0v-3h3a3 3 0 0 0 0-6h-3V5a3 3 0 0 0-3-3z" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}
