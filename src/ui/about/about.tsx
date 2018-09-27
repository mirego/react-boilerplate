// Vendor
import React from 'react';

// Vendor Components
import {I18n} from 'react-i18next';

export const About = () => <I18n ns="about">{t => <h1>{t('title')}</h1>}</I18n>;

export default About;
