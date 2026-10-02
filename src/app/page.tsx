import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Middleware (localePrefix: 'always') redirects `/` to the default locale.
// This fallback keeps the default locale in sync if middleware is bypassed.
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}