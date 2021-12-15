// import '~slick-carousel/slick/slick.css'
// import '~slick-carousel/slick/slick-theme.css'

import { BlogThemeProvider } from 'context/BlogThemeContext'
import { AppProps } from 'next/app'
import Head from 'next/head'

import Router from 'next/router'
import NProgress from 'nprogress'
import '/public/nprogress.css'

//NPROGRESS
//mostra uma barra no top enquanto faz a transição para uma nova página
Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Estilos Globais
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
