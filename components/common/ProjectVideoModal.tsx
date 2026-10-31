// components/ProjectVideoPlayer.tsx
"use client";

import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

interface ProjectVideoPlayerProps {
  videoUrl: string;
  title: string;
}

export default function ProjectVideoPlayer({ videoUrl, title }: ProjectVideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // ESC বাটনে মোডাল বন্ধ করা এবং ব্যাকগ্রাউন্ড স্ক্রল লক করা
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // স্ক্রল বন্ধ
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset"; // স্ক্রল চালু
    };
  }, [isOpen]);

  if (!videoUrl) return null;

  // YouTube লিংকে autoplay যোগ করা
  const embedUrl = videoUrl.includes("autoplay")
    ? videoUrl
    : `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1`;

  return (
    <>
      {/* ১. ট্রিগার বাটন (সার্ভার কম্পোনেন্ট থেকে এটি দেখা যাবে) */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-sm"
      >
        <Play className="w-4 h-4 fill-current" />
        Watch 1-Min Overview
      </button>

      {/* ২. মোডাল (শুধু isOpen true হলে রেন্ডার হবে) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // ভিডিওতে ক্লিক করলে বন্ধ হবে না
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors focus:outline-none"
              aria-label="Close video"
            >
              <X size={32} />
            </button>

            {/* Video Player */}
            <div className="aspect-video overflow-hidden rounded-xl bg-black shadow-2xl border border-white/10">
              <iframe
                src={embedUrl}
                title={title}
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}