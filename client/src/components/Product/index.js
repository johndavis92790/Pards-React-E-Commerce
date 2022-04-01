import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
} from "react-bootstrap";

const Product = () => {
  const [parts, setparts] = useState([]);

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
      <Row className="justify-content-center">
        {parts.map((part) => {
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
      </Row>
    </Container>
  );
};

export default Product;
