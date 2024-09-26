import React, { useState, useRef, useEffect } from "react";
import { Card, CreateCardModalProps } from "@/types/types";



export default function CreateCardModal({ isOpen, onClose, onSave }: CreateCardModalProps) {
    const [newCard, setNewCard] = useState<{
        title: string;
        price: string;
        image: string;
        image2: string;
        cardType: string;
        features: {
            color: string;
            size: string;
            material: string;
        };
    }>({
        title: "",
        price: "",
        image: "",
        image2: "",
        cardType: "",
        features: {
            color: "",
            size: "",
            material: "",
        },
    });

    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewCard((prev) => ({ ...prev, [name]: value }));
    };

    const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewCard((prev) => ({
            ...prev,
            features: { ...prev.features, [name]: value },
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "image" | "image2") => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewCard((prev) => ({ ...prev, [field]: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const finalCard: Card = {
            ...newCard,
            _id: new Date().toISOString(),
            slug: newCard.title.toLowerCase().replace(/\s+/g, '-'),
            price: parseFloat(newCard.price),
        };

        onSave(finalCard);
        onClose();
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={modalRef} className="bg-white p-6 rounded-md w-[400px]">
                <h2>Create New Card</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newCard.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={newCard.price}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => handleFileChange(e, "image")}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                        type="file"
                        name="image2"
                        onChange={(e) => handleFileChange(e, "image2")}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                        type="text"
                        name="cardType"
                        placeholder="Card Type"
                        value={newCard.cardType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <div className="flex flex-col gap-2">
                        <h3>Features</h3>
                        <input
                            type="text"
                            name="color"
                            placeholder="Color"
                            value={newCard.features.color}
                            onChange={handleFeatureChange}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                        <input
                            type="text"
                            name="size"
                            placeholder="Size"
                            value={newCard.features.size}
                            onChange={handleFeatureChange}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                        <input
                            type="text"
                            name="material"
                            placeholder="Material"
                            value={newCard.features.material}
                            onChange={handleFeatureChange}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                </div>
                <div className="mt-4 flex justify-end space-x-4">
                    <button onClick={onClose} className="border py-2 px-4 hover:bg-black transition hover:text-white rounded-sm">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="border py-2 px-4 hover:bg-black transition hover:text-white rounded-sm">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
