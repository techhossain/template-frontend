import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);

  return (
    <div className="row mt-5">

      {
        reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
      }

    </div>
  );
};

export default Review;