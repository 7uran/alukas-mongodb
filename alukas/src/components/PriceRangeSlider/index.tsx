// components/PriceRangeSlider.tsx
import { Range, getTrackBackground } from 'react-range';
import { Dispatch, SetStateAction } from 'react';

interface PriceRangeSliderProps {
    minPrice: number;
    maxPrice: number;
    setMinPrice: Dispatch<SetStateAction<number>>;
    setMaxPrice: Dispatch<SetStateAction<number>>;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
}) => {
    const STEP = 1;
    const MIN = 0;
    const MAX = 1000; // Adjust this if needed

    const handleChange = (values: number[]) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
    };

    return (
        <div className="my-4">
            <h2 className="mb-2 text-lg font-semibold">Select Price Range</h2>
            <Range
                values={[minPrice, maxPrice]}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="flex items-center"
                    >
                        <div
                            className="h-2 rounded-lg"
                            style={{
                                width: '100%',
                                background: getTrackBackground({
                                    values: [minPrice, maxPrice],
                                    colors: ['#ccc', '#548BF4', '#ccc'],
                                    min: MIN,
                                    max: MAX,
                                }),
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ index, props }) => (
                    <div
                        {...props}
                        className="h-4 w-4 bg-blue-500 rounded-full"
                        style={{ outline: 'none' }}
                    />
                )}
            />
            <div className="flex justify-between mt-2">
                <span>Min Price: ${minPrice}</span>
                <span>Max Price: ${maxPrice}</span>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
