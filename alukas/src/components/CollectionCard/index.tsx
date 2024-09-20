import Image from 'next/image'
import React from 'react'

const CollectionCard = () => {
    return (
        <div className='w-[670px] h-[405px] group overflow-hidden relative'>
            <Image width={670} height={405} alt="" src={"https://demo-alukas.myshopify.com/cdn/shop/files/alk1_4.jpg?v=1710149492&width=1340"}
                className='object-cover group-hover:scale-110 transition duration-500 ' />
            <div className='absolute top-10 left-10 z-[1] flex flex-col gap-3'>
                <div>
                    <h1 className='text-3xl'>New Bangles<br />Collection</h1>
                    <p className='text-lg text-gray-600'>Catch the highlight in the roof</p>
                </div>
                <div className='w-fit cursor-pointer group/item overflow-hidden'>
                    <a className=' relative uppercase'>
                        Shop Now
                        <span className='block h-[2px] w-full transition-all duration-300 group-hover/item:translate-x-full bg-black'></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard