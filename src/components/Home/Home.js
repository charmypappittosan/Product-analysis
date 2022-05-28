import React from 'react';
import useReviews from '../../Hooks/useReviews';
import img1 from '../../images/pic.png'
import './Home.css';
import MiniReview from '../MiniReview/MiniReview'
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews([]);
     const navigate=useNavigate();
     const seeAll=()=>{
         navigate('/review');
     }
   
    return (
      <div>
            <div className='homeTotal'>
          <img src={img1} alt="" />
            <div className='homedescribe'>
              <h2>Pick your Best Friend</h2>
              <p>Book is the factory of Knowledge. Embrace your knowledge by reading books. because it is the closest friend of yours .So Pick a book and create yourself.</p>
            </div>
        </div>
        <div>
            <h1>Reviews</h1>
            
            {
                 reviews.slice(0,3).map(review=><MiniReview
               key={review.id}
               review={review}
               ></MiniReview>)
              

            }
            <button className='button' onClick={seeAll}>See All</button>
        
           
        </div>
      </div>
    );
};

export default Home;