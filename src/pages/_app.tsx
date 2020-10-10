import * as React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
// need to add a cart state
import withData from '../utils/withData';
import Page from '../component/page';

function MyApp({ Component, apollo, pageProps }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // this exposes the url params to the page component so we can use things like item ID in our queries
  pageProps = ctx.query;
  return { pageProps };
};

export default withData(MyApp);