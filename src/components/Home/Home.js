import React from 'react';
import useReviews from '../../Hooks/useReviews';
import img1 from '../../images/pic.png'
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews([]);
   
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
                 reviews.map(review=><Cart
               key={review.id}
               review={review}
               ></Cart>)

            }
           
        </div>
      </div>
    );
};

export default Home;