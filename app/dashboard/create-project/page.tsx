"use client";

import axiosInstance from "@/components/hooks/axiosInstance";
import { useState } from "react";

export default function CreateProjectPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formEl = e.currentTarget; // 👈 SAVE IT HERE

    const form = new FormData(formEl);

    const data = {
      title: form.get("title"),
      slug: form.get("slug"),
      description: form.get("description"),
      challenge: form.get("challenge"),
      liveLink: form.get("liveLink"),
      githubUrl: form.get("githubUrl"),
      demoUrl: form.get("demoUrl"),
      category: form.get("category"),
      status: form.get("status"),
      featured: form.get("featured") === "on",
      technologies: (form.get("technologies") as string)
        ?.split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      image: (form.get("image") as string)
        ?.split(",")
        .map((img) => img.trim())
        .filter(Boolean),
    };

    try {
      const res = await axiosInstance.post("/project/creation", data);
      if (res.status === 200) {
        setSuccess(res.data.message)
      }
      formEl.reset(); // ✅ SAFE NOW
    } catch (err) {
      console.error(err);
      setSuccess("Project created fail")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Create New Project
      </h1>
      {success && <p className="text-green-300">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="title" placeholder="Title"
          className="w-full border p-3 rounded-lg" required />

        <input name="slug" placeholder="Slug (e.g. blog-cms)"
          className="w-full border p-3 rounded-lg" required />

        <textarea name="description" placeholder="Description"
          className="w-full border p-3 rounded-lg" rows={3} />

        {/* 👇 NEW: Challenge */}
        <textarea
          name="challenge"
          placeholder="Project Challenge (What problem did you solve?)"
          className="w-full border p-3 rounded-lg"
          rows={4}
        />

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

        {/* comma separated */}
        <input name="technologies"
          placeholder="Technologies (React, Node, MongoDB)"
          className="w-full border p-3 rounded-lg" />

        <textarea name="image"
          placeholder="Image URLs (comma separated)"
          className="w-full border p-3 rounded-lg"
          rows={3}
        />

        <label className="flex items-center gap-2">
          <input type="checkbox" name="featured" />
          Featured Project
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-800 text-white p-3 rounded-lg hover:bg-red-500 transition"
        >
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </div>
  );
}