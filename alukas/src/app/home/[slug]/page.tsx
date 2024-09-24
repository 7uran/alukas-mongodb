"use client";
import ProductSlider from "@/components/ProductSlider";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner"
import { ImFire } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { GoShareAndroid } from "react-icons/go";
import { SlCloudUpload } from "react-icons/sl";
import { PiHeartThin } from "react-icons/pi";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { IoIosRefresh, IoMdCheckmark } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

export default function Shop() {
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
        <div className="max-w-[1360px] w-full mx-auto py-10 flex justify-between">
            <div className="top-44 sticky h-[555px] ">
                {product ? <ProductSlider product={product} /> : <Spinner />}
            </div>
            <div className="w-[645px]">
                <div className="overflow-auto h-full">
                    <div className="border-b-[1px] border-b-gray-300 border-b-solid py-[10px]">
                        <h2 className="uppercase text-[#757575] pb-[10px]">
                            {product?.title}
                        </h2>

                        <h2 className="text-[30px] text-[#222]">{product?.title}</h2>
                        <div className="flex text-[18px] pb-[15px] pt-[5px] ml-[70px] gap-[10px] items-center">
                            <span className="text-[#555]">3 reviews</span>
                            <ImFire className="text-red-800" />
                            <span>22 sold in last 16 hours</span>
                        </div>
                        <div className="flex items-center gap-[10px] py-[10px]">
                            <div className="text-[20px] text-[#222]">
                                ${product?.price}.00
                            </div>

                        </div>
                        <div className="text-[18px] text-[#555] pb-[10px]">
                            This regulator has a rolled diaphragm and high flow rate with
                            reduced pressure drop.It has an excellent degree of
                            condensation.
                        </div>
                        <div className="flex gap-[7px] items-center py-[10px]">
                            <IoEyeOutline /> 25 people are viewing this right now
                        </div>
                        <div className="flex gap-[20px] text-[18px] text-[#222] py-[10px]">
                            <div className="flex items-center gap-[5px]">
                                <IoBarChartOutline />
                                Size guide
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <GoQuestion />
                                Ask a Question
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <GoShareAndroid />
                                Share
                            </div>
                        </div>
                    </div>
                    <div className="py-[20px]">
                        <div className="text-[500]">Add your personalization</div>
                        <div className="py-[20px] text-[#555]">
                            Add your name, note or upload your customized idea image to
                            personalise your item. Custom items cannot be returned or
                            exchanged.
                        </div>
                        <input
                            type="text"
                            placeholder="Customize note"
                            className="px-[20px] py-[10px] border-solid border-[1px] border-[#e5e5e5] outline-none w-full placeholder-gray-700 focus:border-[1px] focus:border-solid focus:border-black"
                        />
                        <div className="flex items-center pl-[20px]  my-[10px] space-x-2 w-full justify-between  border-[1px] border-solid border-[#e5e5e5]">
                            <span className="text-gray-700">No file chosen</span>
                            <input id="file-upload" type="file" className="hidden" />
                            <label
                                htmlFor="file-upload"
                                className="flex items-center cursor-pointer bg-[#f5f5f5] px-4  py-[10px]  text-gray-700"
                            >
                                <SlCloudUpload className="mr-2 text-[16px]" /> Upload Image
                            </label>
                        </div>
                        <div className="flex gap-[10px] w-full h-[50px]">
                            <div className="flex flex-1 w-full border-solid border-[2px] border-gray-300">
                                <button className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                                    <FiMinus />
                                </button>

                                <div className="flex-1 flex justify-center items-center">
                                    1
                                </div>

                                <button className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                                    <FaPlus />

                                </button>
                            </div>

                            <button className="uppercase w-full bg-[#222222] h-[50px] text-white py-[15px] font-[500] text-center flex-2">
                                Add to Cart
                            </button>

                            <div className="flex-1 flex w-full gap-[5px]">
                                <div className="border-solid border-[2px] flex justify-center items-center border-gray-300 w-[50px] h-[50px]">
                                    <PiHeartThin className="text-[26px]" />
                                </div>

                                <div className="border-solid border-[2px] flex justify-center items-center border-gray-300 w-[50px] h-[50px]">
                                    <HiOutlineArrowPath className="text-[26px] text-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center py-[10px]">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-[16px] h-[16px] mr-[10px]"
                        />
                        <label htmlFor="terms" className="cursor-pointer">
                            I agree with Terms & Conditions
                        </label>
                    </div>
                    <div className="uppercase  w-full bg-[#e3e1e1] h-[50px]  py-[15px] font-[500] text-center  text-[#222]">
                        Buy it now
                    </div>
                    <div className="text-[#555] pb-[20px]">
                        <div className="flex gap-[5px] items-center pt-[10px]">
                            <IoMdCheckmark />
                            Pickup available at
                            <span className="font-[500] text-black">Shop location.</span>
                            Usually ready in 24 hours
                        </div>
                        <div className="flex gap-[5px] items-center py-[10px]">
                            <LuClock />
                            Estimate delivery times:
                            <span className="font-[500] text-black"> 12-26 days</span>
                            (International),
                            <span className="font-[500] text-black"> 3-6 days</span>
                            (United
                            States).
                        </div>
                        <div className="flex gap-[5px] items-center pb-[10px]">
                            <IoIosRefresh /> Return within
                            <span className="font-[500] text-black"> 45 days</span> of
                            purchase. Duties & taxes are non-refundable.
                        </div>
                    </div>
                    <div className="py-[20px] border-t-solid border-t-gray-300 border-t-[1px] ">
                        <div className="flex items-center mb-[5px] gap-[5px]">
                            <span className=" mr-[5px] w-[80px]">SKU:</span>
                            <span className="text-[#757575]">N/A</span>
                        </div>
                        <div className="flex items-center mb-[5px] gap-[5px]">
                            <span className=" mr-[5px] w-[80px]">Available:</span>
                            <span className="text-[#757575]">In Stock</span>
                        </div>
                        <div className="flex items-center mb-[5px] gap-[5px]">
                            <span className=" mr-[5px] w-[80px]">Vendor:</span>
                            <span className="text-[#757575]">Champion</span>
                        </div>
                        <div className="flex gap-[5px]">
                            <span className=" mr-[5px] w-[80px] gap-[5px]">
                                Collections:
                            </span>
                            <span className="text-[#757575]">
                                Accessories, Bracelets, Earrings, Featured, Home Page,
                                Necklaces, Rings
                            </span>
                        </div>
                    </div>
                    <div className="relative border border-gray-300 w-full mx-auto my-[20px] px-[20px] py-[22px]">
                        <div className="absolute -top-[10px] left-1/2 transform -translate-x-1/2 bg-white px-[10px] text-center font-semibold">
                            Guarantee Safe Checkout
                        </div>

                        <Image
                            src="https://demo-alukas.myshopify.com/cdn/shop/files/trust_badge.png?v=1712024964&width=533"
                            alt="Trust Badge"
                            className="mx-auto"
                            width={410}
                            height={36}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}
