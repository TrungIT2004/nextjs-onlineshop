'use client'
 
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter()

    const searchProducts = (e: any) => {
        if(e.key === 'Enter') {
            router.push(`/search/${e.target.value}`)
        }
    }


  return (
    <li className='w-[80%] flex items-center ml-auto md:w-[55%]' >
      <label htmlFor="search" className='opacity-0'>Search: </label>
      <input type="text" id='search' onKeyDown={ searchProducts} className='w-[100%] p-[6px] text-black outline-none rounded-full' />
    </li>
  )
}

export default SearchBar
