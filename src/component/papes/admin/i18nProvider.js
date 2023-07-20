import polyglotI18nProvider from "ra-i18n-polyglot";
import vi from "ra-language-vietnamese";
import en from "ra-language-english";

const translations = { en, vi};

export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  "en", // default locale
  [
    { locale: "en", name: "English" },
    { locale: "vi", name: "Vietnam" },
  ],
  { allowMissing: true }
);
