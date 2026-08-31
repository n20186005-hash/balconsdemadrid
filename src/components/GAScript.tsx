'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GA_ID = 'G-HXM22WWPKP';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4 only loads after the visitor opts in to "analytics" cookies on the cookie settings page. */
function hasAnalyticsConsent(): boolean {
  try {
    const prefs = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
    return prefs.analytics === true;
  } catch {
    return false;
  }
}

function injectGtag() {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function removeGtag() {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
  document
    .querySelectorAll(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`)
    .forEach((el) => el.remove());
  delete window.gtag;
}

export default function GAScript() {
  const pathname = usePathname();

  useEffect(() => {
    if (hasAnalyticsConsent()) {
      injectGtag();
    } else {
      (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
    }

    const handleConsentChange = () => {
      if (hasAnalyticsConsent()) {
        injectGtag();
      } else {
        removeGtag();
      }
    };

    window.addEventListener('cookie-consent-change', handleConsentChange);
    return () => window.removeEventListener('cookie-consent-change', handleConsentChange);
  }, []);

  // Track client-side route changes in the SPA.
  useEffect(() => {
    if (hasAnalyticsConsent() && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
      });
    }
  }, [pathname]);

  return null;
}
