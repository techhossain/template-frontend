import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="row">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://thefrypans.com/wp-content/uploads/2020/06/best-omelette-pan.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://thefrypans.com/wp-content/uploads/2020/06/best-omelette-frying-pan.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://thefrypans.com/wp-content/uploads/2020/10/Stone-Earth-Frying-Pan-by-Ozeri.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Banner;