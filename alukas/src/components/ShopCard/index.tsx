import { ShopCardProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const ShopCard: React.FC<ShopCardProps> = ({ title, desc, img }) => {
    return (
        <div className='relative w-[436px] h-[300px] cursor-pointer group overflow-hidden '>
            <Image
                src={img}
                alt="Shop Image"
                fill
                className='object-cover group-hover:scale-110 transition duration-500 '
            />
            <div className='z-[1] absolute top-10 left-10 text-white'>
                <p>{title}</p>
                <p className='text-[26px] w-[170px] h-fit '>
                    {desc}
                </p>
                <div className='w-fit cursor-pointer pt-2 overflow-hidden'>
                    <a className='text-lg relative uppercase'>
                        Shop Now
                        <span className='block h-[2px] w-full transition-all duration-300 group-hover:translate-x-full bg-white'></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ShopCard;
