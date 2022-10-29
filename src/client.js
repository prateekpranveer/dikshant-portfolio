import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "x57uhf4b",
  dataset: "production",
  apiVersion: '2021-03-25',
  useCdn: false,
})