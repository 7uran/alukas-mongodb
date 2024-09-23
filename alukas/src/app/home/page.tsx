"use client"
import CollectionCard from "@/components/CollectionCard";
import Line from "@/components/Line";
import PopularCategroyCard from "@/components/PopularCategoryCard";
import ShopCard from "@/components/ShopCard";
import Slider from "@/components/Slider";
import Spinner from "@/components/Spinner";
import TrendyCollectionCard from "@/components/TrendyCollectionCard";
import { CollectionCards, PopularCategoryCards, shopCards } from "@/static/mockdb";
import { Card } from "@/types/types";
import CommentCard from "../../components/CommentCard";
import { useEffect, useState } from "react";
import { SlHome } from "react-icons/sl";
import ReadJournalCard from "@/components/ReadJournalCard";
import FollowUs from "@/components/FollowUs";

export default function HomePage() {
    const BASE_URL = "http://localhost:3001/api/v1/cards"
    const [trendyCards, setTrendyCards] = useState<Card[]>([]);
    const [autmnCards, setAutmnCards] = useState<Card[]>([]);
    const [featuredCards, setFeaturedCards] = useState<Card[]>([]);

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
                const cards: Card[] = result.cards;
                const trendyCards = cards.filter((card) => card.cardType === "trendy");
                const featuredCards = cards.filter((card) => card.cardType === "featured");
                const autmnCards = cards.filter((card) => card.cardType === "autmn");
                setFeaturedCards(featuredCards);
                setTrendyCards(trendyCards);
                setAutmnCards(autmnCards);
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

    return (
        <div>
            <section>
                <Slider />
            </section>
            <section>
                <div className="max-w-[1360px] w-full mx-auto py-10 flex justify-between flex-wrap">
                    {shopCards.map((item, index) => (
                        <ShopCard key={index} title={item.headTitle} desc={item.title} img={item.image} />
                    ))}
                </div>
            </section>
            <section>
                <div className="max-w-[1360px] w-full mx-auto py-10 flex justify-between flex-wrap">
                    <div className="flex w-full text-[40px] justify-center">
                        <h1>
                            Popular Categories
                        </h1>
                    </div>
                    <div className="flex justify-between w-full py-10">
                        {
                            PopularCategoryCards.map((item, index) => (
                                <PopularCategroyCard key={index} img={item.image} title={item.title} />
                            ))
                        }
                    </div>


                </div>
            </section>
            <section>
                <div className="max-w-[1360px] w-full mx-auto py-10 flex justify-between flex-wrap">
                    <div className="w-full flex gap-3 justify-center text-[40px] items-center">
                        <Line />
                        <h1>Trendy Collection</h1>
                        <Line />
                    </div>
                    <div className="text-[20px] flex justify-center w-full">
                        <h2>Collect your loves with our newest arrivals.</h2>
                    </div>
                    <div className="flex w-full justify-around py-10">
                        {trendyCards.length > 0 ? (
                            trendyCards.map((card) => (
                                <TrendyCollectionCard
                                    key={card._id}
                                    title={card.title}
                                    price={card.price}
                                    image={`http://localhost:3001${card.image}`}
                                    image2={`http://localhost:3001${card.image2}`}
                                    slug={card._id}
                                />
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full min-h-64">
                                <Spinner />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-[1360px] w-full mx-auto py-8 flex bg-[#F9EBF9] text-[28px] items-center justify-center gap-3">
                    <SlHome />
                    <p>Find Shops Near You</p>
                    <button className="capitalize text-[18px] border-black border-2 px-6 py-1">find store</button>
                </div>
            </section>
            <section>
                <div className="max-w-[1360px] w-full mx-auto py-10 flex justify-between flex-wrap">
                    <div className="w-full flex gap-3 justify-center text-[40px] items-center mt-10">
                        <Line />
                        <h1>Autmn Collection</h1>
                        <Line />
                    </div>

                    <div className="text-[20px] flex justify-center w-full">
                        <h2>Collect your loves with our autumn arrivals.</h2>
                    </div>
                    <div className="flex w-full justify-around py-10">
                        {autmnCards.length > 0 ? (
                            autmnCards.map((card) => (
                                <TrendyCollectionCard
                                    key={card._id}
                                    title={card.title}
                                    price={card.price}
                                    image={`http://localhost:3001${card.image}`}
                                    image2={`http://localhost:3001${card.image2}`}
                                    slug={card._id}
                                />
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full min-h-64">
                                <Spinner />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-[1360px] w-full mx-auto py-10 flex justify-between flex-wrap">
                    {
                        CollectionCards.map((item, index) => (
                            <CollectionCard key={index} img={item.img} title={item.title} desc={item.desc} />
                        ))
                    }

                </div>
            </section>
            <section>
                <div className="max-w-[1360px] w-full mx-auto py-10 flex justify-between flex-wrap">
                    <div className="w-full flex gap-3 justify-center text-[40px] items-center mt-10">
                        <Line />
                        <h1>Featured Products</h1>
                        <Line />
                    </div>
                    <div className="flex w-full justify-around py-10">
                        {featuredCards.length > 0 ? (
                            featuredCards.map((card) => (
                                <TrendyCollectionCard
                                    key={card._id}
                                    title={card.title}
                                    price={card.price}
                                    image={`http://localhost:3001${card.image}`}
                                    image2={`http://localhost:3001${card.image2}`}
                                    slug={card._id}
                                />
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full min-h-64">
                                <Spinner />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-[#EDE2E1] bg-cover bg-center" style={{ backgroundImage: "url('https://demo-alukas.myshopify.com/cdn/shop/files/alk_bg_testi.jpg?v=1711954099')" }}>
                    <div className="max-w-[1360px] w-full mx-auto pb-20 flex justify-between gap-10 flex-wrap relative">
                        <div className="w-full flex gap-3 justify-center text-[40px] items-center pt-20">
                            <h1>Customer Review</h1>
                        </div>
                        <div className="flex  justify-between w-full ">
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                        </div>
                    </div>
                </div>

            </section >
            <section>
                <div className="w-full flex gap-3 justify-center text-[40px] items-center mt-10 flex-col">

                    <h1>Read Journal</h1>
                    <p className="text-[20px]">Latest trends and inspirations in fashion design.</p>
                </div>
                <div className="max-w-[1360px] w-full mx-auto pt-10 pb-32 flex justify-between">
                    <ReadJournalCard image="https://demo-alukas.myshopify.com/cdn/shop/articles/3.jpg?v=1711695248&width=533" date="Mar 06 2024" desc="Selective Styles Help your look" />
                    <ReadJournalCard image="https://demo-alukas.myshopify.com/cdn/shop/articles/2.jpg?v=1711695314&width=533" date="Mar 06 2024" desc="How to Style a Quiff" />
                    <ReadJournalCard image="https://demo-alukas.myshopify.com/cdn/shop/articles/1.jpg?v=1711695328&width=533" date="Mar 06 2024" desc="Christmas Gift Guide" />
                </div>
            </section>

            <section>
                <div className="max-w-[1360px] w-full mx-auto pt-10 pb-32 flex items-center justify-center ">
                    <FollowUs />
                </div>
            </section >
        </div >
    )
}