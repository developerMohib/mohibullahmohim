"use client";

import axiosInstance from "@/components/hooks/axiosInstance";
import { PROJECT_CATEGORIES, PROJECT_ROLES, PROJECT_STATUSES } from "@/sources/projects.types";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const MAX_TECHNOLOGIES = 10;
const MAX_HIGHLIGHTS = 5;

const optionalFields = [
  "role",
  "category",
  "liveLink",
  "githubFrontendUrl",
  "githubBackendUrl",
  "description",
  "challenge",
] as const;

const inputCls = "w-full border p-3 rounded-lg";
const labelCls = "block mb-1 font-medium text-slate-700";

// FastAPI 422 uses `detail` (array or string), not `message`
function getErrorMessage(error: unknown): string {
  if (!axios.isAxiosError(error)) return "An unexpected error occurred";

  const data = error.response?.data;
  if (Array.isArray(data?.detail)) {
    return data.detail
      .map((d: { loc?: (string | number)[]; msg: string }) =>
        `${(d.loc ?? []).filter((p) => p !== "body").join(".")}: ${d.msg}`
      )
      .join("\n");
  }
  if (typeof data?.detail === "string") return data.detail;
  return data?.message || error.message || "Project creation failed";
}

export default function CreateProjectPage() {
  const [loading, setLoading] = useState(false);
  const [highlights, setHighlights] = useState<string[]>([""]);

  const updateHighlight = (i: number, value: string) =>
    setHighlights((prev) => prev.map((h, idx) => (idx === i ? value : h)));
  const addHighlight = () =>
    setHighlights((prev) =>
      prev.length < MAX_HIGHLIGHTS ? [...prev, ""] : prev
    );
  const removeHighlight = (i: number) =>
    setHighlights((prev) =>
      prev.length === 1 ? [""] : prev.filter((_, idx) => idx !== i)
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    // technologies: comma separated -> JSON string[]
    const technologies = ((formData.get("technologies") as string) || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    if (technologies.length > MAX_TECHNOLOGIES) {
      Swal.fire({
        icon: "warning",
        title: `Maximum ${MAX_TECHNOLOGIES} technologies allowed`,
      });
      return;
    }
    formData.set("technologies", JSON.stringify(technologies));

    // highlights -> JSON string[]
    const cleanHighlights = highlights.map((h) => h.trim()).filter(Boolean);
    formData.set("highlights", JSON.stringify(cleanHighlights));

    // featured: checkbox -> "true" | "false"
    formData.set("featured", String(formData.get("featured") === "on"));

    // don't send empty optional fields ("" breaks HttpUrl / enums)
    for (const key of optionalFields) {
      const value = formData.get(key);
      if (typeof value === "string" && !value.trim()) formData.delete(key);
    }

    setLoading(true);
    try {
      // no manual Content-Type: the browser adds the multipart boundary
      const res = await axiosInstance.post("/project/creation", formData);

      Swal.fire({
        icon: "success",
        title: res.data.message,
        timer: 1500,
        showConfirmButton: false,
      });

      formEl.reset();
      setHighlights([""]);
    } catch (error: unknown) {
      Swal.fire({
        icon: "error",
        title: "Failed to create project",
        text: getErrorMessage(error),
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
        {/* ---------- Skim layer ---------- */}
        <div>
          <label htmlFor="title" className={labelCls}>Title *</label>
          <input
            id="title"
            name="title"
            placeholder="Project Title"
            className={inputCls}
            minLength={4}
            maxLength={100}
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className={labelCls}>Slug *</label>
          <input
            id="slug"
            name="slug"
            placeholder="e.g. project-title"
            className={inputCls}
            required
          />
        </div>

        <div>
          <label htmlFor="tagline" className={labelCls}>
            Tagline * (10-90 characters)
          </label>
          <input
            id="tagline"
            name="tagline"
            placeholder="project one-liner title as tagline"
            className={inputCls}
            minLength={10}
            maxLength={90}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label htmlFor="role" className={labelCls}>Role</label>
            <select id="role" name="role" defaultValue="" className={inputCls}>
              <option value="">Select role</option>
              {PROJECT_ROLES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="category" className={labelCls}>Category</label>
            <select id="category" name="category" defaultValue="" className={inputCls}>
              <option value="">Select category</option>
              {PROJECT_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="status" className={labelCls}>Status *</label>
            <select
              id="status"
              name="status"
              defaultValue="Completed"
              className={inputCls}
              required
            >
              {PROJECT_STATUSES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="technologies" className={labelCls}>
            Technologies * (comma separated, max {MAX_TECHNOLOGIES})
          </label>
          <input
            id="technologies"
            name="technologies"
            placeholder="React, Node.js, MongoDB ..."
            className={inputCls}
            required
          />
        </div>

        <div>
          <label htmlFor="liveLink" className={labelCls}>Live Link</label>
          <input
            id="liveLink"
            name="liveLink"
            type="url"
            placeholder="https://..."
            className={inputCls}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="githubFrontendUrl" className={labelCls}>
              GitHub Frontend URL
            </label>
            <input
              id="githubFrontendUrl"
              name="githubFrontendUrl"
              type="url"
              placeholder="https://github.com/..."
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="githubBackendUrl" className={labelCls}>
              GitHub Backend URL
            </label>
            <input
              id="githubBackendUrl"
              name="githubBackendUrl"
              type="url"
              placeholder="https://github.com/..."
              className={inputCls}
            />
          </div>
        </div>

        {/* ---------- Image: name MUST be coverImages ---------- */}
        <div>
          <label htmlFor="coverImages" className={labelCls}>Cover Image *</label>
          <input
            id="coverImages"
            type="file"
            name="coverImages"
            accept="image/*"
            className="border p-3 rounded-lg w-full"
            required
          />
        </div>

        {/* ---------- Detail layer ---------- */}
        <div>
          <label htmlFor="description" className={labelCls}>Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            className={inputCls}
            rows={3}
          />
        </div>

        <div>
          <label className={labelCls}>
            Highlights (max {MAX_HIGHLIGHTS})
          </label>
          <div className="space-y-2">
            {highlights.map((h, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={h}
                  onChange={(e) => updateHighlight(i, e.target.value)}
                  placeholder={`Highlight ${i + 1}`}
                  className={inputCls}
                />
                <button
                  type="button"
                  onClick={() => removeHighlight(i)}
                  className="px-4 rounded-lg border text-slate-600 hover:bg-red-50"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {highlights.length < MAX_HIGHLIGHTS && (
            <button
              type="button"
              onClick={addHighlight}
              className="mt-2 text-sm font-medium text-slate-700 hover:underline"
            >
              + Add highlight
            </button>
          )}
        </div>

        <div>
          <label htmlFor="challenge" className={labelCls}>Challenge</label>
          <textarea
            id="challenge"
            name="challenge"
            placeholder="Challenge"
            className={inputCls}
            rows={3}
          />
        </div>

        {/* ---------- Meta ---------- */}
        <label className="flex items-center gap-2">
          <input type="checkbox" name="featured" />
          Featured Project
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-slate-800 p-3 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </div>
  );
}