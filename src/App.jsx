import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import './App.css'
import { Col } from 'react-bootstrap';


function App() {
 
  const [product, setProduct] =useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
         .then((res)=>{
         setProduct(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })

  })
  
  let navigate = useNavigate();
  const routeChange=()=>{
    navigate(`/poroduct/${poroduct_id}`)

  }
  return (
    <>
    <Container>
      <Row>

        {product.map((product,index)=>{
          return(
            <>
                  <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        <p> $:{product.price}</p>
          {product.description}
         
      
        </Card.Text>
         <Link to={`/product/${product.id}`}>
        <Button variant="primary"> View Product</Button>
        </Link>
        <Button variant="info">Add to cart</Button>
      </Card.Body>
    </Card>
    </Col>
  
            </>
          )
        })}
  
    </Row>
    </Container>
    </>
  )
}

export default App
