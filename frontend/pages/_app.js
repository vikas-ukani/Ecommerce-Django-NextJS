import 'tailwindcss/tailwind.css'
import 'nprogress/nprogress.css'
import HeadScript from 'Components/Common/HeadScript'
import Layout from 'Layout'
import { store } from 'store'
import { Provider } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastProvider >
        <HeadScript />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </Provider>
  )
}

export default MyApp
