import clsx from "clsx"
import { HTMLAttributes } from "react"

export default function Skeleton(props: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={clsx(props.className) + " animate-pulse bg-gray-700 rounded-sm"}
    ></div>
  )
}
