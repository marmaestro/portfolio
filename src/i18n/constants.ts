import enText from "./text/en.json";
import esText from "./text/es.json";

export type Translations = typeof enText;

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const translations: Record<Locale, Translations> = {
    en: enText,
    es: esText,
};
