import { AccordionItemProps } from "@/types/types";
import { useState } from "react";



const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white">
            <button
                className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-[24px] text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none"
                type="button"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                {title}
                <span
                    className={`${isOpen ? "rotate-180" : ""} -me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </button>
            <div
                className={`transition duration-500 ease-in-out transform ${isOpen ? " opacity-100 max-h-[200px] transition" : " opacity-0 max-h-0 overflow-hidden"}`}
                aria-labelledby="flush-heading1"
            >
                <div className="px-5 py-4 text-[17px] flex flex-col gap-2 text-gray-600">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
