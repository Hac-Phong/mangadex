'use client'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
type ImageProps = {
  src: string
  alt?: string
  width?: number
  height?: number
  className?: string
  onError?: () => any
}

const ImageComic: FC<ImageProps> = (props) => {
  const {
    src,
    alt = '',
    className = '',
    height = 450,
    width = 300,
    // onError,
  } = props
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [imgSrc, setImgSrc] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  return (
    <div
      className={`bg-stone-900 w-full ${
        isComplete ? 'animate-none' : 'animate-pulse'
      } `}
    >
      <Image
        src={isError ? '/err.png' : src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsComplete(true)}
        onError={() => setIsError(true)}
        loading="lazy"
        className={`duration-300 object-cover h-full w-full ${
          isComplete ? 'opacity-100 blur-none' : 'opacity-0 blur-lg'
        }  ${className}`}
      />
    </div>
  )
}

export default ImageComic
