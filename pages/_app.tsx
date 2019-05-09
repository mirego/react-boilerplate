import React from 'react';
import NextApp, {Container, NextAppContext} from 'next/app';
import Layout from 'boilerplate/components/layout';
import {appWithTranslation} from 'boilerplate/lib/i18n';

import 'simple-css-reset/reset.css';
import 'boilerplate/styles/global.css';

class App extends NextApp {
  static async getInitialProps({Component, ctx}: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default appWithTranslation(App);
