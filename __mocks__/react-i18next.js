import React from 'react';

const t = key => key;
const i18n = {language: 'en'};

const hookValue = [t, i18n];
hookValue.t = t;
hookValue.i18n = i18n;
export const useTranslation = () => hookValue;

export const initReactI18next = {
  type: '',
  init() {
    return;
  }
};

export const Translation = ({children}) => <>{children(t, {i18n})}</>;

export const withTranslation = () => Component => props => (
  <Component t={t} i18n={i18n} {...props} />
);

export const I18nextProvider = ({children}) => <>{children}</>;
