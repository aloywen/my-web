import '../styles/globals.css'
import Head from 'next/head'
import favicon from '../public/favicon.ico'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href={favicon} />
        <title>Ali Anwar</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
