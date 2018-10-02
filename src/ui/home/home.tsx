// Vendor
import React from 'react';

// Vendor Components
import {Helmet} from 'react-helmet';
import {I18n} from 'react-i18next';

export const Home = () => (
  <I18n ns={['common', 'home']}>
    {t => (
      <>
        <Helmet>
          <title>{t('title')}</title>
        </Helmet>

        <h1>{t('home:title')}</h1>
      </>
    )}
  </I18n>
);

export default Home;
