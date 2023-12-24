import ChangeChapter from '@/components/ChangeChapter'
import ImageComic from '@/components/Image'
import { useFetchData } from '@/hook/useFetchData'
import Link from 'next/link'
import { Metadata } from 'next'
import { UseMetaData } from '@/hook/useMetaData'
import { Suspense } from 'react'
export async function generateMetadata({
  params,
}: ChapterParams): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const chapters: ChapterProps = await useFetchData(
    `/comics/${params.id}/chapters/${params.chapterId}`
  )
  return UseMetaData({
    title: `${chapters.comic_name} - ${chapters.chapter_name}`,
    description: 'Add description here',
  })
}
type ChapterParams = {
  params: {
    id: string
    chapterId: string
  }
}
type ChapterProps = {
  images: [
    {
      page: number
      src: string
      backup_src: string
    }
  ]
  chapters: [
    {
      id: number
      name: string
    }
  ]
  chapter_name: string
  comic_name: string
}
const ChapterPage = async ({ params }: ChapterParams) => {
  const chapters: ChapterProps = await useFetchData(
    `/comics/${params.id}/chapters/${params.chapterId}`
  )

  return (
    <div className="flex flex-col ">
      <div className="px-4 pt-10 flex items-center tracking-normal">
        <Link href="/">
          <h2 className="text-lg hover:text-orang">
            Home<span>/</span>
          </h2>
        </Link>
        <Link href={`/comic/${params.id}`}>
          <h1 className="text-lg hover:text-orang">{chapters.comic_name}</h1>
        </Link>
        <h3 className="text-lg">/{chapters.chapter_name}</h3>
      </div>
      <ChangeChapter props={chapters.chapters} />
      <div className="flex flex-col justify-between items-center mx-auto w-full border-y my-6">
        <div>
          <Suspense>
            {chapters.images.map((image) => (
              <ImageComic
                src={image.src}
                height={550}
                width={550}
                alt={chapters.chapter_name}
                key={image.page}
              />
            ))}
          </Suspense>
        </div>
      </div>
      <ChangeChapter props={chapters.chapters} />
    </div>
  )
}

export default ChapterPage
