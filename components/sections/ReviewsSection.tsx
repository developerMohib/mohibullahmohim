
import { IReviews } from '@/sources/reviews.types';
import HeadingText from '../common/HeadingText';
import ReviewsSlider from './ReviewsSlider';


const ReviewsSection = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/reviews`);
    const reviews: { data: IReviews[] } = await res.json();
    const final = reviews.data;
    return (
        <section className="md:pt-14 pt-10">
            <HeadingText mainTitle={"What says they "} highlightTitle={"About me!"} mainDescription={"Turn ideas into robust applications."} highlightDescription={"Let's elevate digital landscapes together"} intro={"06. Reputation"} />
            <ReviewsSlider reviews={final} />
        </section>
    );
};

export default ReviewsSection;

