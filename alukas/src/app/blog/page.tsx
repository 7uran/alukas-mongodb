"use client";
import { FaAngleRight } from "react-icons/fa6";
import BlogCard from "../../components/BlogCard/index";
import SkeletonLoader from "../../components/BlogCardSkeletonLoader/index";
import { useRequestMutation } from "@/http/axiosFetcher";
import { useEffect, useState } from "react";
import { Project } from "@/types/types";
import BlogCardSkeletonLoader from "../../components/BlogCardSkeletonLoader/index";

export default function BlogPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
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
                    const formattedProjects = response.blogs.map(project => ({
                        ...project,
                        image: `http://localhost:3001/uploads/${project.image.split('/').pop()}`
                    }));
                    setProjects(formattedProjects);
                } else {
                    console.error("Unexpected response format:", response);
                }
            } catch (err) {
                console.error("Failed to fetch projects:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [loadProjects]);

    return (
        <div className="min-h-screen max-w-[1360px] w-full mx-auto">
            <section>
                <div className="flex items-center flex-col py-14 gap-2">
                    <h1 className="text-5xl">News</h1>
                    <span className="flex items-center gap-1">
                        Home<FaAngleRight className="text-xs" />News
                    </span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-between gap-y-12">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <BlogCardSkeletonLoader key={index} />
                        ))
                    ) : (
                        projects.map((project) => (
                            <BlogCard
                                key={project._id}
                                id={project._id}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                slug={project.slug}
                            />
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}
