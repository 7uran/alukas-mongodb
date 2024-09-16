"use client";
import BlogSkeletonLoader from "@/components/BlogSkeletonLoader";
import { useRequestMutation } from "@/http/axiosFetcher";
import { Project } from "@/types/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";


export default function BlogDetail() {
    const searchParams = useSearchParams();
    const projectId = searchParams.get('id');
    const [project, setProject] = useState<Project | null>(null);
    const { trigger: loadProjects, isMutating, error } = useRequestMutation<{ success: boolean; blogs: Project[] }>(
        "projects",
        {
            method: "GET",
            module: "devApi",
        }
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await loadProjects();
                if (response && response.blogs) {
                    const projectData = response.blogs.find(p => p._id === projectId);
                    if (projectData) {
                        const formattedProject = {
                            ...projectData,
                            image: `http://localhost:3001/uploads/${projectData.image.split('/').pop()}`
                        };
                        setProject(formattedProject);
                    } else {
                        console.error("Project not found");
                    }
                } else {
                    console.error("Unexpected response format:", response);
                }
            } catch (err) {
                console.error("Failed to fetch projects:", err);
            }
        };

        if (projectId) {
            fetchData();
        }
    }, [projectId, loadProjects]);

    if (isMutating) return <BlogSkeletonLoader />; 
    if (error) return <div className="text-center py-4">Error loading project details</div>;

    return (
        <div className="min-h-screen max-w-[1360px] w-full mx-auto flex flex-col items-center justify-center py-8">
            {project ? (
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="bg-black text-sm px-2 uppercase text-white">news</div>
                    <h1 className="text-4xl font-medium">{project.title}</h1>
                    <p className="text-gray-600">Alukas Shopify - Mar 09 2024 - 0 comments</p>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src={project.image}
                            width={1170}
                            height={759}
                            alt={project.title || 'Project Image'}
                            className="object-cover"
                        />
                    </div>
                    <div className="text-xl flex items-center justify-center">
                        {project.description}
                    </div>
                </div>
            ) : (
                <div className="text-center">No project found</div>
            )}
        </div>
    );
}
