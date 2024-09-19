import Image from 'next/image'
import React from 'react'

const PopularCategroyCard = () => {
    return (
        <div className='flex items-center flex-col group overflow-hidden cursor-pointer'>
            <div className='w-[180px] h-[180px] rounded-full bg-red-50 overflow-hidden'>
                <Image width={180} height={180} alt="" src={"https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t1.jpg?v=1710145653&width=1500"}
                    className='object-cover  group-hover:scale-110 transition duration-500' />
            </div>
            <div className='w-fit cursor-pointer pt-5 overflow-hidden'>
                <a className='text-[16px] relative uppercase'>
                    Necklaces
                    <span className='block h-[1px] w-full transition-all duration-300 group-hover:translate-x-full bg-black'></span>
                </a>
            </div>
        </div>
    )
}

export default PopularCategroyCard