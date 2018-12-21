// Vendor
import React, {FunctionComponent} from 'react';
import styled from 'react-emotion/macro';

// Components
import Header from './header';

const Content = styled.div`
  padding: 25px;
`;

export const Layout: FunctionComponent = ({children}) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);

export default Layout;
