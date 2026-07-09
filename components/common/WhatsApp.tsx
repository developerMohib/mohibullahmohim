"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/8801706439736"
            target="_blank"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg animate-pulse hover:animate-none hover:scale-110 transition-all duration-300"
        >
            <FaWhatsapp className="text-3xl" />
        </Link>
    );
}