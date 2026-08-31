import { useTranslations } from 'next-intl';

export default function BasicInfo() {
  const t = useTranslations('basicInfo');

  type Row = { key: string; value: string };
  const rows: Row[] = [
    { key: t('officialName'), value: t('officialNameValue') },
    { key: t('type'), value: t('typeValue') },
    { key: t('country'), value: t('countryValue') },
    { key: t('city'), value: t('cityValue') },
    { key: t('address'), value: t('addressValue') },
    { key: t('plusCode'), value: t('plusCodeValue') },
    { key: t('elevation'), value: t('elevationValue') },
    { key: t('annualRainfall'), value: t('annualRainfallValue') },
    { key: t('avgTemperature'), value: t('avgTemperatureValue') },
    { key: t('geologicalFormation'), value: t('geologicalFormationValue') },
    { key: t('protectionStatus'), value: t('protectionStatusValue') },
    { key: t('googleRating'), value: t('googleRatingValue') },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }} id="info">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden"
          style={{
            background: 'var(--border-color)',
            border: '1px solid var(--border-color)',
          }}
        >
          {rows.map((row, i) => (
            <div
              key={row.key}
              className="flex items-start sm:items-center gap-4 p-5 sm:p-6"
              style={{
                background: 'var(--bg-tertiary)',
              }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(var(--accent-rgb), 0.1)' }}>
                <span
                  className="font-display text-xs font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-wider font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  {row.key}
                </p>
                <p className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
