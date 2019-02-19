import React, {FunctionComponent} from 'react';
import useTitle from 'react-boilerplate/ui/@hooks/use-title';
import {useTranslation} from 'react-i18next';

const About: FunctionComponent = () => {
  const {t} = useTranslation(['common', 'about']);
  useTitle(`${t('title')} | ${t('about:title')}`);

  return <h1>{t('about:title')}</h1>;
};

export default About;
