import enText from "./text/en.json";
import esText from "./text/es.json";

export type Translations = typeof enText;

export type DeepPartial<T> = T extends Array<unknown>
    ? T
    : T extends object
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : T;

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Locales other than `defaultLocale` may omit keys; `useTranslation` fills gaps from `defaultLocale`. */
export const translations: Record<Locale, DeepPartial<Translations>> = {
    en: enText,
    es: esText,
};
