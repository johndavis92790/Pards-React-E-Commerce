import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Pagination
} from "react-bootstrap";


const Product = () => {

  
  const [parts, setparts] = useState([]);
  const pages = parts.length % 25;
  let currentPage = 1;
  for(let number = 1; number < pages; number++){
    parts.push(
      <Pagination.Item key={number} active={number === currentPage}>
      {number}
    </Pagination.Item>
                );
                
  }


              
 
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/part");
        setparts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <Container fluid className="m-3">
      <section className="secondary-header">
        <h3>Search</h3>
        <form >
        <input type="text" placeHolder="Search Part Number" id="search-bar"></input>
        <button >Search</button>

        </form>
        {}

      </section>
      <Row className="justify-content-center">
        { parts.map((part) => {
      // probably do not need the processProducts method. This maybe be able to go back to where it was. 
      // Once I am able to get the value of the text box I just have to match that with the part.partNumber and push that part to the new array and display that array's content. 
      
      const filterSearch = [];
      return (
        <Card className="m-3" style={{ width: "18rem" }} key={part.partNumber}>
          <Card.Img variant="top" src={part.photo} />
          <Card.Body>
            <Card.Title>{part.partNumber}</Card.Title>
            <Card.Text>{part.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{part.brand}</ListGroupItem>
            <ListGroupItem>{part.category}</ListGroupItem>
            {/* <ListGroupItem>{part.retailPrice}</ListGroupItem> */}
          </ListGroup>
          {/* <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
        </Card>
      );
    })}
        <Pagination>
        <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />
    
    
  <Pagination.Item>{currentPage - 2}</Pagination.Item>
  <Pagination.Item>{currentPage - 1}</Pagination.Item>
  <Pagination.Item active>{currentPage}</Pagination.Item>
  <Pagination.Item>{currentPage + 1}</Pagination.Item>
  <Pagination.Item disabled>{currentPage + 2}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{pages}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />

        </Pagination>
      </Row>
    </Container>
  );
};

export default Product;
