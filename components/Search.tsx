import { IoSearchOutline } from 'react-icons/io5'

const Search = () => {
  return (
    <div className="absolute top-3 items-center flex right-8 z-50">
      <form className=" bg-accent/70 px-2 py-1 rounded-md flex items-center">
        <input
          type="text"
          placeholder="Search "
          className=" bg-transparent focus:outline-none px-1 rounded-lg placeholder:text-base"
        />
        <button className="flex items-center mr-1">
          <IoSearchOutline className="w-5 h-5" />
        </button>
      </form>
      <div className="w-10 h-10 ml-3 rounded-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/avatar.png" alt="" />
      </div>
    </div>
  )
}

export default Search
