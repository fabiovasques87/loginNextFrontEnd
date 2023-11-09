// // import { Layout } from '@/components/Layout/#index'
// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   // return <Component {...pageProps} />
//   return (
//     // <Layout>
//     //   <Component {...pageProps} />
//     // </Layout>
//   )
// }



import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
