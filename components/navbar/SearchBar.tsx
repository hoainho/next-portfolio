'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isShow, setIsShow] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString())
    params.set('s', inputValue)
    router.push(`/blog?${params.toString()}`)
    
   setInputValue('')
  };

  useEffect(() => {
    if (isShow && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isShow]);

  return (
    <div className="w-full relative">
      <form
        className={`w-full  
        ${isShow ?
            'opacity-100 transition-all duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)] pointer-events-auto'
            : 'opacity-0 pointer-events-none'} `
        }
        onSubmit={handleSubmit}
      >
        <div className="z-50 flex items-center justify-between bg-white border border-gray-300 rounded-md pl-2 h-10 w-full transition-discrete"
          onBlur={() => setIsShow(false)}
        >
          <input
            type="text"
            placeholder="Search..."
            name='search'
            className="outline-none text-black flex-1 transition-discrete w-full h-full"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="h-full text-gray-600 hover:text-black p-3" type="submit" onMouseDown={(e) => e.preventDefault()}>
            <FaSearch className="text-base" />
          </button>
        </div>
      </form>
      <FaSearch
        className={`text-lg text-white cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 ${isShow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={() => setIsShow(pre => !pre)}
      />
    </div>
  )
}

export default SearchBar;