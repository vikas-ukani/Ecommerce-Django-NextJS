import 'tailwindcss/tailwind.css'
import HeadScript from 'Components/Common/HeadScript'
import Layout from 'Layout'
import { store } from 'store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <HeadScript />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
