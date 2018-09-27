// Vendor
import React from 'react';

// Vendor Components
import {I18n} from 'react-i18next';

export const Home = () => <I18n ns="home">{t => <h1>{t('title')}</h1>}</I18n>;

export default Home;
