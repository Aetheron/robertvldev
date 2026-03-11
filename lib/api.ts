const CERTIFICATIONS_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  dateIssued
  issuer

`

const COURSES_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  dateIssued
  issuer
`

const TIMELINE_ITEM_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title,
  order,
  content,
  eventType
`

export type CertificationDataType = {
  title: string
  dateIssued: number
  issuer: string
}

export type CertificationCollectionType = {
  data?: { certificationCollection?: { items: CertificationDataType[] } }
}

export type CourseDataType = {
  title: string
  dateIssued: number
  issuer: string
}

export type CourseCollectionType = {
  data?: { courseCollection?: { items: CourseDataType[] } }
}

export type TimelineItemDataType = {
  title: string
  order: number
  content: string
  eventType: string
}

export type TimelineItemCollectionType = {
  data?: { timelineItemCollection?: { items: TimelineItemDataType[] } }
}

async function fetchGraphQL(query: string, cacheTag: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches with the passed cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: [cacheTag] },
    }
  ).then((response) => response.json())
}

export async function getAllCertifications(isDraftMode = false) {
  const certifications: CertificationCollectionType = await fetchGraphQL(
    `
    query {
      certificationCollection {
        items {
          ${CERTIFICATIONS_GRAPHQL_FIELDS}
        }
      }
    }
  `,
    "certifications",
    isDraftMode
  )

  return certifications.data?.certificationCollection?.items
}

export async function getAllCourses(isDraftMode = false) {
  const courses: CourseCollectionType = await fetchGraphQL(
    `
    query {
      courseCollection {
        items {
          ${COURSES_GRAPHQL_FIELDS}
        }
      }
    }
  `,
    "courses",
    isDraftMode
  )

  return courses.data?.courseCollection?.items
}

export async function getAllTimelineItems(isDraftMode = false) {
  const timelineItems: TimelineItemCollectionType = await fetchGraphQL(
    `
    query {
      timelineItemCollection(order:order_ASC) {
        items {
          ${TIMELINE_ITEM_GRAPHQL_FIELDS}
        }
      }
    }
    `,
    "timelineItems",
    isDraftMode
  )

  return timelineItems.data?.timelineItemCollection?.items
}
