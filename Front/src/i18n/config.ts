// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fr } from './local/fr';
import { en } from './local/en';
import { de } from './local/de';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    resources: {
      fr: {
        translation: fr
      },
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    }
  });

export default i18n;