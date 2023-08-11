import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import en from './locales/en/en.json';
import uk from './locales/uk/uk.json';
import { langs } from './langs';

const resources = {
  en: {
    translation: en
  },
  uk: {
    translation: uk
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    supportedLngs: ['en', 'uk'],
    locales: ['en', 'uk'],
    fallbackLng: langs.EN,
    debug: false,
    resources,
    detection: {
      order: ['localStorage', 'querystring', 'htmlTag', 'path'],
      cashes: ['localStorage'],
      htmlTag: document.documentElement
    },
    backend: {
      loadPath: '../data/locales/{{lng}}/translation.json'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
