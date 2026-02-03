import { defaultLocale, translations, type Locale } from "./constants";

export function useTranslation(locale?: Locale) {
    return translations[locale || defaultLocale];
}
