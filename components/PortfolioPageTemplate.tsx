import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImageData } from "next/image"
import { BreadCrumb } from "primereact/breadcrumb"
import { Chip } from "primereact/chip"
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"
import React, { useState } from "react"
import Image from "next/image"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"
import Head from "next/head"
import FlipCard from "./FlipCard"
import { CardType } from "./FlipCard"

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
  const items = [{ label: "Portfolio", url: "/portfolio" }, { label: title }]

  const preview = (source: StaticImageData) => {
    confirmDialog({
      resizable: false,
      draggable: false,
      blockScroll: true,
      dismissableMask: true,
      message: <Image src={source} alt="" />,
      footer: <></>,
      contentClassName: "items-stretch",
    })
  }

  return (
    <>
      <Head>
        <title>{title} - robertvl.dev</title>
      </Head>
      <div>
        <ConfirmDialog />
        <BreadCrumb
          className="bg-gray-800 mb-4"
          home={{ icon: <FontAwesomeIcon icon={faHome} />, url: "/" }}
          model={items}
        />
        <ParallaxBanner className="h-[75vh] w-screen ml-[50%] -translate-x-1/2 lg:h-[calc(100vh-175px)]">
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
                  <Chip key={i} className="bg-orange" label={skill}></Chip>
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
        <div className="flex flex-wrap">
          {screenshots &&
            screenshots?.map((image, i) => (
              <div key={i} className="lg:flex-[50%] lg:max-w-[50%]">
                <Image
                  className="w-full p-3 rounded-3xl cursor-pointer"
                  src={image.src}
                  alt={image.alt}
                  placeholder="blur"
                  onClick={() => preview(image.src)}
                />
              </div>
            ))}
        </div>
        {children && children}
      </div>
    </>
  )
}

export default PortfolioPageTemplate
