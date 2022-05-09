import { useEffect } from 'react'

import { ContextProvider } from 'context/context'

import Layout from 'components/Layout/Layout'

import './app.css'

/* Component -> Page to be rendered */
/* pageProps -> Props passed from data fetching functions (getStaticProps and getServerSideProps) */
export default function App({ Component, pageProps }) {
  console.log('Rendering App') /* DEBUGGING */

  useEffect(() => {
    console.log('App -> useEffect of component did mount') /* DEBUGGING */
  }, [])

  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}
