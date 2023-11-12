import '../styles/globals.css'
import Head from 'next/head'
import favicon from '../public/favicon.ico'
import foto from '../public/profile.png'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <title>Ali Anwar</title>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://alianw.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ali Anwar" />
        <meta property="og:description" content="Hello i am Frontend Developer" />
        <meta property="og:image" content={foto} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="alianw.netlify.app" />
        <meta property="twitter:url" content="https://alianw.netlify.app/" />
        <meta name="twitter:title" content="Ali Anwar" />
        <meta name="twitter:description" content="Hello i am Frontend Developer" />
        <meta name="twitter:image" content={foto} />


      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
