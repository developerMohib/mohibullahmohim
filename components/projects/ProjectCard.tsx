'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/types/projects';

const ExternalButton = ({
  href,
  label,
  variant = 'secondary',
}: {
  href?: string | null;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
}) => {
  if (!href) return null;

  const baseStyles = 'flex-1 text-center py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-200 border';
  const variants = {
    primary: 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800',
    secondary: 'bg-zinc-100 text-zinc-800 border-zinc-200 hover:bg-zinc-200',
    outline: 'border-zinc-300 text-zinc-700 hover:border-zinc-400',
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </Link>
  );
};

export default function ProjectCard({ project }: { project: IProject }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // YouTube লিংককে অটোমেটিক Embed লিংকে কনভার্ট করার হেল্পার
  const getEmbedUrl = (url: string) => {
    const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(ytRegex);
    if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    return url; // সরাসরি MP4 বা অন্য Embed URL হলে সেটাই রিটার্ন করবে
  };

  const isYouTube = project.videoUrl ? getEmbedUrl(project.videoUrl).includes('youtube.com/embed') : false;

  return (
    <>
      <article className="group relative flex flex-col rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Thumbnail Header */}
        {project.coverImages && (
          <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
            <Link href={project.slug ? `/project/${project.slug}` : '/projects'}>
              <Image
                src={project.coverImages}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>

            {/* Category & Status Badges */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
              {project.category && (
                <span className="bg-zinc-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>
              )}
              {project.status && (
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-md ${
                  project.status === 'Completed'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {project.status}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex-1">
            {project.role && (
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                {project.role}
              </span>
            )}

            <h3 className="text-xl font-bold text-zinc-900 mt-1 line-clamp-1">
              <Link href={project.slug ? `/project/${project.slug}` : '/projects'} className="hover:text-indigo-600 transition-colors">
                {project.title}
              </Link>
            </h3>

            <p className="text-sm text-zinc-600 mt-2 line-clamp-2">{project.tagline}</p>

            {project.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-zinc-100 text-zinc-700 text-[11px] font-mono px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 3-Sec HR/Recruiter Quick Scan Section */}
          <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-xs mt-4">
            {project.highlights?.[0] ? (
              <p className="text-zinc-700 line-clamp-2">
                <strong className="text-zinc-900">Key Impact:</strong> {project.highlights[0]}
              </p>
            ) : project.challenge ? (
              <p className="text-zinc-700 line-clamp-2">
                <strong className="text-zinc-900">Core Challenge:</strong> {project.challenge}
              </p>
            ) : (
              <p className="text-zinc-500 italic">Quick architectural overview available on details page.</p>
            )}
          </div>

          {/* 1-Minute View Button (New Addition) */}
          {project.videoUrl && (
            <button
              onClick={() => setIsVideoOpen(true)}
              className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold rounded-lg transition-all duration-200 border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-300 group/btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="group-hover/btn:scale-110 transition-transform">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              1 Min Overview
            </button>
          )}

          {/* Multi-Link Action Buttons */}
          <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-2">
            {project.liveLink && (
              <ExternalButton href={project.liveLink} label="🌐 Live Demo" variant="primary" />
            )}
            <div className="flex gap-2">
              {project.githubFrontendUrl && (
                <ExternalButton
                  href={project.githubFrontendUrl}
                  label={project.githubBackendUrl ? 'Frontend Code' : 'Source Code'}
                  variant="secondary"
                />
              )}
              {project.githubBackendUrl && (
                <ExternalButton
                  href={project.githubBackendUrl}
                  label={project.githubFrontendUrl ? 'Backend Code' : 'API Source'}
                  variant="secondary"
                />
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Video Modal Popup */}
      {isVideoOpen && project.videoUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" 
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-3xl bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 animate-in zoom-in-95 duration-200" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)} 
              className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Video Player */}
            <div className="aspect-video w-full bg-black">
              {isYouTube ? (
                <iframe 
                  src={getEmbedUrl(project.videoUrl)} 
                  title={`${project.title} video`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              ) : (
                <video src={project.videoUrl} controls autoPlay className="w-full h-full" />
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">
                {project.title} <span className="text-indigo-400 text-sm font-normal">- 1 Minute Overview</span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}