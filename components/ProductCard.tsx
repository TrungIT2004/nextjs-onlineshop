'use client'

import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { CurrentProductContext } from "./Provider"

const ProductCard = (props: any) => {
  const { setCurrentProduct }: any = useContext(CurrentProductContext)


  return (
    <Link href={`/products/${props?.name}`} onClick={ () => setCurrentProduct(props) }>
      <Image 
        src={props?.productImg}
        width={200}
        height={200}
        alt={props?.name}
      />
      <p className="text-blue-600 w-[100%]">{props?.name}</p>
      <p className="text-red-700 w-[100%]">{props?.priceInVND} VNĐ</p>
    </Link> 
  )
}

export default ProductCard
