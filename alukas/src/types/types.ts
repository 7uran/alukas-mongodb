import { ReactNode } from "react";

export interface LayoutTypes {
    children: ReactNode
}

export interface Project {
    _id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
    content?: string;
}


export interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string;

}


export interface BlogSlugProps {
    params: { slug: string };
}

export interface ShopCardProps {
    title: string,
    desc: string,
    img: string
}

export interface PopularCategoryCardProps {
    img: string,
    title: string
}

export interface CollectionCardProps {
    img: string,
    title: string,
    desc: string
}

export interface TrendyCollectionCardProps {
    title: string,
    price: number,
    image: string,
    image2: string,
    slug: string
}

export interface Card {
    _id: string;
    title: string;
    price: number;
    image: string;
    image2: string;
    cardType: string;
    slug: string;
}

export interface ShopCardFeatures {
    color: string;
    size: string;
    material: string;
}

export interface ShopCard {
    _id: string;
    title: string;
    price: number;
    image: string;
    image2: string;
    features: ShopCardFeatures;
}

export type ImageData = {
    src: string;
};

export interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
}