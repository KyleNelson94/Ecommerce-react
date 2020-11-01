import * as React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from '@component/page/Page';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import '../../public/nprogress.css';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';

interface Props {
  Component: any;
  ctx: any;
  apollo: any;
  pageProps: any;
};

toast.configure({
  draggable: false,
  autoClose: 5000
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete',  () => NProgress.done());
Router.events.on('routeChangeError', (error) => toast(error));

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function MyApp({ Component, apollo, pageProps }:Props) {

  console.log('***************   App Component Render  ****************');
  console.log('Hello Component --------------->', Component);
  console.log('Hello Page props --------------------->', pageProps);
  console.log('Hello Apollo --------------------->', apollo);
  console.log('**************************************************');
  return (
    <React.StrictMode>
      <ApolloProvider client={ client }>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    </React.StrictMode>
  );
};

MyApp.getInitialProps = async function({ Component, ctx }: Props) {

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // this exposes the url params to the page component so we can use things like item ID in our queries
  pageProps = ctx.query;
  return { pageProps };
};

export default MyApp;