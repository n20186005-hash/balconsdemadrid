'use client';

import { useState } from 'react';
import { useTranslations, useMessages } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const faqItems = (messages?.faq?.items || []) as Array<{ question: string; answer: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
              key={index}
                className="rounded-xl border overflow-hidden transition-all"
                style={{
                  borderColor: isOpen ? 'var(--accent)' : 'var(--border-color)',
                  background: 'var(--bg-tertiary)',
                }}
              >
                <button
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3
                    className="font-display text-lg sm:text-xl font-semibold flex-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.question}
                  </h3>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-transform"
                    style={{
                      background: isOpen ? 'var(--accent)' : 'transparent',
                      border: '1px solid var(--accent)',
                      color: isOpen ? 'white' : 'var(--accent)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="px-5 sm:px-6 pb-6 pt-0"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <div
                      className="pt-4 text-base leading-relaxed"
                      style={{ borderTop: '1px dashed var(--border-color)' }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
