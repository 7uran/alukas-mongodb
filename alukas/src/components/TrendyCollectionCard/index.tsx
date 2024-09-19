import Image from 'next/image'
import React from 'react'
import { IoHeartOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";

const TrendyCollectionCard = () => {
    return (
        <div className='group'>
            <div className='overflow-hidden relative '>
                <div className='relative w-[320px] h-[320px]'>
                    <Image width={320} height={320} alt="" src={"https://demo-alukas.myshopify.com/cdn/shop/files/2.jpg?v=1709714257&width=533"}
                        className='object-cover  group-hover:scale-110 transition duration-500 ' />
                    <Image width={320} height={320} alt="" src={"https://demo-alukas.myshopify.com/cdn/shop/files/1.jpg?v=1709714257&width=533"}
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
                    Circle of Light Heart Earrings
                </p>
                <button className=' h-[28px] group/item overflow-hidden'>
                    <div className='text-[18px] group-hover:-translate-y-[28px]  transition duration-300 '>
                        <p>$129.00</p>
                        <div className='w-fit cursor-pointer  overflow-hidden'>
                            <a className='text-lg relative uppercase'>
                                Shop Now
                                <span className='block h-[2px] w-full transition-all duration-300 group-hover/item:translate-x-full bg-black'></span>
                            </a>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default TrendyCollectionCard