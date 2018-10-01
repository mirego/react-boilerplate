import React from 'react';

const t = (key) => key;

const i18n = {
  t: t,
  language: 'en',
  changeLanguage(language) {
    this.language = language;
  }
}

export const I18n = ({children}) => (
  <>
    {children(t, i18n)}
  </>
);

export const translate = (namespace) => (Component) => (props) => (
  <Component {...props} t={t} i18n={i18n} />
);

export const I18nextProvider = ({children}) => (
  <>
    {children}
  </>
);
