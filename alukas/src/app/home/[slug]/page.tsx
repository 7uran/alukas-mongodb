import ProductSlider from "@/components/ProductSlider";

export default function Shop() {
    const images = [
        'https://via.placeholder.com/400x400?text=Product+1',
        'https://via.placeholder.com/400x400?text=Product+2',
        'https://via.placeholder.com/400x400?text=Product+3',
        'https://via.placeholder.com/400x400?text=Product+4',
    ];
    return (

        <div className="max-w-[1360px] w-full mx-auto py-10">
            <ProductSlider />
        </div>
    )
}