import React from 'react';
import { IoIosStar } from "react-icons/io";
import { LuQuote } from "react-icons/lu";

const CommentCard = () => {
    return (
        <div className='w-[436px] h-[312px] bg-white shadow-sm p-10 flex flex-col gap-5 text-[18px]'>
            <div className='bg-[#222222] flex items-center justify-center w-[50px] h-[50px] text-white text-2xl rotate-180 rounded-full'>
                <LuQuote />
            </div>
            <div>
                <p className='font-medium'>
                    Alukas is my favourite store
                </p>
            </div>
            <div className='text-gray-500'>
                <p>Great products and designs and such great quality, they always wash up well no matter how many times I wash them.</p>
            </div>
            <div className='flex items-center justify-between'>
                <p> - Donald Duck</p>
                <div className='flex items-center text-[#F68773]'>
                    {
                        Array(5).fill(null).map((_, index) => (
                            <IoIosStar key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CommentCard;
