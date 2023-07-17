import { AppProps } from "next/app"
import Head from "next/head"
import "@/app/globals.css"
import "@/app/primereact_theme.css"
import "primereact/resources/primereact.min.css"
import { Oxygen } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import logo from "@/public/logo.svg"
import { ParallaxProvider } from "react-scroll-parallax"
import { storyblokInit, apiPlugin } from "@storyblok/react"

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_KEY,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
})

const oxygen = Oxygen({ subsets: ["latin"], weight: "300" })

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <ParallaxProvider>
      <Head>
        <title>robertvl.dev</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <header className="leading-normal max-h-screen mb-4 lg:flex">
        <Image
          alt="Site logo"
          className="block mt-0 mb-8 mx-auto"
          src={logo}
          width="125"
          height="125"
        />

        <div className="w-full">
          <nav className="w-full text-2xl mt-8 flex flex-wrap justify-center lg:text-base">
            <Link
              className="px-4 border-l border-[var(--gray)] first-of-type:border-0"
              href="/"
            >
              Home
            </Link>
            <Link
              className="px-4 border-l border-[var(--gray)] first-of-type:border-0"
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="px-4 border-l border-[var(--gray)] first-of-type:border-0"
              href="/certifications"
            >
              Certifications
            </Link>
            <Link
              className="px-4 border-l border-[var(--gray)] first-of-type:border-0"
              href="/about"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="w-full">
          <nav className="w-full text-center mt-8 text-5xl lg:text-right">
            <a
              className="inline-block px-4 py-0 border-l border-[var(--gray)] first-of-type:border-0"
              href="https://github.com/Aetheron"
              target="_blank"
            >
              <FontAwesomeIcon
                className="block w-11 h-11"
                icon={faGithub}
              ></FontAwesomeIcon>
            </a>
            <a
              className="inline-block px-4 py-0 border-l border-[var(--gray)] first-of-type:border-0"
              href="https://codepen.io/aetheron"
              target="_blank"
            >
              <FontAwesomeIcon
                className="block w-11 h-11"
                icon={faCodepen}
              ></FontAwesomeIcon>
            </a>
            <a
              className="inline-block px-4 py-0 border-l border-[var(--gray)] first-of-type:border-0"
              href="https://linkedin.com/in/robertvanlonkhuyzen"
              target="_blank"
            >
              <FontAwesomeIcon
                className="block w-11 h-11"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
          </nav>
        </div>
      </header>

      <Component {...pageProps} />

      <footer className="text-center mt-7">
        <p>©️ 2020 - {new Date().getFullYear()} Robert VanLonkhuyzen</p>
      </footer>
    </ParallaxProvider>
  )
}
