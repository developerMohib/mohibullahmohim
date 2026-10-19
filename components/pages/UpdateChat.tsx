"use client";

import { PortfolioConfig, Project } from "@/sources/charbotconfig";
import React, { useEffect, useState } from "react";
import { getApiErrorMessage, getPortfolioConfig, updatePortfolioConfig } from "../hooks/chatbotconfig";
import Section from "../utils/Section";
import FormField from "../sections/FormField";

type StatusType = "success" | "error" | "";

interface StatusMessage {
  text: string;
  type: StatusType;
}

const toList = (value: string, separator: "," | "\n"): string[] =>
  value
    .split(separator)
    .map((item) => item.trim())
    .filter(Boolean);

const fromList = (items: string[], separator: "," | "\n"): string =>
  items.join(separator === "," ? ", " : "\n");

const initialStatus: StatusMessage = { text: "", type: "" };

export default function UpdateChat() {
  const [config, setConfig] = useState<PortfolioConfig | null>(null);
  const [adminKey, setAdminKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusMessage>(initialStatus);

useEffect(() => {
  let cancelled = false;

  const loadConfig = async () => {
    try {
      const data = await getPortfolioConfig();

      if (cancelled) return;

      setConfig(data);
      setStatus(initialStatus);
    } catch (error: unknown) {
      if (cancelled) return;

      setStatus({
        text: getApiErrorMessage(error),
        type: "error",
      });
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  };

  void loadConfig();

  return () => {
    cancelled = true;
  };
}, []);

  const updateAbout = (key: keyof PortfolioConfig["about"], value: string) => {
    setConfig((current) =>
      current
        ? {
            ...current,
            about: {
              ...current.about,
              [key]: value,
            },
          }
        : current
    );
  };

  const updateContact = (
    key: keyof PortfolioConfig["contact"],
    value: string
  ) => {
    setConfig((current) =>
      current
        ? {
            ...current,
            contact: {
              ...current.contact,
              [key]: value,
            },
          }
        : current
    );
  };

  const updateTechStack = (
    key: keyof PortfolioConfig["tech_stack"],
    value: string
  ) => {
    setConfig((current) =>
      current
        ? {
            ...current,
            tech_stack: {
              ...current.tech_stack,
              [key]: toList(value, ","),
            },
          }
        : current
    );
  };

  const updateStringArray = (
    key: "specializations" | "rules",
    value: string
  ) => {
    setConfig((current) =>
      current
        ? {
            ...current,
            [key]: toList(value, "\n"),
          }
        : current
    );
  };

  const updateProject = <K extends keyof Project>(
    index: number,
    key: K,
    value: Project[K]
  ) => {
    setConfig((current) => {
      if (!current) return current;

      const projects = [...current.projects];
      projects[index] = {
        ...projects[index],
        [key]: value,
      };

      return {
        ...current,
        projects,
      };
    });
  };

  const addProject = () => {
    setConfig((current) => {
      if (!current) return current;

      const newProject: Project = {
        id: current.projects.length + 1,
        name: "",
        stack: [],
        description: "",
      };

      return {
        ...current,
        projects: [...current.projects, newProject],
      };
    });
  };

  const removeProject = (index: number) => {
    setConfig((current) =>
      current
        ? {
            ...current,
            projects: current.projects.filter((_, projectIndex) => projectIndex !== index),
          }
        : current
    );
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!config) return;

    setSaving(true);
    setStatus({ text: "Saving updates to MongoDB...", type: "" });

    try {
      await updatePortfolioConfig(config, adminKey);

      setStatus({
        text: "Configuration saved and cache updated successfully!",
        type: "success",
      });
    } catch (error: unknown) {
      setStatus({
        text: getApiErrorMessage(error),
        type: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
        <div className="text-xl font-medium animate-pulse">
          Loading Portfolio AI Configuration...
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
        <div className="text-lg text-rose-400">
          Unable to load portfolio configuration.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-sky-400">
              Portfolio AI Configuration Editor
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Update your AI context dynamically. Saves directly to MongoDB and
              invalidates cache.
            </p>
          </div>
        </div>

        {status.text && (
          <div
            className={`p-4 rounded-lg mb-6 text-sm font-medium ${
              status.type === "success"
                ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800"
                : status.type === "error"
                ? "bg-rose-950/80 text-rose-400 border border-rose-800"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            {status.text}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-8">
          <Section title="About Profile">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Name"
                value={config.about.name}
                onChange={(value) => updateAbout("name", value)}
              />
              <FormField
                label="Title"
                value={config.about.title}
                onChange={(value) => updateAbout("title", value)}
              />
              <FormField
                label="Location"
                value={config.about.location}
                onChange={(value) => updateAbout("location", value)}
              />
              <FormField
                label="Experience"
                value={config.about.experience}
                onChange={(value) => updateAbout("experience", value)}
              />
              <div className="sm:col-span-2">
                <FormField
                  label="Education"
                  value={config.about.education}
                  onChange={(value) => updateAbout("education", value)}
                />
              </div>
            </div>
          </Section>

          <Section title="Tech Stack (Comma Separated)">
            <div className="space-y-4">
              {(
                Object.keys(config.tech_stack) as Array<
                  keyof PortfolioConfig["tech_stack"]
                >
              ).map((key) => (
                <FormField
                  key={key}
                  label={key.replace(/_/g, " ")}
                  value={fromList(config.tech_stack[key], ",")}
                  onChange={(value) => updateTechStack(key, value)}
                />
              ))}
            </div>
          </Section>

          <Section title="Specializations (One per line)">
            <FormField
              label="Specializations"
              textarea
              rows={4}
              value={fromList(config.specializations, "\n")}
              onChange={(value) => updateStringArray("specializations", value)}
            />
          </Section>

          <Section
            title="Projects"
            action={
              <button
                type="button"
                onClick={addProject}
                className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded text-xs font-medium transition"
              >
                + Add Project
              </button>
            }
          >
            <div className="space-y-6">
              {config.projects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-sky-400">
                      Project #{index + 1}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeProject(index)}
                      className="text-xs text-rose-400 hover:text-rose-300 transition"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                      label="Project Name"
                      value={project.name}
                      onChange={(value) => updateProject(index, "name", value)}
                    />
                    <FormField
                      label="Tech Stack (comma separated)"
                      value={fromList(project.stack, ",")}
                      onChange={(value) =>
                        updateProject(index, "stack", toList(value, ","))
                      }
                    />
                  </div>

                  <FormField
                    label="Description"
                    textarea
                    rows={2}
                    value={project.description}
                    onChange={(value) =>
                      updateProject(index, "description", value)
                    }
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Contact & Profiles">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Email"
                type="email"
                value={config.contact.email}
                onChange={(value) => updateContact("email", value)}
              />
              <FormField
                label="GitHub"
                value={config.contact.github}
                onChange={(value) => updateContact("github", value)}
              />
              <FormField
                label="LinkedIn"
                value={config.contact.linkedin}
                onChange={(value) => updateContact("linkedin", value)}
              />
              <FormField
                label="LeetCode"
                value={config.contact.leetcode}
                onChange={(value) => updateContact("leetcode", value)}
              />
            </div>
          </Section>

          <Section title="AI Instructions & Rules (One per line)">
            <FormField
              label="AI Rules"
              textarea
              rows={6}
              value={fromList(config.rules, "\n")}
              onChange={(value) => updateStringArray("rules", value)}
            />
          </Section>

          <div className="pt-4 border-t border-slate-800 gap-4">
            <div className="w-full sm:w-auto flex-1">
              <FormField
                label="Admin Secret Key"
                type="password"
                placeholder="Enter Admin Secret Key to Auth"
                value={adminKey}
                onChange={setAdminKey}
                required
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full sm:w-auto px-6 py-2.5 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-700 text-slate-950 font-bold rounded-lg text-sm transition shadow-lg shadow-sky-500/20"
            >
              {saving ? "Saving Changes..." : "Save to Database"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}