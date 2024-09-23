import { images } from "@/static/mockdb";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";



const FollowUs = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-center items-center flex-col ">
                <h2 className="text-[36px]">Follow Us on Instagram</h2>
                <p className="text-[#555]">@bersky</p>
            </div>
            <div className="max-w-[1380px] mt-10 flex gap-5 flex-wrap mx-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-[200px] group cursor-pointer max-w-[200px] overflow-hidden "
                    >
                        <Image
                            alt=""
                            height={300}
                            width={200}
                            className="max-h-[200px] min-h-[200px] group-hover:scale-110 transition duration-500"
                            src={image.src}
                            objectFit="cover"
                            quality={100}
                        />
                        <div className="bg-white opacity-0 group-hover:opacity-100 duration-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 flex justify-center items-center">
                            <FaInstagram className="text-[20px] text-[#555]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FollowUs;