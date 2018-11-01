// Vendor
import React from 'react';

// Vendor Components
import {Helmet} from 'react-helmet';
import {NamespacesConsumer as I18n} from 'react-i18next';

export const About = () => (
  <I18n ns={['common', 'about']}>
    {t => (
      <>
        <Helmet>
          <title>
            {t('title')} | {t('about:title')}
          </title>
        </Helmet>

        <h1>{t('about:title')}</h1>
      </>
    )}
  </I18n>
);

export default About;
