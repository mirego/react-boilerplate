import styled from '@emotion/styled/macro';
import React, {FunctionComponent} from 'react';
import Header from './header';

const Content = styled.div`
  padding: 25px;
`;

const Layout: FunctionComponent = ({children}) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);

export default Layout;
