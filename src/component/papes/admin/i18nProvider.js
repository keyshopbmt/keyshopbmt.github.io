import polyglotI18nProvider from "ra-i18n-polyglot";
import vi from "ra-language-vietnamese";

const translations = { vi };

export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  "vi", // default locale
  [
    { locale: "vi", name: "Vietnamese" },
  ],
  { allowMissing: true }
);
