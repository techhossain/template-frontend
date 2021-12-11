import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import NavBar from '../Common/NavBar';
import Product from '../Products/Product/Product';
import Banner from './Banner';
import Contact from './Contact';
import Review from './Review';

const Home = () => {
  const [products] = useProducts();

  return (
    <div>
      <NavBar />
      <Container>
        <Banner />
        <h2 className="my-5">Our Top Rated Products</h2>
        <Row xs={1} md={3} className="g-4">
          {
            products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
          }
        </Row>
        <h2 className="my-5">Clients Feedback</h2>
        <Review />

      </Container>

    </div>
  );
};

export default Home;