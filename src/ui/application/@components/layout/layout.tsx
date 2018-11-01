// Vendor
import React, {SFC} from 'react';
import styled from 'react-emotion/macro';

// Components
import Header from './header';

const Content = styled.div`
  padding: 25px;
`;

export const Layout: SFC = ({children}) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);

export default Layout;
