"use client"

import Image, { StaticImageData } from "next/image"
import React from "react"
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax"
import Breadcrumbs from "./Breadcrumbs"
import FlipCard, { CardType } from "./FlipCard"
import Pill from "./Pill"
import PreviewableImage from "./PreviewableImage"

export interface ScreenshotType {
  src: StaticImageData
  alt: string
}
export interface PortfolioPageTemplateProps {
  children?: React.ReactNode
  title: string
  heroImage: StaticImageData
  pills: string[]
  cards?: CardType[]
  screenshots?: ScreenshotType[]
}

const PortfolioPageTemplate: React.FC<PortfolioPageTemplateProps> = ({
  children,
  title,
  heroImage,
  pills,
  cards,
  screenshots,
}) => {
  const breadcrumbLinks = [
    {
      title: "Portfolio",
      href: "/portfolio",
    },
  ]

  return (
    <ParallaxProvider>
      <div>
        <Breadcrumbs
          // className="bg-gray-800 p-4 rounded"
          currentPageTitle={title}
          links={breadcrumbLinks}
        ></Breadcrumbs>
        <ParallaxBanner className="h-[75vh] w-screen max-w-[100vw] ml-[50%] -translate-x-1/2 lg:h-[calc(100vh-175px)]">
          <ParallaxBannerLayer speed={-20}>
            <Image
              src={heroImage}
              className="h-full blur-md brightness-50 lg:w-screen lg:max-w-[100vw]"
              alt=""
              priority={true}
            ></Image>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
              <h1>{title}</h1>
              <div className="flex flex-wrap justify-center gap-5 mb-6  text-center">
                {pills.map((skill, i) => (
                  <Pill
                    key={i}
                    className="bg-orange-500 dark:bg-orange-500 text-sm font-medium text-white dark:text-white"
                  >
                    {skill}
                  </Pill>
                ))}
              </div>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
        {cards && (
          <div className="flex flex-wrap gap-2 justify-evenly mt-5">
            {cards.map((card, i) => (
              <FlipCard
                key={i}
                title={card.title}
                front={card.front}
                back={card.back}
              ></FlipCard>
            ))}
          </div>
        )}
        <div className="flex flex-wrap mt-5">
          {screenshots &&
            screenshots.map((image, i) => (
              <div key={i} className="lg:flex-[50%] lg:max-w-[50%]">
                <PreviewableImage image={image.src} altText={image.alt} />
              </div>
            ))}
        </div>
        {children && children}
      </div>
    </ParallaxProvider>
  )
}

export default PortfolioPageTemplate
