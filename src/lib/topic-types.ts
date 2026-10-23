export type TopicLocale = 'es' | 'gl' | 'en';

export interface TopicSection {
  id?: string;
  title: string;
  body: string; // may contain **bold** markers
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicContent {
  title: string; // meta <title>
  h1: string;
  description: string; // meta description
  intro: string; // lead paragraph (may contain **bold**)
  sections: TopicSection[];
  faq: TopicFaq[];
  related: string[]; // slugs
  updated: string; // e.g. "octubre de 2026"
}

export interface TopicEntry {
  slug: string; // e.g. "como-llegar" or "cerca/santa-cristina"
  group: string; // category key used for internal linking
  es: TopicContent;
  gl: TopicContent;
  en: TopicContent;
}

export const INDEPENDENT_NOTE: Record<TopicLocale, string> = {
  es: 'Guía turística independiente y sin ánimo de lucro. No está gestionada por el ayuntamiento ni por la oficina de turismo; las fuentes oficiales se citan a título informativo.',
  gl: 'Guía turística independente e sen ánimo de lucro. Non está xestionada polo concello nin pola oficina de turismo; as fontes oficiais cítanse a título informativo.',
  en: 'An independent, non-profit travel guide. It is not run by the town council or the tourism office; official sources are cited for information only.',
};

/** All 42 planned slugs (future expansion). Only entries in TOPICS generate pages. */
export const ALL_TOPIC_SLUGS: string[] = [
  'como-llegar', 'aparcamiento', 'historia', 'fotos', 'mejor-epoca', 'con-ninos',
  'accesibilidad', 'parada-de-sil',
  'cerca/santa-cristina', 'cerca/mirador-de-castro', 'cerca/cabezoas', 'cerca/vilouxe',
  'cerca/pasarelas-del-mao', 'senderismo/pr-g-98', 'senderismo/pr-g-177',
  'cerca/museo-del-chocolate', 'cerca/castano-entrambosrrios', 'cerca/san-vitor-de-barxacova',
  'cerca/santo-estevo', 'cerca/castro-caldelas',
  'donde-comer', 'comer/restaurante-parada-de-sil', 'comer/reitoral-de-parada',
  'comer/cristosende', 'comer/gastronomia-local', 'comer/desayunos-y-cafe', 'comer/comida-y-senderismo',
  'bodegas', 'bodegas/ronsel-do-sil', 'bodegas/carlos-caneiro',
  'vino/vinos-ribeira-sacra', 'vino/viticultura-heroica', 'vino/donde-comprar',
  'experiencias/catamaran-sil', 'rutas/un-dia', 'rutas/dos-dias', 'rutas/medio-dia',
  'rutas/miradores-en-coche', 'miradores/comparativa', 'rutas/dias-de-lluvia',
  'donde-dormir', 'visita/sin-coche',
];
