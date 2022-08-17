import type { AppProps } from 'next/app'

import { Global } from '@emotion/react'
import { Layout } from '../components/Layout'
import '../styles/styles.css'
import 'tailwindcss/tailwind.css'

import { GlobalStyles } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
