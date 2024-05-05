'use client'

import { useState } from "react"


const Counter = () => {
    const [quantity, setQuantity] = useState<number>( () => 0)

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        if (quantity == 0) return
        setQuantity(prev => prev - 1)
    }


    return (
        <>
            <button onPointerDown={ decreaseQuantity } className='w-[40px] h-[40px] border border-blue-300'>-</button>
            <button className='w-[40px] h-[40px] border border-blue-300'>{quantity}</button>
            <button onPointerDown={ increaseQuantity } className='w-[40px] h-[40px] mr-[20px] mb-[15px] border border-blue-300'>+</button>
        </>
    )
}

export default Counter
