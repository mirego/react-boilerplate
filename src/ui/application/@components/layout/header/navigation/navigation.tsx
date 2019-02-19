import styled from '@emotion/styled/macro';
import React, {FunctionComponent} from 'react';
import {useTranslation} from 'react-i18next';
import {Link as OriginalLink} from 'react-router-dom';
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

const Navigation: FunctionComponent = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Link to="/">{t('header.links.home')}</Link>
      <Link to="/about">{t('header.links.about')}</Link>
      <LanguageSwitcher />
    </Container>
  );
};

export default Navigation;
