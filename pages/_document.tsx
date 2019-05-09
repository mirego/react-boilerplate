import React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  DocumentProps,
  NextDocumentContext
} from 'next/document';
import {extractCritical} from 'emotion-server';
import {EmotionCritical} from 'create-emotion-server';
import favicons from 'boilerplate/lib/favicons';

export default class MyDocument extends Document<EmotionCritical> {
  static getInitialProps({renderPage}: NextDocumentContext) {
    const page = renderPage();
    const styles = extractCritical(page.html!);

    return {...page, ...styles};
  }

  constructor(props: DocumentProps & EmotionCritical) {
    super(props);
    const {__NEXT_DATA__, ids} = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {favicons}
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
