import styled from '@emotion/styled/macro';
import React, {FunctionComponent} from 'react';
import {useTranslation} from 'react-i18next';
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

const Header: FunctionComponent = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Logo />
      <Title>{t('title')}</Title>
      <Navigation />
    </Container>
  );
};

export default Header;
