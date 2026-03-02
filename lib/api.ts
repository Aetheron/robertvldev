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

export type CertificationDataType = {
  data?: { certificationCollection?: { items: CertificationType[] } }
}

export type CertificationType = {
  title: string
  dateIssued: number
  issuer: string
}

export type CourseDataType = {
  data?: { courseCollection?: { items: CourseType[] } }
}

export type CourseType = {
  title: string
  dateIssued: number
  issuer: string
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
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: [cacheTag] },
    }
  ).then((response) => response.json())
}

export async function getAllCertifications(isDraftMode = false) {
  const certifications: CertificationDataType = await fetchGraphQL(
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
  const courses: CourseDataType = await fetchGraphQL(
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
