import { CollectionCardProps } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const CollectionCard: React.FC<CollectionCardProps> = ({ img, title, desc }) => {
    return (
        <div className='w-[670px] h-[405px] group overflow-hidden relative cursor-pointer'>
            <Image width={670} height={405} alt="" src={img}
                className='object-cover group-hover:scale-110 transition duration-500 ' />
            <div className='absolute top-10 left-10 z-[1] flex flex-col gap-3'>
                <div className='w-[230px]'>
                    <h1 className='text-3xl'>{title}</h1>
                    <p className='text-lg text-gray-600'>{desc}</p>
                </div>
                <div className='w-fit cursor-pointer overflow-hidden'>
                    <a className=' relative uppercase'>
                        Shop Now
                        <span className='block h-[2px] w-full transition-all duration-300 group-hover:translate-x-full bg-black'></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard