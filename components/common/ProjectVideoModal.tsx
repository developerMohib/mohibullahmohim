"use client";

import { useEffect } from "react";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  subtitle?: string;
};

const getEmbedUrl = (url: string) => {
  const ytRegex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;

  const match = url.match(ytRegex);
  if (match) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
  }

  return url;
};

const isYouTubeUrl = (url: string) => {
  return getEmbedUrl(url).includes('youtube.com/embed');
};

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  subtitle = '1 Minute Overview',
}: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 animate-in zoom-in-95 duration-200"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="aspect-video w-full bg-black">
          {isYouTubeUrl(videoUrl) ? (
            <iframe
              src={getEmbedUrl(videoUrl)}
              title={`${title} video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full"
            />
          )}
        </div>

        <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
          <h3 className="text-base font-semibold text-white">
            {title}{' '}
            <span className="text-indigo-400 text-sm font-normal">
              - {subtitle}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}