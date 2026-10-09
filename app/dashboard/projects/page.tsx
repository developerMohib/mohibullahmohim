"use client";

import axiosInstance from "@/components/hooks/axiosInstance";
import { IProject } from "@/sources/projects.types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProjectManagementPage = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axiosInstance.get("/project/all");
        if (res.status === 200) {
          setProjects(res.data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        Swal.fire({
          icon: "error",
          title: "Error Loading Data",
          text: "Failed to fetch projects from server.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${title}". This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      setDeletingId(id);
      await axiosInstance.delete(`/project/delete/${id}`);

      // Optimistically remove from state
      setProjects((prev) => prev.filter((project) => project._id !== id));

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Project has been deleted successfully.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Could not delete project. Please try again.",
      });
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-medium">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Project Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage, edit, and organize portfolio items ({projects.length} total)
          </p>
        </div>

        <Link
          href="/dashboard/project/create"
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          + Add New Project
        </Link>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
              <tr>
                <th className="p-4">Project</th>
                <th className="p-4">Category / Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Published</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr
                    key={project._id}
                    className="hover:bg-gray-50/80 transition-colors"
                  >
                    {/* Thumbnail & Title */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden shrink-0">
                          {project.coverImages ? (
                            <Image
                              src={project.coverImages}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs font-semibold text-gray-400 bg-gray-100">
                              No Image
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="font-semibold text-gray-900 line-clamp-1">
                            {project.title}
                          </div>
                          {project.featured && (
                            <span className="inline-flex items-center text-[10px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 mt-0.5">
                              ★ Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Category & Role */}
                    <td className="p-4">
                      <div className="flex flex-col gap-1 items-start">
                        {project.category && (
                          <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full">
                            {project.category}
                          </span>
                        )}
                        {project.role && (
                          <span className="text-xs text-gray-500">
                            {project.role}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
                          project.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {project.status || "Completed"}
                      </span>
                    </td>

                    {/* Publish Date */}
                    <td className="p-4 text-xs text-gray-500 whitespace-nowrap">
                      {project.createdAt
                        ? new Date(project.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )
                        : "N/A"}
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/project/${project.slug}`}
                          target="_blank"
                          className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                        >
                          View
                        </Link>

                        <Link
                          href={`/dashboard/project/edit/${project.slug}`}
                          className="px-2.5 py-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded hover:bg-amber-100 transition-colors"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(project._id, project.title)
                          }
                          disabled={deletingId === project._id}
                          className="px-2.5 py-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded hover:bg-red-100 transition-colors disabled:opacity-50"
                        >
                          {deletingId === project._id ? "..." : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center p-12 text-gray-400">
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-base font-medium text-gray-600">
                        No projects found
                      </p>
                      <p className="text-xs text-gray-400">
                        Get started by adding a new project to your portfolio.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementPage;