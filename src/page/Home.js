import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap';
import products from '../product';
import Product from '../components/Product';




const Home = () => {

  return (


    <Container>
      <h1>New Arrival</h1>
      <Row>

        {products.map((p) => (
          <Col key={p._id} sm={12} md={6} lg={4}><Product p={p} /></Col>
        ))}

      </Row>
    </Container>
  );
};

export default Home;
