import Image, { StaticImageData } from "next/image"
import Pill from "./Pill"

export type PortfolioImageCardType = {
  title: string
  type: string
  link: string
  image: StaticImageData
  position?: "left" | "right" | "center"
}

export default function PortfolioLImageCard({
  item,
}: {
  item: PortfolioImageCardType
}) {
  return (
    <div className="group lg:min-w-xsm relative isolate flex min-w-full flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 md:min-w-3xs dark:bg-gray-800">
      <Image
        alt=""
        src={item.image}
        className={`absolute inset-0 -z-10 size-full transform object-cover transition-transform group-hover:scale-105 ${
          item.position == "left"
            ? "object-left"
            : item.position == "right"
            ? "object-right"
            : ""
        }`}
        // placeholder="blur"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40 dark:from-black/80 dark:via-black/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
        <Pill className="bg-gray-100 text-orange-400 dark:bg-gray-400/60 dark:text-orange-500">
          {item.type}
        </Pill>
      </div>
      <h3 className="mt-3 text-lg/6 font-semibold text-gray-50 hover:text-gray-100">
        <a href={item.link}>
          <span className="absolute inset-0" />
          {item.title}
        </a>
      </h3>
    </div>
  )
}
