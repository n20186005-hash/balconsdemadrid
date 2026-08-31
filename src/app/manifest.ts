import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Balcóns de Madrid',
    short_name: 'Balcóns Madrid',
    description:
      'Visitor guide to Balcóns de Madrid viewpoint in Parada de Sil, Ourense, Spain.',
    lang: 'es',
    start_url: '/es',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#faf8f4',
    theme_color: '#234830',
    categories: ['travel', 'tourism', 'education'],
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
