'use client'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { useRef } from 'react'
import Link from 'next/link'
import ImageComic from './Image'
type CarouselProps = {
  id: string
  title: string
  thumbnail: string
  genres: {
    id: string
    name: string
  }[]
  short_description: string
}
export default function Carousel({ props }: { props: CarouselProps[] }) {
  const sliderRef = useRef<Slider>(null)
  const gotoNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }
  const gotoPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  }
  return (
    <div className="overflow-hidden relative flex-grow">
      <Slider {...settings} ref={sliderRef}>
        {props.map((item) => (
          <div key={item.id} className="relative">
            <div className="h-96 overflow-hidden">
              <ImageComic
                src={item.thumbnail}
                height={400}
                width={350}
                className="absolute top-0 left-0 object-center"
              />
              <div className="absolute h-full w-full inset-0 bg-gradient-to-b from-white/40 to-white"></div>
              <div className="absolute px-4 flex gap-4 bottom-0">
                <Link
                  href={`/comic/${item.id}`}
                  className="max-w-52 w-full shadow-lg rounded overflow-hidden"
                >
                  <ImageComic
                    src={item.thumbnail}
                    height={300}
                    width={350}
                    className="shadow-sm"
                  />
                </Link>
                <div className="flex flex-col gap-2 w-full">
                  <Link href={`/comic/${item.id}`}>
                    <h2 className="font-bold text-4xl line-clamp-2">
                      {item.title}
                    </h2>
                  </Link>

                  <div className="flex flex-wrap overflow-hidden gap-1">
                    {item.genres.map((gener) => (
                      <span
                        key={gener.id}
                        className="uppercase hover:text-orang font-bold bg-accent text-[0.625rem] px-1 rounded"
                      >
                        {gener.name}
                      </span>
                    ))}
                  </div>
                  <div className="py-2">
                    <p className="text-sm line-clamp-5">
                      {item.short_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex absolute bottom-2 right-0 space-x-6 pr-6 ">
        <button
          onClick={gotoPrev}
          className="w-10 h-10 hover:bg-accent flex justify-center items-center rounded-full"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={gotoNext}
          className="w-10 h-10 hover:bg-accent flex justify-center items-center rounded-full"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
