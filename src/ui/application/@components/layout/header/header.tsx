// Vendor
import React, {SFC} from 'react';
import styled from 'react-emotion';

// Vendor Components
import {I18n} from 'react-i18next';

// Components
import Logo from './logo';
import Navigation from './navigation';

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #282c34;
`;

const Title = styled.span`
  flex: 0 0 auto;
  font-size: 38px;
  font-weight: bold;
  color: #fff;
`;

export const Header: SFC = () => (
  <I18n>
    {t => (
      <Container>
        <Logo />
        <Title>{t('header.title')}</Title>
        <Navigation />
      </Container>
    )}
  </I18n>
);

export default Header;
