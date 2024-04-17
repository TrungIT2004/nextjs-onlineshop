import ProductCard from "./ProductCard"


const CategoryProducts = () => {
    return (
        <div className="w-[100%]">
            <CategoryProduct category='Bìa hổ sơ'/>
            <CategoryProduct category='Thước'/>
            <CategoryProduct category='Băng keo'/>
            <CategoryProduct category='Bút chì gỗ'/>
            <CategoryProduct category='Giấy'/>
            <CategoryProduct category='Giấy ghi nhớ'/>
            <CategoryProduct category='Kéo'/>
            <CategoryProduct category='Máy tính'/>
            <CategoryProduct category='Tập vở'/>
            <CategoryProduct category='Bút bi'/>
        </div>
    )
}

const CategoryProduct = async (props: any) => {
    const res = await fetch(`https://officex-server.onrender.com/products/filter?category=${props?.category}`)
    const data: any = await res.json()

    return (
        <section className="text-red-500">
            <div className="w-[100%] h-[40px] flex items-center">
                <p className="w-[50%] font-bold text-transform:uppercase pl-[10px]">{props.category}</p>
                <p className="w-[50%] pr-[20px] text-right font-light">Xem thêm...</p>
            </div>
            <ul className="w-[100%] flex justify-around category-list">
                {data.map( (product: any) => {
                    return (
                        <li key={product._id} className="flex flex-col w-[200px]">
                            <ProductCard productImg={product?.productImg} name={product?.name} priceInVND={product?.priceInVND} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default CategoryProducts
