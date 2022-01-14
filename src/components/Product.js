import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating';

const Product = ({ p }) => {
  return (

    <Card className="my-3 p-3 rounded">

      <a href={`/product/${p._id}`}>
        <Card.Img src={p.image} />
      </a>

      <Card.Body>

        <a href={`/product/${p._id}`} style={{ textDecoration: "none" }}>
          
          <Card.Title as="div" className="text-center text-black">
            <strong>{p.name}</strong>
          </Card.Title>
        </a>

        <Card.Text>
          <Rating rating={p.rating} comment={`${p.numReviews} Comments`} />
        </Card.Text>

        <Card.Text as="h3" className="text-center">
          {p.price}$
        </Card.Text>
      </Card.Body>
      
    </Card>
  )
};

export default Product
