import React from 'react';
import {NextFunctionComponent} from 'next';
import styled from '@emotion/styled';
import logo from './logo.svg';
import Link from 'next/link';

const HeaderContainer = styled.header`
  position: sticky;
  display: grid;
  grid-template-columns: 300px 1fr;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
`;

const LogoContainer = styled.a`
  display: block;
  align-self: center;
  padding-left: 16px;

  img {
    display: block;
  }
`;

const Header: NextFunctionComponent = () => {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
