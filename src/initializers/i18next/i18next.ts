// Vendor
import I18next, {InitOptions} from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XhrBackend from 'i18next-xhr-backend';

// Config
import {NODE_ENV} from 'react-boilerplate/configurations/environment';

const loadLocales = async (
  url: string,
  _options: any,
  callback: (locale: any, status: any) => void
) => {
  try {
    const locale = await import('react-boilerplate/configurations/locales/' +
      url +
      '.json');

    callback(locale, {status: '200'});
  } catch (e) {
    callback(null, {status: '404'});
  }
};

const i18NextConfig: InitOptions = {
  backend: {
    ajax: loadLocales,
    loadPath: '{{lng}}/{{ns}}',
    parse: (data: any) => data
  },
  debug: NODE_ENV === 'development',
  defaultNS: 'common',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  load: 'languageOnly',
  react: {
    wait: true
  }
};

const i18next = I18next.use(XhrBackend)
  .use(LanguageDetector)
  .init(i18NextConfig);

export const createI18next = () => i18next.cloneInstance();
export default createI18next;
