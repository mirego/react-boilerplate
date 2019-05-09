import NextI18Next from 'next-i18next';
import {reactI18nextModule} from 'react-i18next';

export const {
  i18n,
  withNamespaces,
  appWithTranslation,
  Trans,
  Link,
  Router
} = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr'],
  use: [reactI18nextModule]
});
