import { getRelativeLocaleUrl } from "astro:i18n";
import type { CollectionEntry } from "astro:content";

import { locales, defaultLocale, translations, type Locale } from "./constants";

export function useTranslation(locale?: Locale) {
    return translations[locale || defaultLocale];
}

/**
 * getStaticPaths params for a `src/pages/[...locale]/*.astro` route: generates
 * one path per locale, omitting the `locale` param for the default locale so it
 * resolves with no URL prefix (matching `prefixDefaultLocale: false`).
 */
export function getLocaleStaticPaths() {
    return locales.map(locale => ({
        params: { locale: locale === defaultLocale ? undefined : locale }
    }));
}

export function getProjectSlug(project: CollectionEntry<'portfolio'>): string {
    return project.id.slice(project.data.lang.length + 1);
}

export function getProjectUrl(project: CollectionEntry<'portfolio'>): string {
    return getRelativeLocaleUrl(project.data.lang, `portfolio/${getProjectSlug(project)}`)
        .replace(/\/$/, '');
}
