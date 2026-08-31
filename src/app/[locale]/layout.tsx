import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata, Viewport } from 'next';
import GAScript from '@/components/GAScript';
import PwaRegister from '@/components/PwaRegister';

export const viewport: Viewport = {
  themeColor: '#234830',
  colorScheme: 'light dark',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const entity = messages.entity;
  const baseUrl = `https://${entity.domain}`;

  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const esUrl = `${baseUrl}/es`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'es' ? esUrl : enUrl;

  const heroImage = `${baseUrl}/gallery/balcons-de-madrid%20(1).jpg`;

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'es': esUrl,
        'es-ES': esUrl,
        'zh-CN': zhUrl,
        'en-US': enUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: entity.fullName,
      locale: locale === 'zh' ? 'zh_CN' : locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 630,
          alt: messages.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [heroImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    manifest: '/manifest.webmanifest',
    icons: {
      icon: [
        { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    appleWebApp: {
      capable: true,
      title: 'Balcóns de Madrid',
      statusBarStyle: 'default',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const entity = (messages as any).entity;
  const faqItems = (messages as any).faq.items;
  const baseUrl = `https://${entity.domain}`;
  const heroImage = `${baseUrl}/gallery/balcons-de-madrid%20(1).jpg`;

  const touristAttractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${baseUrl}/#attraction`,
    name: entity.fullName,
    alternateName: [
      entity.shortName,
      `${entity.city} ${entity.fullName}`,
    ],
    description: (messages as any).meta.description,
    url: baseUrl,
    image: [
      heroImage,
    ],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: entity.fullName,
      addressLocality: entity.city,
      addressRegion: entity.province,
      postalCode: entity.postalCode,
      addressCountry: entity.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: entity.latitude,
      longitude: entity.longitude,
    },
    hasMap: entity.mapsShareUrl,
    sameAs: [
      entity.mapsShareUrl,
      entity.govtTourismUrl,
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item: any) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const htmlLang = locale === 'zh' ? 'zh-CN' : locale === 'es' ? 'es-ES' : 'en';

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:alt" content={(messages as any).hero.imageAlt} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(touristAttractionSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <GAScript />
        <PwaRegister />
      </body>
    </html>
  );
}
