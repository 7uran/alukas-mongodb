// pages/ShopPage.tsx
"use client";
import PopularCategroyCard from "@/components/PopularCategoryCard";
import TrendyCollectionCard from "@/components/TrendyCollectionCard";
import PriceRangeSlider from "@/components/PriceRangeSlider"; // Ensure this path is correct
import { PopularCategoryCards } from "@/static/mockdb";
import { Card } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ShopPage() {
    const BASE_URL = "http://localhost:3001/api/v1/shop-cards";
    const [cards, setCards] = useState<Card[]>([]);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);

    const fetchCards = async () => {
        try {
            const response = await fetch(BASE_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const result = await response.json();
                const fetchedCards: Card[] = result.cards;
                setCards(fetchedCards); // Update state with fetched cards
            } else {
                console.error("Failed to fetch cards:", response.statusText);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    // Filtered cards based on price range
    const filteredCards = cards.filter(
        (card) => card.price >= minPrice && card.price <= maxPrice
    );


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
                <div className="w-full max-w-xl mx-auto"> {/* Centered and constrained width */}
                    <PriceRangeSlider
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        setMinPrice={setMinPrice}
                        setMaxPrice={setMaxPrice}
                    />
                </div>

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
                    <div className="flex justify-between w-full py-10">
                        {filteredCards.map((card) => (
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
                </section>
            </div>
        </div>
    );
}
