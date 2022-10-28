import '../styles/globals.scss'
import '../styles/styles.scss'
import React from 'react';
import Layout from "../components/layout";
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
      <Layout {...pageProps}>
          <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}

export default MyApp
