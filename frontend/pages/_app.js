import 'tailwindcss/tailwind.css'
import HeadScript from 'Components/Common/HeadScript'
import Layout from 'Layout'
import { store } from 'store'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <HeadScript />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
