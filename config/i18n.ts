import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './languages/en/translation.json';
import translationFR from './languages/fr/translation.json';
import translationES from './languages/es/translation.json';
import translationIT from './languages/it/translation.json';
import translationPT from './languages/pt/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES,
  },
  it: {
    translation: translationIT,
  },
  pt: {
    translation: translationPT
  }
};

i18n.use(initReactI18next as any) // Ajuste para permitir o uso de initReactI18next sem erros de tipagem
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
