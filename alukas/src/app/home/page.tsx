import Line from "@/components/Line";
import PopularCategroyCard from "@/components/PopularCategoryCard";
import ShopCard from "@/components/ShopCard";
import Slider from "@/components/Slider";
import TrendyCollectionCard from "@/components/TrendyCollectionCard";
import { SlHome } from "react-icons/sl";

export default function HomePage() {

    return (
        <div>
            <section>
                <Slider />
            </section>
            <section>
                <div className="max-w-[1360px] w-full mx-auto py-10 flex justify-between flex-wrap">
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
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
                        <PopularCategroyCard />
                        <PopularCategroyCard />
                        <PopularCategroyCard />
                        <PopularCategroyCard />
                        <PopularCategroyCard />
                        <PopularCategroyCard />
                    </div>
                    <div>

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
                        <h2>Collect your loves with our autumn arrivals.</h2>
                    </div>
                    <div className="flex w-full justify-between py-10">
                        <TrendyCollectionCard />
                        <TrendyCollectionCard />
                        <TrendyCollectionCard />
                        <TrendyCollectionCard />

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
        </div>
    )
}