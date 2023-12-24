import { Metadata } from 'next'
type Params = {
  title: string
  description: string
}
export const UseMetaData = (params: Params) => {
  const { title, description } = params
  return {
    title: `${title} | HazyMoon`,
    description,
  } as Metadata
}
