"use client";

import axiosInstance from "@/lib/axiosInstance";
import { IProject } from "@/types/projects";
import { useState } from "react";
import Swal from "sweetalert2";

export default function UpdateProjectForm({ project }: { project: IProject }) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.currentTarget);

        const data = {
            title: form.get("title"),
            slug: form.get("slug"),
            description: form.get("description"),
            challenges: form.get("challenges"), // ফর্মের নাম challenges, কিন্তু ব্যাকএন্ডে challenge থাকলে ঠিক করে নিবেন
            liveLink: form.get("liveLink"),
            githubFrontendUrl: form.get("githubFrontendUrl"),
            githubBackendUrl: form.get("githubBackendUrl"),
            category: form.get("category"),
            status: form.get("status"),
            featured: form.get("featured") === "on",
            technologies: (form.get("technologies") as string)
                ?.split(",")
                .map((t) => t.trim())
                .filter(Boolean),
            // image ফিল্ডটি যদি coverImages হয়, তবে ব্যাকএন্ডে পাঠানোর সময় নাম মিলিয়ে নেবেন
            image: (form.get("image") as string)
                ?.split(",")
                .map((img) => img.trim())
                .filter(Boolean),
        };

        try {
            const res = await axiosInstance.put(`/project/${project._id}`, data);

            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Project Updated Successfully",
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Project Update Failed",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Update Project</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* ✅ সব defaultValue এর শেষে ?? "" যোগ করা হয়েছে */}
                <div>
                    <label htmlFor="title" className="block mb-1 font-medium">Title</label>
                    <input
                        id="title"
                        name="title"
                        defaultValue={project.title ?? ""}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="slug" className="block mb-1 font-medium">Slug</label>
                    <input
                        id="slug"
                        name="slug"
                        defaultValue={project.slug ?? ""}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block mb-1 font-medium">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        defaultValue={project.description ?? ""}
                        rows={4}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="challenges" className="block mb-1 font-medium">Challenges</label>
                    <textarea
                        id="challenges"
                        name="challenges"
                        defaultValue={project.challenge ?? ""} 
                        rows={4}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block mb-1 font-medium">Category</label>
                    <input
                        id="category"
                        name="category"
                        defaultValue={project.category ?? ""}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="status" className="block mb-1 font-medium">Status</label>
                    <input
                        id="status"
                        name="status"
                        defaultValue={project.status ?? ""}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="liveLink" className="block mb-1 font-medium">Live Link</label>
                    <input
                        id="liveLink"
                        name="liveLink"
                        defaultValue={project.liveLink ?? ""}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="githubFrontendUrl" className="block mb-1 font-medium">GitHub Frontend URL</label>
                    <input
                        id="githubFrontendUrl"
                        name="githubFrontendUrl"
                        defaultValue={project.githubFrontendUrl ?? ""}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="githubBackendUrl" className="block mb-1 font-medium">GitHub Backend URL</label>
                    <input
                        id="githubBackendUrl"
                        name="githubBackendUrl"
                        defaultValue={project.githubBackendUrl ?? ""}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="technologies" className="block mb-1 font-medium">Technologies (comma separated)</label>
                    <input
                        id="technologies"
                        name="technologies"
                        defaultValue={project.technologies?.join(", ") ?? ""}
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block mb-1 font-medium">Images (comma separated)</label>
                    <textarea
                        id="image"
                        name="image"
                        rows={3}
                        defaultValue={project.coverImages ?? ""} 
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <label className="flex items-center gap-2">
                    {/* ✅ Checkbox এর জন্য ?? false ব্যবহার করা হয়েছে */}
                    <input
                        type="checkbox"
                        name="featured"
                        defaultChecked={project.featured ?? false}
                    />
                    Featured Project
                </label>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition disabled:opacity-50"
                >
                    {loading ? "Updating..." : "Update Project"}
                </button>
            </form>
        </div>
    );
}