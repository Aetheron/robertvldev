import Script from "next/script"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        {children}
      </body>
    </html>
  )
}
