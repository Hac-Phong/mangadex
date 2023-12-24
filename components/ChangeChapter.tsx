'use client'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

import { useParams, useRouter } from 'next/navigation'

type Props = {
  props: {
    id: number
    name: string
  }[]
}
const ChangeChapter = ({ props }: Props) => {
  const currentChapter = useRouter()
  const { id, chapterId } = useParams()

  const changeEps = (type: 'prev' | 'next') => {
    const eps = [...props].reverse()
    const epsIdx = eps.findIndex((ep) => ep.id === Number(chapterId))
    const nextEps = epsIdx + (type === 'next' ? 1 : -1)
    currentChapter.push(`/comic/${id}/chapter/${eps[nextEps].id}`)
  }
  return (
    <div className="w-full flex gap-3 flex-1 justify-between py-2 px-4">
      <button
        onClick={() => changeEps('prev')}
        disabled={Number(chapterId) === props.at(-1)?.id}
        className="px-3 py-1 bg-accent rounded-md w-full hover:bg-accent_hover flex items-center justify-center"
      >
        <FaChevronLeft /> Prev
      </button>
      <button className="px-3 py-1 bg-accent rounded-md w-full">Muc Luc</button>

      <button
        onClick={() => changeEps('next')}
        disabled={Number(chapterId) === props[0].id}
        className="px-3 py-1 bg-accent rounded-md w-full hover:bg-accent_hover flex items-center justify-center"
      >
        Next <FaChevronRight />
      </button>
    </div>
  )
}

export default ChangeChapter
