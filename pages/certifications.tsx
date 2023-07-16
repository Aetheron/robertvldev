import CertificationItem, {
  CertificateItemProps,
} from "@/components/CertificationItem"
import CourseItem from "@/components/CourseItem"
import {
  StoryblokComponent,
  getStoryblokApi,
  setComponents,
  useStoryblokState,
} from "@storyblok/react"
import type {
  ISbStoryData,
  StoryblokComponentType,
} from "@storyblok/react/dist/types"
import type { ISbLinkURLObject } from "storyblok-js-client"
import Head from "next/head"
import { NextPage } from "next/types"
import { Card } from "primereact/card"
import { Skeleton } from "primereact/skeleton"
import { useEffect, useState } from "react"

interface SBStoryType {
  cv: number
  links: (ISbStoryData | ISbLinkURLObject)[]
  rels: ISbStoryData[]
  story: ISbStoryData
}
interface SBComponentType
  extends StoryblokComponentType<string>,
    CertificateItemProps {}

const Certifications: NextPage = () => {
  const [certifications, setCertifications] = useState<CertificateItemProps[]>()
  useEffect(() => {
    async function fetchData() {
      let certicationCards: CertificateItemProps[] = []

      const storyblokApi = getStoryblokApi()
      const { data }: { data: SBStoryType } = await storyblokApi.get(
        "cdn/stories/certifications",
        {
          version: "draft",
        }
      )
      data.story.content.body.map((item: SBComponentType) => {
        if (item.component == "certification") {
          certicationCards.push({
            title: item.title,
            date: item.date,
            issuer: item.issuer,
          })
        }
      })
      setCertifications(certicationCards)
    }
    fetchData()
  })

  return (
    <>
      <Head>
        <title>Certifications - robertvl.dev</title>
      </Head>
      <main>
        <div>
          <h1 className="text-center">Certifications</h1>
          <div className="flex flex-wrap justify-center gap-5 my-4">
            {certifications ? (
              certifications.map((certificate, i) => (
                <CertificationItem
                  key={i}
                  title={certificate.title}
                  date={certificate.date}
                  issuer={certificate.issuer}
                />
              ))
            ) : (
              <Card
                className="bg-gray-800 shadow-md hover:shadow-xl hover:transition-all"
                title={<Skeleton width="15rem" height="1.5rem" />}
              >
                <div className="flex flex-nowrap gap-5 mt-2">
                  <Skeleton width="3rem" height="3rem" />
                  <div>
                    <Skeleton className="mb-5" width="5rem" />
                    <Skeleton width="5rem" />
                  </div>
                </div>
              </Card>
            )}
          </div>
          <h1 className="text-center">Courses</h1>
          <div className="flex flex-wrap justify-center gap-5 my-4">
            <CourseItem
              title="React Fundamentals"
              date="2022 - 2023"
              issuer="Kent C. Dodds"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Certifications
