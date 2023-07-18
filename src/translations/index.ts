import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import jaTranslation from "./ja";

const resources = {
  ja: {
    translation: jaTranslation,
  },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ja",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
