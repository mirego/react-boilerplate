// Vendor
import I18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XhrBackend from 'i18next-xhr-backend';

const loadLocales = async (
  url: string,
  _options: any,
  callback: (locale: any, status: any) => void
) => {
  try {
    // tslint:disable-next-line prefer-template
    const locale = await import('react-boilerplate/locales/' + url + '.json');
    callback(locale, {status: '200'});
  } catch (e) {
    callback(null, {status: '404'});
  }
};

const i18NextConfig: I18next.InitOptions = {
  backend: {
    ajax: loadLocales,
    loadPath: '{{lng}}/{{ns}}',
    parse: (data: any) => data
  },
  debug: process.env.NODE_ENV === 'development',
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

export const createI18next = () => {
  if (I18next.isInitialized) {
    return I18next.cloneInstance();
  }

  return I18next.use(XhrBackend)
    .use(LanguageDetector)
    .init(i18NextConfig);
};

export default createI18next;
