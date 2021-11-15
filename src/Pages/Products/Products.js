import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import NavBar from '../Common/NavBar';
import Product from './Product/Product';

const Products = () => {

  const [products] = useProducts();

  return (
    <div>
      <NavBar></NavBar>
      <h2 className="my-5">Products</h2>
      <Container>
        <Row xs={1} md={4} className="g-4">
          {
            products.map(product => <Product key={product._id} product={product}></Product>)
          }
        </Row>
      </Container>



    </div>
  );
};

export default Products;