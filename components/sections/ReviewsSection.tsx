import { IReviews } from '@/types/reviews';
import HeadingText from '../common/HeadingText';
import ReviewsSlider from './ReviewsSlider';
import { safeFetch } from '@/lib/api';

const ReviewsSection = async () => {
    const { data: reviews, error } = await safeFetch<IReviews[]>('/reviews');

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
            
            
            {finalReviews?.length > 0 ? (
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