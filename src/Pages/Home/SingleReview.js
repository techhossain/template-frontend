import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';


const SingleReview = (props) => {
  const { _id, name, review, rating } = props.review

  return (
    <div className="col-md-4">
      <Card>
        <Card.Body>
          <Card.Title>{review}</Card.Title>
          <Card.Text>
            {name}
            <p>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star fa-2x"
                fullSymbol="fas fa-star fa-2x text-warning"
                readonly />
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleReview;