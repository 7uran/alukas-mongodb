import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BlogCardProps } from '@/types/types';

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, image, slug }) => {
    const router = useRouter();
    
    const handleReadMore = () => {
        router.push(`/blog/${slug}?id=${id}`);
    };


    const imagePath = image.startsWith('http') ? image : `http://localhost:3001/uploads/${image.split('/').pop()}`;

    return (
        <div className='w-[320px] flex flex-col gap-6'>
            <div className='relative group overflow-hidden'>
                <Image
                    className='group-hover:scale-110 transition cursor-pointer'
                    src={imagePath}
                    alt={title}
                    width={320}
                    height={207}
                />
                <div className='bg-black w-fit text-white py-0.5 px-2 font-semibold text-sm absolute top-3 left-5'>
                    <p className='uppercase'>news</p>
                </div>
            </div>
            <div>
                <div className='text-[26px] font-medium'>
                    <h1 className='cursor-pointer'>{title}</h1>
                </div>
                <div>
                    <p className='text-gray-600 line-clamp-3'>{description}</p>
                </div>
                <div className='w-fit cursor-pointer group pt-5 overflow-hidden'>
                    <a className='text-lg relative' onClick={handleReadMore}>
                        Continue Reading
                        <span className='block h-[2.5px] w-full transition-all duration-300 group-hover:translate-x-full bg-black'></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
