import React from 'react';

const t = key => key;
const i18n = {language: 'en'};

export const NamespacesConsumer = ({children}) => <>{children(t, {i18n})}</>;
export const withI18n = () => Component => props => (
  <Component t={t} i18n={i18n} {...props} />
);
export const I18nextProvider = ({children}) => <>{children}</>;
