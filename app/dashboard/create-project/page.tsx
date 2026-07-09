"use client";

import axiosInstance from "@/components/hooks/axiosInstance";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function CreateProjectPage() {
  const [loading, setLoading] = useState(false);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const formEl = e.currentTarget;

  // FormData automatically includes all input fields,
  // including the file input.
  const formData = new FormData(formEl);

  // Convert technologies to JSON/string if your backend expects an array
  const technologies = (
    formData.get("technologies") as string
  )
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  formData.set("technologies", JSON.stringify(technologies));

  try {
    const res = await axiosInstance.post(
      "/project/creation",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    Swal.fire({
      icon: "success",
      title: res.data.message,
      timer: 1500,
      showConfirmButton: false,
    });

    formEl.reset();
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      title: "Project creation failed",
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Create New Project
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="title" className="block mb-1 font-medium text-slate-700">
            Title
          </label>
          <input name="title" placeholder="Title"
            className="w-full border p-3 rounded-lg" required />
        </div>

        <div>
          <label htmlFor="slug" className="block mb-1 font-medium text-slate-700">
            Slug
          </label>
          <input name="slug" placeholder="Slug (e.g. blog-cms)"
            className="w-full border p-3 rounded-lg" required />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input name="category" placeholder="Category"
            className="border p-3 rounded-lg" />

          <input name="status" placeholder="Status (completed/ongoing)"
            className="border p-3 rounded-lg" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input name="year" placeholder="Year"
            className="border p-3 rounded-lg" />

          <input name="duration" placeholder="Duration"
            className="border p-3 rounded-lg" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input name="teamSize" placeholder="Team Size"
            className="border p-3 rounded-lg" />

          <input name="complexity" placeholder="Complexity"
            className="border p-3 rounded-lg" />
        </div>

        <input name="liveLink" placeholder="Live Link"
          className="w-full border p-3 rounded-lg" />

        <input name="githubUrl" placeholder="GitHub URL"
          className="w-full border p-3 rounded-lg" />

        <input name="demoUrl" placeholder="Demo URL"
          className="w-full border p-3 rounded-lg" />


        <div>
          <label htmlFor="description" className="block mb-1 font-medium text-slate-700">
            Description
          </label>
          <textarea name="description" placeholder="Description"
            className="w-full border p1-3 rounded-lg" rows={3} />
        </div>

        <div>
          <label htmlFor="challenge" className="block mb-1 font-medium text-slate-700">
            Challenge
          </label>
          <textarea name="challenge" placeholder="Challenge"
            className="w-full border p-3 rounded-lg" rows={3} />
        </div>
        {/* comma separated */}
        <input name="technologies"
          placeholder="Technologies (React, Node, MongoDB)"
          className="w-full border p-3 rounded-lg" />

        <label htmlFor="image" className="block">
          Select Image
        </label>

        <input
          type="file"
          id="image"
          name="coverImages"
          accept="image/*"
          className="border p-3 rounded-lg"
        />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="featured" />
          Featured Project
        </label>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-slate-800 text-white p-3 rounded-lg hover:bg-red-500 transition ${loading ? "cursor-not-allowed" : ""}`}
        >
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </div>
  );
}