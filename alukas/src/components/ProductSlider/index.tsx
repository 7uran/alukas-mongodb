"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ProductSlider = ({ product }: { product: { title: string; price: number; images: string[] } }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    return (
        <div className="flex items-start gap-4">
            <div className="flex flex-col gap-2">
                {product.images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Product ${index + 1}`}
                        width={70}
                        height={70}
                        className={`w-[70px] h-[70px] object-cover cursor-pointer border-2 ${selectedImageIndex === index ? 'border-black' : 'border-none'}`}
                        onClick={() => setSelectedImageIndex(index)}
                    />
                ))}
            </div>

            <div className="relative">
                <Image
                    src={product.images[selectedImageIndex]}
                    alt="Selected Product"
                    width={555}
                    height={555}
                    className="w-[555px] h-[555px] object-cover"
                />
            </div>
        </div>
    );
};

export default ProductSlider;
