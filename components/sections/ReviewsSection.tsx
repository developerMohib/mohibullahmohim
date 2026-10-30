import { IReviews } from '@/sources/reviews.types';
import HeadingText from '../common/HeadingText';
import ReviewsSlider from './ReviewsSlider';
import { safeFetch } from '../utils/api';

const ReviewsSection = async () => {
    // ২. safeFetch ব্যবহার করে রিভিউ ডেটা আনা
    const { data: reviews, error } = await safeFetch<IReviews[]>('/reviews');

    // ৩. ডেটা সবসময় একটি অ্যারে কিনা তা নিশ্চিত করা (Fallback to empty array)
    // এতে ReviewsSlider কম্পোনেন্টে undefined পাস হয়ে ক্র্যাশ করবে না
    const finalReviews = Array.isArray(reviews) ? reviews : [];

    return (
        <section className="md:pt-14 pt-10">
            <HeadingText 
                intro="06. Reputation" 
                mainTitle="What says they " 
                highlightTitle="About me!" 
                mainDescription="Turn ideas into robust applications." 
                highlightDescription="Let's elevate digital landscapes together" 
            />
            
            {/* ৪. কন্ডিশনাল রেন্ডারিং: ডেটা থাকলে স্লাইডার দেখাবে, না থাকলে একটি সুন্দর ফলব্যাক মেসেজ দেখাবে */}
            {finalReviews.length > 0 ? (
                <ReviewsSlider reviews={finalReviews} />
            ) : (
                <div className="text-center py-10 text-slate-500 bg-slate-50 rounded-xl border border-slate-200 mt-6">
                    <p className="font-medium">
                        {error 
                            ? "Unable to load reviews. Please check backend connection." 
                            : "No reviews available yet."}
                    </p>
                </div>
            )}
        </section>
    );
};

export default ReviewsSection;