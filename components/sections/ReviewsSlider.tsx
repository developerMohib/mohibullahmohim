"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IReviews } from "@/sources/reviews.types";

const ReviewsSlider = ({ reviews }: { reviews: IReviews[] }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [
            Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [snaps, setSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const updateSnaps = () => {
            setSnaps(emblaApi.scrollSnapList());
        };

        const handleReInit = () => {
            updateSnaps();
            onSelect();
        };

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", handleReInit);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", handleReInit);
        };
    }, [emblaApi, onSelect]);

    if (!reviews.length) return null;

    return (
        <div className="mt-8 xl:mt-10">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {reviews.map((item) => (
                        <div
                            key={item._id}
                            className="flex-[0_0_100%] min-w-0 p-6 md:p-8 lg:flex-[0_0_50%]"
                        >
                            <p className="leading-loose text-slate-800">
                                “{item.quote}”
                            </p>

                            <div className="mt-6 flex items-center">
                                <Image
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 rounded-full object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="mx-4">
                                    <h2 className="font-semibold text-blue-500 transition-colors hover:text-red-500">
                                        {item.name}
                                    </h2>

                                    <span className="text-xs text-slate-600">
                                        {item.position}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="mt-6 flex justify-center gap-2">
                {snaps.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={
                            i === selectedIndex ? "true" : undefined
                        }
                        onClick={() => emblaApi?.scrollTo(i)}
                        className={`h-2.5 rounded-full transition-all ${
                            i === selectedIndex
                                ? "w-6 bg-blue-500"
                                : "w-2.5 bg-slate-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewsSlider;