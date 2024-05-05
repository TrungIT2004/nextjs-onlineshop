import ProductCard from '@components/ProductCard'
import React from 'react'

const SearchResults = async ({ params }: { params: { searchValue: string }}) => {
    const searchValue = decodeURIComponent(params?.searchValue)
    console.log(searchValue)
    console.log(`https://officex-server.onrender.com/products/search?q=${searchValue}`)

    const res = await fetch(`https://officex-server.onrender.com/products/search?q=${searchValue}`)
    const data: any = await res.json()

  return (
    <div>
        <>
            <h1 className="font-bold shadow-lg bg-neutral-300 pt-4 pb-4 pl-2 text-2xl">Search Results for: {searchValue}</h1>
            <ul className="w-[100%] h-auto m-2 flex flex-wrap justify-center sm:justify-normal sm: gap-5">
                {data?.map( (result: any) => {
                    return (
                        <li key={result._id} className="flex flex-col w-[250px] sm:w-[250px] md:w-[275px] xl:w-[300px] 2xl:w-[325px]">
                            <ProductCard productImg={result?.productImg} name={result?.name} priceInVND={result?.priceInVND} />
                        </li>
                    )
                })}
            </ul>
        </>
    </div>
  )
}

export default SearchResults
