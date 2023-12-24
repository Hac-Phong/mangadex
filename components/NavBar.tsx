'use client'
import { IoMdClose } from 'react-icons/io'
import { LuHome } from 'react-icons/lu'
import { FaRegBookmark } from 'react-icons/fa'
import { BsBook } from 'react-icons/bs'
import { GoPeople } from 'react-icons/go'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const navbar = [
    {
      name: 'Home',
      icon: <LuHome className="w-5 h-5" />,
      link: '/',
    },
    {
      name: 'Follows',
      icon: <FaRegBookmark className="w-5 h-5" />,
      subLink: [
        {
          name: 'Update',
          link: '/update',
        },
        {
          name: 'Library',
          link: '/library',
        },
        {
          name: 'MDlist',
          link: '/list',
        },
      ],
    },
    {
      name: 'Titles',
      icon: <BsBook className="w-5 h-5" />,
      subLink: [
        {
          name: 'Advanced Search',
          link: '/adsearch',
        },
        {
          name: 'Recently Added',
          link: '/search',
        },
        {
          name: 'Lastest Updates',
          link: '/lssearch',
        },
        {
          name: 'Random',
          link: '/search',
        },
      ],
    },
    {
      name: 'Community',
      icon: <GoPeople className="w-5 h-5" />,
    },
  ]
  const currentPath = usePathname()
  return (
    <nav className="flex flex-col h-screen md:h-full bg-accent ml-0">
      <div className="flex flex-col overflow-y-auto overscroll-contain lg:top-0 lg:sticky h-screen">
        <div className="mx-4 py-2 flex flex-shrink-0 justify-between items-center">
          <Link href="/" className=" flex flex-grow">
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="logo" className="mr-1 min-w-0" />
            <div className="relative flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mangadex.svg" alt="Mangadex" />
            </div>
          </Link>
          <button className="flex items-center ml-auto -mr-2">
            <IoMdClose className="h-5 w-5 mx-2 flex items-center" />
          </button>
        </div>
        {/* Logo */}
        {/* <div className="flex px-4 pt-2 flex-shrink-0">
          <Link
            href="/"
            className={` px-3 py-0.5 w-full flex rounded-md items-center !font-bold  text-sm flex-shrink-0`}
          >
            <LuHome className="w-6 h-6" />
            <p className="mx-2">Home</p>
          </Link>
        </div> */}
        {navbar.map((item, index) => (
          <div key={index} className="flex px-4 pt-2 flex-shrink-0">
            {item.link ? (
              <Link
                href={item.link}
                className={`${
                  item.link === currentPath
                    ? 'text-white bg-orang'
                    : ' hover:bg-accent_hover'
                } px-3 py-0.5 h-7 w-full flex rounded-md items-center !font-bold text-sm flex-shrink-0`}
              >
                {item.icon}
                <p className="mx-2">{item.name}</p>
              </Link>
            ) : (
              <div className="w-full">
                <div className="flex px-3 py-2 text-sm !font-bold items-center flex-shrink-0">
                  <div>{item.icon}</div>
                  <div className="mx-2">{item.name}</div>
                </div>
                {item.subLink?.map((subItem, subIndex: number) => (
                  <Link
                    key={subIndex}
                    href={subItem.link}
                    className={`${
                      subItem.link === currentPath
                        ? ' bg-orang text-white'
                        : ' hover:bg-accent_hover'
                    } px-3 py-1 h-7 w-full flex rounded-md items-center text-sm flex-shrink-0`}
                  >
                    <p className="mx-2 truncate">{subItem.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
