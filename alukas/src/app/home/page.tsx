import ShopCard from "@/components/ShopCard";
import Slider from "@/components/Slider";

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
        </div>
    )
}