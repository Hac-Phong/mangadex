import Link from 'next/link'
import ImageComic from './Image'
type LastUpdateProps = {
  id: string
  title: string
  thumbnail: string
  genres: [
    {
      id: string
      name: string
    }
  ]
  updated_at: string
  last_chapter: {
    id: number
    name: string
  }
}
const LastUpdate = ({ props }: { props: LastUpdateProps[] }) => {
  const items = 6
  return (
    <div className="py-10 px-4">
      <h2 className=" font-spartan font-medium text-2xl pb-6">
        Latest Updates
      </h2>
      <div className="flex gap-6 w-full">
        <ItemCol items={props.slice(0, items)} />
        <ItemCol items={props.slice(items, items * 2)} />
      </div>
    </div>
  )
}

function ItemCol({ items }: { items: LastUpdateProps[] }) {
  return (
    <div className="w-full space-y-3 bg-accent px-3 py-2">
      {items.map((prop) => (
        <div key={prop.id} className="flex gap-2 w-full">
          <Link
            href={`/comic/${prop.id}`}
            className="h-20 max-h-20 max-w-16 w-16 shadow-md rounded overflow-hidden"
          >
            <ImageComic
              src={prop.thumbnail}
              height={100}
              width={100}
              alt={prop.title}
              className="shadow-sm !h-20"
            />
          </Link>
          <div className="flex flex-col gap-3 w-full">
            <Link href={`/comic/${prop.id}`}>
              <h1 className=" font-semibold text-base line-clamp-1">
                {prop.title}
              </h1>
            </Link>
            <div className="flex flex-wrap overflow-hidden gap-1">
              {prop.genres.map((gener) => (
                <Link
                  href={`/genre/${gener.id}`}
                  key={gener.id}
                  className="uppercase font-bold bg-white/80 text-[0.525rem] px-1 leading-4 rounded hover:text-orang"
                >
                  {gener.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-between ">
              <span className="text-sm">
                Chương {prop.last_chapter.name.match(/\d+(\.\d+)?/)}
              </span>
              <span className="text-sm">{prop.updated_at}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LastUpdate
