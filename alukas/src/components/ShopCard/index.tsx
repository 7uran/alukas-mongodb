import Image from 'next/image';
import React from 'react';

const ShopCard = () => {
    return (
        <div className='relative w-[436px] h-[300px] bg-red-50'>
            <Image
                src={"https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482&width=436"}
                alt="Shop Image"
                fill
                className='object-cover '
            />
            <div className='z-[1] absolute top-10 left-10 text-white'>
                <p>2024 FASHION</p>
                <p className='text-[26px]'>
                    Just Lunched<br /> Desk The Hals
                </p>
                <div className='w-fit cursor-pointer group pt-5 overflow-hidden'>
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
