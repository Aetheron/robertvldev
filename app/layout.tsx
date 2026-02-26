import logo from "@/public/logo.svg"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"
import { Inter, Oxygen } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const oxygen = Oxygen({ subsets: ["latin"], weight: "300" })

export const metadata: Metadata = {
  viewport: { minimumScale: 1, initialScale: 1, width: "device-width" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oxygen.className}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {/* <!-- Google Tag Manager (noscript) --> */}
          {`<noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N34NH46"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>`}
          {/* <!-- End Google Tag Manager (noscript) --> */}
        </Script>
        <div id="__next">
          <header className="leading-normal max-h-screen mb-4 lg:flex">
            <Image
              alt="Site logo"
              className="block mt-0 mb-8 mx-auto"
              src={logo}
              width="125"
              height="125"
              priority
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
          {children}
          <SpeedInsights />
          <footer className="text-center mt-7">
            <p>© 2020 - {new Date().getFullYear()} Robert VanLonkhuyzen</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
