import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>#RoosithaYano</title>
        <meta name="title" content="#RoosithaYano" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
