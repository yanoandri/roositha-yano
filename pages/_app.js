import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Roositha & Yano</title>
        <meta name="title" content="Roositha & Yano" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
