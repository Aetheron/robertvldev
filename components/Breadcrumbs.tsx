import { HomeIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export type BreadcrumbsType = {
  currentPageTitle: string
  links: { title: string; href: string }[]
} & HTMLAttributes<HTMLElement>

export default function Breadcrumbs({
  className,
  currentPageTitle,
  links,
}: BreadcrumbsType) {
  return (
    <nav aria-label="Breadcrumb" className={twMerge("flex my-4", className)}>
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              href="/"
              className="text-gray-400 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-300"
            >
              <HomeIcon aria-hidden="true" className="size-6 shrink-0" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {links.map((link) => (
          <li key={link.title}>
            <div className="flex items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-300 dark:text-gray-600"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={link.href}
                className="ml-4 text-lg font-medium text-gray-500 hover:text-orange-700 dark:text-gray-400 dark:hover:text-orange-300"
              >
                {link.title}
              </Link>
            </div>
          </li>
        ))}
        <li>
          <div className="flex items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="size-5 shrink-0 text-gray-300 dark:text-gray-600"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <p
              className="ml-4 text-lg font-medium text-gray-500 dark:text-gray-200"
              aria-current="page"
            >
              {currentPageTitle}
            </p>
          </div>
        </li>
      </ol>
    </nav>
  )
}
