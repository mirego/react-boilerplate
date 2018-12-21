// Vendor
import React, {FunctionComponent} from 'react';
import styled from 'react-emotion/macro';

// Vendor Components
import {NamespacesConsumer as I18n} from 'react-i18next';
import {Link as OriginalLink} from 'react-router-dom';

// Components
import LanguageSwitcher from './language-switcher';

const Container = styled.nav`
  display: flex;
  flex: 1 1 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

const Link = styled(OriginalLink)`
  margin: 15px;
  text-decoration: none;
  font-size: 18px;
  color: #61dafb;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export const Navigation: FunctionComponent = () => (
  <I18n ns="common">
    {t => (
      <Container>
        <Link to="/">{t('header.links.home')}</Link>
        <Link to="/about">{t('header.links.about')}</Link>
        <LanguageSwitcher />
      </Container>
    )}
  </I18n>
);

export default Navigation;
