import I18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from 'react-boilerplate/locales';
import {initReactI18next} from 'react-i18next';

const i18NextConfig: I18next.InitOptions = {
  debug: process.env.NODE_ENV === 'development',
  defaultNS: 'common',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  load: 'languageOnly',
  resources,
  whitelist: ['fr', 'en']
};

export const LanguageSanitizer = {
  type: '3rdParty',

  init(i18n: I18next.i18n) {
    const language = i18n.language.split('-').shift();

    if (language && language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }
};

const initializeI18next = () => {
  I18next.use(initReactI18next)
    .use(LanguageDetector)
    .use(LanguageSanitizer)
    .init(i18NextConfig);

  return I18next;
};

export default initializeI18next;
