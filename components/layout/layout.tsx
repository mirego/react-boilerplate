import React from 'react';
import {NextFunctionComponent} from 'next';
import Header from './header';

const Layout: NextFunctionComponent = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
