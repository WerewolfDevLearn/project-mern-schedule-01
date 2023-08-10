import { useGetReviewsQuery } from '../../../redux/reviews/reviewsApi';

export default function ReviewsSlider() {
  const { data: reviews = [] } = useGetReviewsQuery();
  return <h2>ReviewsSlider</h2>;
}
