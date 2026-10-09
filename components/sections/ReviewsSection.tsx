
import { IReviews } from '@/sources/reviews.types';
import Image from 'next/image';
import HeadingText from '../common/HeadingText';

const ReviewsSection = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/reviews`);
    const reviews: { data: IReviews[] } = await res.json();
    return (
        <section className="md:pt-14 pt-10">
            <HeadingText mainTitle={"What says they "} highlightTitle={"About me!"} mainDescription={"Turn ideas into robust applications."} highlightDescription={"Let's elevate digital landscapes together"} intro={"06. Reputation"} />
            <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10">
                {reviews?.data?.map((item, idx) => (
                    <div
                        key={item._id}
                        className={`p-6 md:p-8 ${idx % 2 === 1 ? "lg:border-l lg:border-borderPri" : ""
                            }`}
                    >
                        <p className="leading-loose text-slate-800">
                            “{item.quote}”
                        </p>
                        <div className="flex items-center mt-6 cursor-pointer">
                            <Image width={40} height={40}
                                className="object-cover rounded-full w-14 h-14"
                                src={item.image}
                                alt={item.name}
                            />
                            <div className="mx-4">
                                <h1 className="font-semibold text-blue-500 hover:text-red-500">
                                    {item.name}
                                </h1>
                                <span className="text-xs text-slate-600">
                                    {item.position}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewsSection;