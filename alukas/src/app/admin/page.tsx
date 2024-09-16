"use client";
import { useRequestMutation } from "@/http/axiosFetcher";
import { Project } from "@/types/types";
import { useEffect, useState } from "react";

export default function Admin() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const { trigger: loadProjects, isMutating, error } = useRequestMutation<{ success: boolean; blogs: Project[] }>(
        "projects",
        {
            method: "GET",
            module: "devApi",
        }
    );

    const { trigger: deleteProject } = useRequestMutation<{ success: boolean }>("projects", {
        method: "DELETE",
        module: "devApi",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await loadProjects();
                if (response && response.blogs) {
                    const formattedProjects = response.blogs.map((project) => ({
                        ...project,
                        image: `http://localhost:3001/uploads/${project.image.split("/").pop()}`,
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

 ;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            {loading ? (
                <p>Loading projects...</p>
            ) : (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-2 text-left">Image</th>
                            <th className="border border-gray-300 p-2 text-left">Title</th>
                            <th className="border border-gray-300 p-2 text-left">Description</th>
                            <th className="border border-gray-300 p-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="border border-gray-300 p-2">{project.title}</td>
                                <td className="border border-gray-300 p-2">{project.description}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none"
                                        // onClick={() => handleDelete(project._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
