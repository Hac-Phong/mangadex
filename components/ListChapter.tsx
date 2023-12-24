'use client'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChevronUp } from 'react-icons/fa6'
type ListChapterProps = {
  id: number
  name: string
}

export default function ListChapter({ props }: { props: ListChapterProps[] }) {
  const pathname = usePathname()
  const chunkSize = 50
  const chunkedChapters = Array.from(
    { length: Math.ceil(props.length / chunkSize) },
    (_, index) => props.slice(index * chunkSize, index * chunkSize + chunkSize)
  )
  return (
    <div className="w-full px-6 py-5">
      <h2 className="font-bold text-lg">Chapters</h2>
      <div className="mx-auto w-full rounded-xl bg-white">
        {chunkedChapters.map((row, index) => (
          <Disclosure key={index} className="mt-2" as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-accent px-4 items-center py-2 text-left text-base font-medium hover:bg-accent_hover focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>Volume</span>
                  <span>{index}</span>
                  <FaChevronUp
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-1 gap-1 text-sm text-gray-500 flex flex-wrap">
                  {row.map((chapter) => (
                    <Link
                      href={`${pathname}/chapter/${chapter.id}`}
                      key={chapter.id}
                      className="px-4 py-2 bg-accent rounded-md text-base hover:bg-accent_hover"
                    >
                      {chapter.name.match(/\d+(\.\d+)?/)}
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
