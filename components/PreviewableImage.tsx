"use client"

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { XCircleIcon } from "@heroicons/react/24/outline"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

export default function PreviewableImage({
  image,
  altText,
}: {
  image: StaticImageData
  altText: string
}) {
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <>
      <Image
        className="w-full p-3 rounded-3xl cursor-pointer"
        src={image}
        alt={altText}
        placeholder="blur"
        onClick={() => {
          setPreviewOpen(true)
        }}
      />
      <Dialog
        open={previewOpen}
        onClose={setPreviewOpen}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:mx-6 sm:my-4 sm:w-auto data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
            >
              <div className="group">
                <div>
                  <XCircleIcon
                    className="absolute right-1 top-1 w-10 h-10 cursor-pointer text-red-700 opacity-0 rounded-full group-hover:opacity-100 hover:bg-red-700 hover:text-white"
                    onClick={() => setPreviewOpen(false)}
                  />
                </div>
                <div className="text-center">
                  <Image
                    className="w-auto max-h-[90vh]"
                    src={image}
                    alt={altText}
                    placeholder="blur"
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
