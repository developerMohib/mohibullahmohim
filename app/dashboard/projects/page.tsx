"use client";

import axiosInstance from "@/components/hooks/axiosInstance";
import { IProject } from "@/sources/projects.types";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectManagementPage = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await axiosInstance.get("/project/all");
                if (res.status === 200) {
                    setProjects(res.data.data || []);
                }
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this project?"
            );

            if (!confirmDelete) return;

            await axiosInstance.delete(`/project/delete/${id}`);

            // Remove project from UI without reload
            setProjects((prev) => prev.filter((project) => project._id !== id));

            alert("Project deleted successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to delete project");
        }
    };

    if (loading) {
        return (
            <div className="p-6">
                <h1>Loading projects...</h1>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Project Management</h1>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="text-left bg-gray-100">
                        <tr>
                            <th className="p-3">Title</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Publish Date</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <tr key={project._id} className="border-t">
                                    <td className="p-3 font-medium">{project.title}</td>

                                    <td className="p-3">
                                        <span className="px-2 py-1 text-sm bg-blue-100 text-blue-600 rounded">
                                            {project.category}
                                        </span>
                                    </td>

                                    <td className="p-3 text-gray-600">
                                        {new Date(project.createdAt).toLocaleDateString()}
                                    </td>

                                    <td className="p-3">
                                        <div className="flex gap-2 justify-center">
                                            <Link
                                                href={`/project/${project.slug}`}
                                                className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
                                            >
                                                View
                                            </Link>

                                            <Link
                                                href={`/dashboard/project/edit/${project.slug}`}
                                                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(project._id)}
                                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center p-6">
                                    No projects found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectManagementPage;