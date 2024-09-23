"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductSlider = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [product, setProduct] = useState<{ title: string; price: number; images: string[] } | null>(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/v1/cards/${id}`);
                const data = await response.json();

                if (data.success && data.card) {
                    const images = [
                        `http://localhost:3001${data.card.image}`,
                        `http://localhost:3001${data.card.image2}`,
                    ];
                    setProduct({ title: data.card.title, price: data.card.price, images });

                }
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProduct();
    }, []);

    return (
        <div className="flex items-start gap-4">
            <div className="flex flex-col gap-2">
                {product && product.images.map((image, index) => (
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
                {product && (
                    <>
                        <Image
                            src={product.images[selectedImageIndex]}
                            alt="Selected Product"
                            width={555}
                            height={555}
                            className="w-[555px] h-[555px] object-cover"
                        />
                        <h2 className="mt-2 text-xl font-bold">{product.title}</h2>
                        <p className="text-lg text-gray-700">${product.price}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductSlider;
