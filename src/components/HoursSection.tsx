'use client';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

function splitByColon(src: string): [string, string] {
  const m = src.split(/[:：]/);
  if (m.length < 2) return [src, ''];
  return [m[0].trim(), m.slice(1).join(':').trim()];
}

export default function HoursSection() {
  const t = useTranslations('hours');

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <TimeCard title={t('park')} time={t('parkTime')} iconKey="park" />
          <TimeCard title={t('bestTime')} time={t('bestTimeSpring')} subtitle={t('bestTimeSummer')} iconKey="season" />
          <TimeCard title={t('bestTime')} time={t('bestTimeAutumn')} subtitle={t('bestTimeWinter')} iconKey="season" />
        </div>

        <div
          className="mb-8 rounded-2xl p-6 sm:p-8"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: 'var(--accent)', color: 'white' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M4.93 19.07l1.41-1.41" />
                <path d="M17.66 6.34l1.41-1.41" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h3
              className="font-display text-xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('goldenHourTitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="rounded-xl p-4 sm:p-5"
              style={{ background: 'var(--bg-secondary)' }}
            >
              {(() => {
                const [lbl, desc] = splitByColon(t('goldenHourSunrise'));
                return (
                  <>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      🌅 {lbl}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {desc}
                    </p>
                  </>
                );
              })()}
            </div>
            <div
              className="rounded-xl p-4 sm:p-5"
              style={{ background: 'var(--bg-secondary)' }}
            >
              {(() => {
                const [lbl, desc] = splitByColon(t('goldenHourSunset'));
                return (
                  <>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      🌇 {lbl}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {desc}
                    </p>
                  </>
                );
              })()}
            </div>
            <div
              className="sm:col-span-2 rounded-xl p-4 sm:p-5"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                🌌 {t('blueHourTitle')}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('blueHourDesc')}
              </p>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-5 flex items-start gap-4"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('tip')}</p>
        </div>
      </div>
    </section>
  );
}

function TimeCard({ title, time, subtitle, iconKey }: { title: string; time: string; subtitle?: string; iconKey: string }) {
  const icons: Record<string, ReactNode> = {
    park: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L4 12h3v4h10v-4h3L12 2z"/>
        <rect x="10" y="16" width="4" height="6"/>
      </svg>
    ),
    season: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  };

  return (
    <div
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex items-center gap-3 mb-3" style={{ color: 'var(--accent)' }}>
        {icons[iconKey]}
        <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      </div>
      <p className="text-lg font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>{time}</p>
      {subtitle && (
        <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{subtitle}</p>
      )}
    </div>
  );
}
