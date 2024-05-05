import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faCheck, faCheckDouble, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { Metadata } from 'next'


export async function generateStaticParams() {
    const res = await fetch(`https://officex-server.onrender.com/products`)
    const products: any = await res.json()

    return products?.map( (product: any) => product?.name)
}

// export async function generateMetaData({ params } : { params: { productName: string }}): Promise<Metadata> {
//     const productName = params?.productName

//     const res = await fetch(`https://officex-server.onrender.com/products/${productName}`)
//     const product: any = await res.json()

//     return {
//         title: product?.name
//     }
// }

const page = async ({ params } : { params: { productName: string }}) => {
    const productName = params?.productName

    const res = await fetch(`https://officex-server.onrender.com/products/${productName}`)
    const product = await res.json()

    return (
        <>
            <p className='bg-red-100 height h-[50px] pl-4 mb-[20px] flex items-center'>Trang chủ / Cửa hàng / {product?.category} / {product?.name} </p>

            <article className='w-[100%] gap-4 pl-[10px] flex flex-col sm:flex-row 2xl:w-[65%] 2xl:m-auto'>
                <div className='w-[100%] gap-4 flex sm:flex-row sm:w-[65%]'>
                    <div className='w-[100%] sm:w-[50%]'>
                        <img src={`${product?.productImg}`} alt={product?.name} title={product?.name} loading='lazy' className="w-[250px] aspect-square sm:w-[250px] md:w-[275px] xl:w-[375px] 2xl:w-[400px]" />
                    </div>
                    
                    <div className='w-[100%] h-auto flex flex-col gap-4 sm:w-[50%]'>
                        <h2 className='text-2xl font-bold'>{product?.name}</h2>
                        <p className='text-xl text-red-500'>{product?.priceInVND} VNĐ</p>
                        <p className='text-xl text-blue-600'>Tổng đơn trên 500K FREE SHIP</p>

                        <div className='mt-[10px] sm:mt-[50px]'>
                            <button className='w-[40px] h-[40px] border border-blue-300'>-</button>
                            <button className='w-[40px] h-[40px] border border-blue-300'>0</button>
                            <button className='w-[40px] h-[40px] mr-[20px] mb-[15px] border border-blue-300'>+</button>

                            <button className='w-[150px] h-[50px] bg-blue-400 text-white font-bold sm:w-[auto]'>Thêm vào giỏ hàng</button>
                        </div>

                        <p className='font-bold'>Hỗ trợ online</p>

                        <ul>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faPhone} style={{color: "#d73747", width: "20px", height: "15px", marginTop: "5px"}} />
                                <span className='ml-[10px] mt-[0px]'>Hotline đặt hàng 1: 0981.654.572 (MS. Nhiên)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                 <FontAwesomeIcon icon={faPhone} style={{color: "#d73747", width: "20px", height: "15px", marginTop: "5px"}} />
                                <span className='ml-[10px]'>Hotline đặt hàng 2: 0777. 663.073 (MS. Nhung)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faEnvelope} style={{color: "#f7021b", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Email: htmtrung2004@gmail.com</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCheckDouble} style={{color: "#ff0000", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Chính Sách Chiết Khấu Cực Cao</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#fb0404", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Đơn {'>'} 1 Triệu đến dưới 2 Triệu chiết khấu 7% giá trước VAT (Ngoại Trừ giấy in các loại)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#fb0404", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Đơn {'>'} 2 Triệu đến dưới 3 Triệu chiết khấu 8% giá trước VAT (Ngoại Trừ giấy in các loại)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#fb0404", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Đơn {'>'} 3 Triệu đến dưới 5 Triệu chiết khấu 10% giá trước VAT (Ngoại Trừ giấy in các loại)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#fb0404", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Đơn {'>'} 5 Triệu đến dưới 10 Triệu chiết khấu 12% giá trước VAT (Ngoại Trừ giấy in các loại)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-[100%] h-[600px] sm:w-[35%]'>
                    <div className='border border-blue-200 shadow-lg p-2'>
                        <p className='text-red-600 font-bold'>Chính sách ưu đãi</p>
                        
                        <ul>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "61ce70", width: "20px", height: "15px", marginTop: "5px"}} />
                                <span className='ml-[10px]'>Miễn phí giao hàng tại HCM Đơn 500K Trở Lên</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Đơn {'>'} 1 Triệu đến dưới 2 Triệu chiết khấu 7% giá trước VAT (Ngoại Trừ giấy in các loại)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Đơn {'>'} 2 Triệu đến dưới 3 Triệu chiết khấu 8% giá trước VAT (Ngoại Trừ giấy in các loại)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Đơn {'>'} 3 Triệu đến dưới 5 Triệu chiết khấu 10% giá trước VAT (Ngoại Trừ giấy in các loại)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE", width: "20px", height: "15px", marginTop: "5px",}} />
                                <span className='ml-[10px]'>Đơn {'>'} 5 Triệu đến dưới 10 Triệu chiết khấu 12% giá trước VAT (Ngoại Trừ giấy in các loại)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "61ce70", width: "20px", height: "15px", marginTop: "5px"}} />
                                <span className='ml-[10px]'>Nhiều phần quà tặng hấp dẫn</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "61ce70", width: "20px", height: "15px", marginTop: "5px"}} />
                                <span className='ml-[10px]'>Giao hàng nhanh</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "61ce70", width: "20px", height: "15px", marginTop: "5px"}} />
                                <span className='ml-[10px]'>Đổi trả hàng đúng theo yêu cầu</span>
                            </li>
                        </ul>
                    </div>

                    <div className='border border-blue-200 shadow-lg p-2'>
                        <p className='text-red-600 font-bold'>Liên hệ nhân viên đặt hàng</p>

                        <ul>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "61ce70", width: "20px", height: "15px", marginTop: "5px"}} />
                                <span className='ml-[10px]'>Hotline đặt hàng 1: 0981. 654.572 (MS. Nhiên)</span>
                            </li>
                            <li className='h-[auto] flex items-top'>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "61ce70", width: "20px", height: "15px", marginTop: "5px"}} />
                                <span className='ml-[10px]'>Hotline đặt hàng 2: 0777. 663.073 (MS. Nhung)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </>
    )
}

export default page
