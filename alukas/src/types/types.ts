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