// import '~slick-carousel/slick/slick.css'
// import '~slick-carousel/slick/slick-theme.css'
import { SessionProvider } from 'next-auth/react'

import { BlogThemeProvider } from 'context/BlogThemeContext'
import { AppProps } from 'next/app'
import Head from 'next/head'

import NextNprogress from 'nextjs-progressbar'

// Estilos Globais
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <BlogThemeProvider>
        <NextNprogress
          color={theme.colors.secondary}
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
        />
        <Head>
          <title>Claquete</title>
          <link rel="shortcut icon" href="/assets/images/favicon.png" />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="Website about movies" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </BlogThemeProvider>
    </SessionProvider>
  )
}

export default App
