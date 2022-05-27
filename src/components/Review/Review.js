import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Cart from '../Cart/Cart';
import './Review.css';
const Review = () => {
    const [reviews, setReviews] = useReviews([]);
    return (
        <div className='review'>
           {
               reviews.map(review=><Cart
               key={review.id}
               review={review}
               ></Cart>)
           }
        </div>
    );
};

export default Review;