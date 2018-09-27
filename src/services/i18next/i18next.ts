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
    const locale = await import(`react-boilerplate/configurations/locales/${url}.json`);
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
  ns: ['common'],
  react: {
    wait: true
  }
};

export class I18nextService {
  private _i18n = I18next.use(XhrBackend)
    .use(LanguageDetector)
    .init(i18NextConfig);

  public get i18n() {
    return this._i18n;
  }
}

export default new I18nextService();
