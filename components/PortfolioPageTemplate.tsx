import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImageData } from "next/image"
import { BreadCrumb } from "primereact/breadcrumb"
import { Chip } from "primereact/chip"
import React from "react"
import Image from "next/image"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"

export interface PortfolioPageTemplateProps {
  children: React.ReactNode
  title: string
  heroImage: StaticImageData
  pills: string[]
}

export const PortfolioPageTemplate: React.FC<PortfolioPageTemplateProps> = ({
  children,
  title,
  heroImage,
  pills,
}) => {
  const items = [{ label: "Portfolio", url: "/portfolio" }, { label: title }]

  return (
    <div>
      <BreadCrumb
        className="bg-gray-800 mb-4"
        home={{ icon: <FontAwesomeIcon icon={faHome} />, url: "/" }}
        model={items}
      />

      <ParallaxBanner className="w-screen h-[calc(100vh-175px)] ml-[50%] -translate-x-1/2">
        <ParallaxBannerLayer speed={-20}>
          <Image
            src={heroImage}
            className="w-screen max-w-screen blur-md brightness-50"
            alt=""
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

      {/* </div>
    <div class="card-container">
      <slot name="cards"></slot>
    </div>
    <div class="screenshots">
      <img :id="sc.id" :src="sc.src" :alt="sc.alt" v-for="sc in screenshots" />
    </div>
    <v-overlay :activator="'#' + sc.id" v-for="sc in screenshots"
      ><img class="overlay" :src="sc.src" :alt="sc.alt"
    /></v-overlay>
    <slot></slot> */}
    </div>
  )
}

export default PortfolioPageTemplate
