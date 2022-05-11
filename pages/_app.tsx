import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '../styles/globals.css'



type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element | ReactElement
}

type AppPropsWithLayout =  AppProps & {
  Component : NextPageWithLayout
}


function MyApp({ Component, pageProps } : AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
  // return <Component {...pageProps} />
}

export default MyApp
