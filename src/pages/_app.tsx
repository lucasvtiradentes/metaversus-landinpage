import { AppProps } from 'next/app'
import Head from 'next/head';
import '../styles/styles.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Metaversus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconx.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
