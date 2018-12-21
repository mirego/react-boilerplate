// Vendor
import React from 'react';

// Vendor Components
import {Helmet} from 'react-helmet';
import {NamespacesConsumer as I18n} from 'react-i18next';

// Styles
import styles from './home.module.css';

export const Home = () => (
  <I18n ns={['common', 'home']}>
    {t => (
      <>
        <Helmet>
          <title>{t('title')}</title>
        </Helmet>

        <h1>{t('home:title')}</h1>

        <p className={styles.example}>{t('home:cssModuleExample')}</p>
      </>
    )}
  </I18n>
);

export default Home;
