import Image from "next/image";
import React from "react";

interface IReadJournalCard {
    image: string;
    desc: string;
    date: string;
}

const ReadJournalCard = ({ image, desc, date }: IReadJournalCard) => {
    return (
        <div className="group">
            <div className="w-[436px] h-[283px] " >
                <div className="w-[436px] h-[283px] object-cover relative overflow-hidden ">
                    <Image
                        alt=""
                        src={image}
                        className="hover:scale-110 duration-300"
                        height={283}
                        width={436}
                    />

                    <div className=" absolute top-4 left-3 bg-black font-medium px-3 text-white flex text-[13px]  items-center justify-center">
                        ACCESORIES
                    </div>
                </div>
                <div className="mt-5">
                    <p>
                        POST BY ALUKAS SHOPIFY -{" "}
                        <span className="text-[#555]">{date} </span>{" "}
                    </p>
                    <h2 className="font-medium text-[26px]">{desc}</h2>
                    <div className='w-fit cursor-pointer overflow-hidden'>
                        <a className=' relative capitalize text-[18px]'>
                            Continue Reading
                            <span className='block h-[2px] w-full transition-all duration-300 group-hover:translate-x-full bg-black'></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadJournalCard;