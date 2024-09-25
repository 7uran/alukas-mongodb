import { useState } from 'react';

const PriceRangeSlider: React.FC = () => {
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1570);
    const maxRange = 1570;

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxPrice - 1);
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minPrice + 1);
        setMaxPrice(value);
    };

    return (
        <div className="flex flex-col w-full gap-3">

            <input
                type="range"
                id="min-price"
                className="accent-black w-full h-1.5 bg-black rounded-lg appearance-none cursor-pointer "
                min="0"
                max={maxRange}
                value={minPrice}
                onChange={handleMinPriceChange}
            />


            <input
                type="range"
                id="max-price"
                className="  accent-black w-full h-1.5 bg-black rounded-lg appearance-none cursor-pointer "
                min="0"
                max={maxRange}
                value={maxPrice}
                onChange={handleMaxPriceChange}
            />
            <label htmlFor="max-price" className="mb-2 mt-4 text-[17px] font-medium text-gray-900 ">
                Price:${minPrice}.00 - ${maxPrice}.00
            </label>
        </div>
    );
};

export default PriceRangeSlider;
