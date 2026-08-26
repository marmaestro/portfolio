import { getRelativeLocaleUrl } from "astro:i18n";
import { getCollection, getEntry, type CollectionEntry } from "astro:content";

import { locales, defaultLocale, translations, type Locale, type Translations, type DeepPartial } from "./constants";

/**
 * Recursively fills in any key missing from `override` with the corresponding
 * value from `base`. Arrays are treated as leaves (used whole, not merged
 * element-by-element) so lists like `nav` or `skills.list` aren't spliced.
 */
function mergeWithDefault<T>(base: T, override: DeepPartial<T> | undefined): T {
    if (override === undefined) return base;
    if (Array.isArray(base) || typeof base !== "object" || base === null) return override as T;

    const result = { ...base } as Record<string, unknown>;
    for (const key of Object.keys(base)) {
        result[key] = mergeWithDefault(
            (base as Record<string, unknown>)[key],
            (override as Record<string, unknown>)[key] as DeepPartial<unknown>,
        );
    }
    return result as T;
}

const mergedTranslations: Record<Locale, Translations> = Object.fromEntries(
    locales.map(locale => [locale, mergeWithDefault(translations[defaultLocale] as Translations, translations[locale])]),
) as Record<Locale, Translations>;

export function useTranslation(locale?: Locale)
{
    return mergedTranslations[locale || defaultLocale];
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

/**
 * Resolves the equivalent URL for every locale given a request's pathname —
 * used by both the desktop language picker and the mobile hamburger menu's
 * language entry, so switching language on a project detail page lands on
 * that same project's translation (matched by shared `image`) rather than
 * bouncing to the bare portfolio listing.
 */
export async function getLocalizedUrls(pathname: string, currentLocale?: Locale): Promise<Record<Locale, string>> {
    const currentLang = currentLocale ?? defaultLocale;
    const currentPath = !currentLocale ? pathname : pathname
        .replace(new RegExp(`^/${currentLocale}/?`), '')
        .replace(/^\//, '');

    const projectMatch = currentPath.match(/^portfolio\/(.+)$/);
    const currentProject = projectMatch
        ? await getEntry('portfolio', `${currentLang}/${projectMatch[1]}`)
        : undefined;

    const translatedProjectUrls: Partial<Record<Locale, string>> = {};
    if (currentProject) {
        const siblings = await getCollection('portfolio',
            project => project.data.image === currentProject.data.image);
        for (const project of siblings) {
            translatedProjectUrls[project.data.lang] = getProjectUrl(project);
        }
    }

    const targetPath = !currentPath.startsWith('portfolio/') ? currentPath : 'portfolio';

    return Object.fromEntries(locales.map(lang => [
        lang,
        translatedProjectUrls[lang] ?? (getRelativeLocaleUrl(lang, targetPath).replace(/\/$/, '') || '/')
    ])) as Record<Locale, string>;
}
