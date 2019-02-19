import React, {FunctionComponent} from 'react';
import useTitle from 'react-boilerplate/ui/@hooks/use-title';
import {useTranslation} from 'react-i18next';
import styles from './home.module.css';

const Home: FunctionComponent = () => {
  const {t} = useTranslation(['common', 'home']);

  useTitle(t('title'));

  return (
    <>
      <h1>{t('home:title')}</h1>

      <p className={styles.example}>{t('home:cssModuleExample')}</p>
    </>
  );
};

export default Home;
