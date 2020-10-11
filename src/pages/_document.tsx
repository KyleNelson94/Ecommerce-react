import * as React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleElement();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};