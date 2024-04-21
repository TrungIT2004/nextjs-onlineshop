import Image from "next/image"
import Link from "next/link"


const ProductCard = (props: any) => {
  return (
    <Link href={`/products/${props?.name}`}>
      <Image 
        src={props?.productImg}
        width={200}
        height={200}
        alt={props?.name}
      />
      <p className="text-blue-600 w-[200px]">{props?.name}</p>
      <p className="text-red-700 w-[200px]">{props?.priceInVND} VNĐ</p>
    </Link> 
  )
}

export default ProductCard
