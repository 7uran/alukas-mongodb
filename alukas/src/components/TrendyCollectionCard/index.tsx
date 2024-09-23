import Image from 'next/image'
import React from 'react'
import { IoHeartOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import Link from 'next/link';
import { TrendyCollectionCardProps } from '@/types/types';

const TrendyCollectionCard: React.FC<TrendyCollectionCardProps> = ({ title, price, image, image2, slug }) => {
    return (
        <div className='group cursor-pointer'>
            <div className='overflow-hidden relative '>
                <div className='relative w-[320px] h-[320px]'>
                    <Image width={320} height={320} alt="" src={image2}
                        className='object-cover  group-hover:scale-110 transition duration-500 ' />
                    <Image width={320} height={320} alt="" src={image}
                        className='object-cover  group-hover:scale-110 transition duration-500 group-hover:opacity-0 absolute top-0 ' />
                </div>
                <div className='absolute flex flex-col gap-2 top-2 right-0 opacity-0 group-hover:opacity-100 transition duration-500 z-[1] group-hover:-translate-x-[10px]'>
                    <button className='bg-white text-xl w-[38px] h-[40px] rounded-full flex items-center justify-center transition duration-500 hover:bg-black hover:text-white'>
                        <IoHeartOutline />
                    </button>
                    <button className='bg-white text-xl w-[38px] h-[40px] rounded-full flex items-center justify-center transition duration-500  hover:bg-black hover:text-white'>
                        <SlRefresh />
                    </button>
                    <button className='bg-white text-2xl w-[38px] h-[40px] rounded-full flex items-center justify-center transition duration-500 hover:bg-black hover:text-white'>
                        <IoSearchOutline />
                    </button>
                </div>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <p className='text-[14px] uppercase text-gray-400'>Alukas</p>
                <p className='text-[18px]'>
                    {title}
                </p>
                <Link href={`/home/product/${slug}`}>
                    <button className=' h-[28px] group/item overflow-hidden'>
                        <div className='text-[18px] group-hover:-translate-y-[28px]  transition duration-300 '>
                            <p>${price}.00</p>
                            <div className='w-fit cursor-pointer  overflow-hidden'>
                                <span className='text-lg relative uppercase'>
                                    Shop Now
                                    <span className='block h-[2px] w-full transition-all duration-300 group-hover/item:translate-x-full bg-black'></span>
                                </span>
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default TrendyCollectionCard;
