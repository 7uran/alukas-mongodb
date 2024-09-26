"use client";
import PopularCategroyCard from "@/components/PopularCategoryCard";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import TrendyCollectionCard from "@/components/TrendyCollectionCard";
import { PopularCategoryCards } from "@/static/mockdb";
import { Card } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import AccordionItem from "../../components/AccardionItem";

export default function ShopPage() {
    const BASE_URL = "http://localhost:3001/api/v1/shop-cards";
    const [cards, setCards] = useState<Card[]>([]);

    // State for filters
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

    const fetchCards = async () => {
        try {
            // Building query params for filters
            const queryParams = new URLSearchParams();

            if (selectedMaterials.length > 0) {
                queryParams.append("materials", selectedMaterials.join(","));
            }

            const response = await fetch(`${BASE_URL}?${queryParams.toString()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const result = await response.json();
                const fetchedCards: Card[] = result.cards;
                setCards(fetchedCards);
            } else {
                console.error("Failed to fetch cards:", response.statusText);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    useEffect(() => {
        fetchCards();
    }, [selectedMaterials]);

    return (
        <div>
            <div>
                <div className="relative flex justify-center items-center w-full h-[300px]">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        className="relative object-cover w-full"
                        src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_bg_collections.jpg?v=1711247313"
                        alt="Blog Header"
                    />
                    <h1 className="absolute text-[45px] z-[1] text-black">Products</h1>
                </div>
            </div>
            <div className="max-w-[1360px] w-full mx-auto py-10">
                <section className="w-full">
                    <div className="flex justify-between w-full py-10">
                        {PopularCategoryCards.map((item, index) => (
                            <PopularCategroyCard
                                key={index}
                                img={item.image}
                                title={item.title}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <div className="flex justify-between w-full gap-12">
                        <div className="w-[270px]">
                            <AccordionItem
                                title="Collections"
                                content={
                                    <>
                                        <p className="hover:translate-x-2 transition duration-300 cursor-pointer w-fit">All collections</p>
                                        <p className="hover:translate-x-2 transition duration-300 cursor-pointer w-fit">Art by Saviola</p>
                                        <p className="hover:translate-x-2 transition duration-300 cursor-pointer w-fit">Middle of North</p>
                                        <p className="hover:translate-x-2 transition duration-300 cursor-pointer w-fit">Morden</p>
                                        <p className="hover:translate-x-2 transition duration-300 cursor-pointer w-fit">Original</p>
                                        <p className="hover:translate-x-2 transition duration-300 cursor-pointer w-fit">Royal Love</p>
                                    </>
                                }
                            />
                            <AccordionItem
                                title="Price"
                                content={<PriceRangeSlider />}
                            />
                            <AccordionItem
                                title="Material"
                                content={
                                    <div className="flex flex-col justify-center gap-2">
                                        {["Bronze", "Gold", "Silver"].map((material) => (
                                            <div className="flex items-center gap-2" key={material}>
                                                <input
                                                    className="w-[17px] h-[17px]"
                                                    type="checkbox"
                                                    checked={selectedMaterials.includes(material)}
                                                    onChange={() => {
                                                        setSelectedMaterials((prev) =>
                                                            prev.includes(material)
                                                                ? prev.filter((item) => item !== material)
                                                                : [...prev, material]
                                                        );
                                                    }}
                                                />
                                                <label>{material}</label>
                                            </div>
                                        ))}
                                    </div>
                                }
                            />
                            <AccordionItem title="Color" content={
                                <div className="flex gap-1">
                                    <span className="p-0.5 border rounded-full flex items-center justify-center border-gray-300 cursor-pointer hover:border-black transition ">
                                        <button className="bg-black w-[26px] h-[26px] rounded-full "></button>
                                    </span>
                                    <span className="p-0.5 border rounded-full flex items-center justify-center border-gray-300 cursor-pointer hover:border-black transition ">
                                        <button className="bg-[#3F8AD1] w-[26px] h-[26px] rounded-full "></button>
                                    </span>
                                    <span className="p-0.5 border rounded-full flex items-center justify-center border-gray-300 cursor-pointer hover:border-black transition ">
                                        <button className="bg-[#FFD700] w-[26px] h-[26px] rounded-full "></button>
                                    </span>
                                    <span className="p-0.5 border rounded-full flex items-center justify-center border-gray-300 cursor-pointer hover:border-black transition ">
                                        <button className="bg-[#7ABDB5] w-[26px] h-[26px] rounded-full "></button>
                                    </span>
                                    <span className="p-0.5 border rounded-full flex items-center justify-center border-gray-300 cursor-pointer hover:border-black transition ">
                                        <button className="bg-[#CE2E2E] w-[26px] h-[26px] rounded-full "></button>
                                    </span>
                                    <span className="p-0.5 border rounded-full flex items-center justify-center border-gray-300 cursor-pointer hover:border-black transition ">
                                        <button className="bg-[#C0C0C0] w-[26px] h-[26px] rounded-full "></button>
                                    </span>
                                    <span className="p-0.5 border rounded-full flex items-center justify-center border-gray-300 cursor-pointer hover:border-black transition ">
                                        <button className="bg-[#E2C28F] w-[26px] h-[26px] rounded-full "></button>
                                    </span>

                                </div>
                            } />
                            <AccordionItem title="Size" content={
                                <div className="flex flex-wrap gap-3">
                                    <button className="hover:bg-black hover:text-white transition border px-4 h-[33px] rounded-sm text-[17px]">S</button>
                                    <button className="hover:bg-black hover:text-white transition border px-4 h-[33px] rounded-sm text-[17px]">M</button>
                                    <button className="hover:bg-black hover:text-white transition border px-4 h-[33px] rounded-sm text-[17px]">L</button>

                                </div>
                            } />
                            <div className="py-10">
                                <Image width={270} height={300} alt="" src={"https://demo-alukas.myshopify.com/cdn/shop/files/banner-shop.jpg?v=1711798181&width=1500"} />
                            </div>
                        </div>
                        <div className="flex justify-between py-10 w-full">
                            {cards.map((card) => (
                                <TrendyCollectionCard
                                    key={card._id}
                                    title={card.title}
                                    price={card.price}
                                    image={`http://localhost:3001${card.image}`}
                                    image2={`http://localhost:3001${card.image2}`}
                                    slug={card._id}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
