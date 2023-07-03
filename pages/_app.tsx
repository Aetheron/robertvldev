import { AppProps } from "next/app"
import Head from "next/head"
import "@/app/globals.css"
import "@/app/primereact_theme.css"
import "primereact/resources/primereact.min.css"
import { Oxygen } from "next/font/google"

const oxygen = Oxygen({ subsets: ["latin"], weight: "300" })

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
