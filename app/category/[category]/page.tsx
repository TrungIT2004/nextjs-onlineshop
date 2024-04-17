import ProductCard from "@components/ProductCard"

const Category = async ({params}: { params: { category: string }}) => {
    const category = params?.category

    const res =  await fetch(`https://officex-server.onrender.com/products/filter?category=${category}`)
    const filteredProducts = await res.json()

    return (
        <div className="ml-4 mt-2">
            <p className="font-light">Trang chủ / Cửa hàng / {category} </p>
            <h2 className="text-2xl font-bold text-blue-600 mt-4 mb-2">{category}</h2>
            <p className="font-light">Hiển thị {filteredProducts?.length} kết quả</p>
            <ul className="w-[100%] h-auto flex flex-wrap justify-center sm:justify-normal sm: gap-5">
                {filteredProducts?.map( (product: any) => {
                    return (
                        <li key={product._id} className="flex flex-col w-[200px]">
                            <ProductCard productImg={product?.productImg} name={product?.name} priceInVND={product?.priceInVND} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Category
