import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
  const { _id, title, description, image, price } = props.product;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
            ${price}
          </Card.Text>
          <NavLink className="btn btn-success" to={`/products/${_id}`}>Buy Now</NavLink>
        </Card.Body>
      </Card>
    </Col>
  )

};

export default Product;