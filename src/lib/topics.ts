import { TOPICS_A } from './topics-a';
import { TOPICS_B } from './topics-b';
import { TOPICS_C } from './topics-c';
import type { TopicEntry, TopicContent, TopicLocale } from './topic-types';

export type { TopicEntry, TopicContent, TopicLocale } from './topic-types';
export { INDEPENDENT_NOTE, ALL_TOPIC_SLUGS } from './topic-types';

export const TOPICS: TopicEntry[] = [...TOPICS_A, ...TOPICS_B, ...TOPICS_C];

export function getTopic(slug: string, locale: TopicLocale): TopicContent | undefined {
  const e = TOPICS.find((t) => t.slug === slug);
  return e ? e[locale] : undefined;
}

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function topicTitle(slug: string, locale: TopicLocale): string | undefined {
  const e = TOPICS.find((t) => t.slug === slug);
  return e ? e[locale].h1 : undefined;
}

export function topicGroup(slug: string): string | undefined {
  return TOPICS.find((t) => t.slug === slug)?.group;
}

export function getRelated(
  slug: string,
  locale: TopicLocale,
): { slug: string; title: string }[] {
  const e = TOPICS.find((t) => t.slug === slug);
  if (!e) return [];
  return e[locale].related
    .map((r) => ({ slug: r, title: topicTitle(r, locale) ?? r }))
    .filter((r) => r.title);
}
