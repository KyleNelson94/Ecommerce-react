import * as React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from '../component/page';
import '../../public/index.css';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import '../../public/nprogress.css';
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
function MyApp({ Component, apollo, pageProps }:Props) {

  console.log('***************   App Component Render  ****************');
  console.log('Hello Component --------------->', Component);
  console.log('Hello Page props --------------------->', pageProps);
  console.log('Hello Apollo --------------------->', apollo);
  console.log('**************************************************');
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
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