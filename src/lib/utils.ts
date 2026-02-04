import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const movingOrbs = [
  {
    id: 1,
    startX: -100,
    startY: 20,
    endX: 100,
    endY: 80,
    duration: 25,
    size: "w-96 h-96",
    color: "from-blue-500/10 to-purple-600/10",
  },
  {
    id: 2,
    startX: 120,
    startY: 60,
    endX: -20,
    endY: 10,
    duration: 30,
    size: "w-80 h-80",
    color: "from-purple-500/10 to-pink-600/10",
  },
  {
    id: 3,
    startX: 50,
    startY: 90,
    endX: 50,
    endY: -10,
    duration: 20,
    size: "w-64 h-64",
    color: "from-cyan-400/10 to-blue-500/10",
  },
];
