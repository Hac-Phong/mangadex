import { FaRegStar } from 'react-icons/fa'
import { PiListPlus } from 'react-icons/pi'
import { BsBook } from 'react-icons/bs'
import { IoShareSocialOutline, IoFlagOutline } from 'react-icons/io5'
import { CiStar, CiBookmark } from 'react-icons/ci'
import { useFetchData } from '@/hook/useFetchData'
import ImageComic from '@/components/Image'
import ListChapter from '@/components/ListChapter'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { UseMetaData } from '@/hook/useMetaData'
export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ComicId: ComicIDProps = await useFetchData(`/comics/${params.id}`)
  return UseMetaData({
    title: ComicId.title,
    description: ComicId.description,
  })
}
type ComicPageProps = {
  params: {
    id: string
  }
}
type ComicIDProps = {
  title: string
  thumbnail: string
  description: string
  genres: [
    {
      id: string
      name: string
    }
  ]
  total_views: number
  id: string
  other_name: []
  chapters: [
    {
      id: number
      name: string
    }
  ]
  followers: number
  status: string
  authors: string
}
const ComicPage = async ({ params }: ComicPageProps) => {
  const comicId: ComicIDProps = await useFetchData(`/comics/${params.id}`)

  if (!comicId.id) return notFound()
  const buttons = [
    {
      name: 'star',
      icon: <FaRegStar className="w-7 h-7" />,
    },
    {
      name: 'list',
      icon: <PiListPlus className="w-7 h-7" />,
    },
    {
      name: 'book',
      icon: <BsBook className="w-7 h-7" />,
    },
    {
      name: 'flaf',
      icon: <IoFlagOutline className="w-7 h-7" />,
    },
    {
      name: 'share',
      icon: <IoShareSocialOutline className="w-7 h-7" />,
    },
  ]
  return (
    <div className="flex flex-col space-y-4">
      <div className="relative flex h-96 w-full">
        <div className="h-80 relative w-full">
          <ImageComic
            src={comicId.thumbnail}
            height={400}
            width={350}
            alt={comicId.title}
            className=" absolute top-0 left-0 object-center"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-white/50 to-white"></div>
        </div>
        <div className="absolute -bottom-5 justify-center flex flex-col">
          <div className="flex gap-6 px-4 ml-2 ">
            <div className="max-w-48 w-96 rounded overflow-hidden">
              <ImageComic
                src={comicId.thumbnail}
                height={400}
                width={350}
                alt={comicId.title}
                className="shadow-sm"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-4xl line-clamp-2">
                  {comicId.title}
                </h2>
                <div className="flex flex-wrap overflow-hidden gap-1 pt-2">
                  {comicId.genres.map((gener) => (
                    <span
                      key={gener.id}
                      className="uppercase font-bold bg-accent text-[0.625rem] px-1 rounded"
                    >
                      {gener.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-1 ">
                <div className="flex gap-1">
                  <button className=" bg-orang hover:opacity-80 whitespace-nowrap text-center px-6 py-2 rounded-md text-white font-medium">
                    Add To Library
                  </button>
                  {buttons.map((button) => (
                    <button
                      key={button.name}
                      className="px-2 flex justify-center items-center py-2 hover:bg-but/50 rounded-md bg-accent"
                    >
                      {button.icon}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <span className=" text-orang flex items-center justify-center">
                    <CiStar className="w-5 h-5" />
                    {comicId.total_views}
                  </span>
                  <span className=" flex items-center justify-center">
                    <CiBookmark className="w-5 h-5" />
                    {comicId.followers}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-6 pt-10 text-sm leading-5">
        <p>{comicId.description}</p>
      </div>
      <ListChapter props={comicId.chapters.reverse()} />
    </div>
  )
}
export default ComicPage
