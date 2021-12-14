// import '~slick-carousel/slick/slick.css'
// import '~slick-carousel/slick/slick-theme.css'

import { BlogThemeProvider } from 'context/BlogThemeContext'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <Head>
        <title>Claquete</title>
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Website about movies" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </BlogThemeProvider>
  )
}

export default App
