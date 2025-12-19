import { defaultLocale, translations, type Locale } from "./constants";

/*export function getLocaleFromUrl(url: string) {
  const locale = url.split("/")[1] as Locale;
  if (!locales.includes(locale)) return defaultLocale;
  return locale;
}*/


export function useTranslation(locale?: Locale) {
    return translations[locale || defaultLocale];
}

/*export function getUrlWithLocale(url: string, locale: Locale) {
  return `/${locale}${url}`;
}*/