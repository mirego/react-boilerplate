// Vendor
import React, {FunctionComponent} from 'react';
import styled from 'react-emotion/macro';

// Vendor Components
import {NamespacesConsumer as I18n} from 'react-i18next';

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

export const Header: FunctionComponent = () => (
  <I18n ns="common">
    {t => (
      <Container>
        <Logo />
        <Title>{t('title')}</Title>
        <Navigation />
      </Container>
    )}
  </I18n>
);

export default Header;
