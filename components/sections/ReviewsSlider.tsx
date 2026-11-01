"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IReviews } from "@/types/reviews";

const ReviewsSlider = ({ reviews }: { reviews: IReviews[] }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [
            Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [snaps, setSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!emblaApi) return;

        // ১. ইনিশিয়াল স্টেট সেটআপ (Asynchronous) - যাতে cascading render warning না আসে
        const initTimer = setTimeout(() => {
            setSnaps(emblaApi.scrollSnapList());
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }, 0);

        // ২. ইভেন্ট হ্যান্ডলার
        const handleSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        const handleReInit = () => {
            setSnaps(emblaApi.scrollSnapList());
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        // ৩. ইভেন্ট লিসেনার যুক্ত করা
        emblaApi.on("select", handleSelect);
        emblaApi.on("reInit", handleReInit);

        // ৪. ক্লিনআপ ফাংশন
        return () => {
            clearTimeout(initTimer);
            emblaApi.off("select", handleSelect);
            emblaApi.off("reInit", handleReInit);
        };
    }, [emblaApi]);

    if (!reviews.length) return null;

    return (
        <div className="mt-8 xl:mt-10">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {reviews?.map((item) => (
                        <div
                            key={item._id}
                            className="flex-[0_0_100%] min-w-0 px-3 md:px-4 lg:flex-[0_0_50%]"
                        >
                            {/* Card / Box Design */}
                            <div className="bg-gray-100 rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-100 p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <p className="leading-loose text-slate-700 text-base md:text-lg grow">
                                    “{item.quote}”
                                </p>

                                <div className="mt-6 flex items-center">
                                    <Image
                                        width={56}
                                        height={56}
                                        className="h-14 w-14 rounded-full object-cover ring-2 ring-black"
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div className="mx-4">
                                        <h2 className="font-semibold text-blue-600 transition-colors hover:text-red-500 text-lg">
                                            {item.name}
                                        </h2>

                                        <span className="text-sm text-slate-500">
                                            {item.position}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="mt-8 flex justify-center gap-2">
                {snaps.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={i === selectedIndex ? "true" : undefined}
                        onClick={() => emblaApi?.scrollTo(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex
                            ? "w-6 bg-blue-500"
                            : "w-2 bg-slate-300 hover:bg-slate-400" // Inactive dot
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewsSlider;