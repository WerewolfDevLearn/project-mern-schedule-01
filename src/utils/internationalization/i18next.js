import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import en from './locales/en/en.json';
import uk from './locales/uk/uk.json';
import de from './locales/de/de.json';
import pl from './locales/pl/pl.json';
import { langs } from './langs';

const resources = {
  en: {
    translation: en
  },
  uk: {
    translation: uk
  },
  de: {
    translation: de
  },
  pl: {
    translation: pl
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    supportedLngs: ['en', 'uk', 'de', 'pl'],
    locales: ['en', 'uk', 'de', 'pl'],
    fallbackLng: langs.EN,
    debug: false,
    resources,
    detection: {
      order: ['localStorage', 'querystring', 'htmlTag', 'path'],
      cashes: ['localStorage'],
      htmlTag: document.documentElement
    },
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
