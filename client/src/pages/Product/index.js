import React, { useState, useEffect } from "react";
import { useShoppingCart } from "../../components/CartContext";
import axios from "axios";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Pagination,
  Button,
} from "react-bootstrap";

const Product = ({ setProductSelection }) => {
  const [parts, setParts] = useState([]);
  // const pages = parts.length() % 25;
  // for(let number = 1; number < pages; number++){

  // }
  const cart = useShoppingCart();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/part");
        setParts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          cart.clearCart();
        }}
        variant="outline-primary"
      >
        Clear
      </Button>
      <Button
        onClick={() => {
          console.log("shoppingCart current", cart.shoppingCart);
        }}
        variant="outline-primary"
      >
        current
      </Button>
      <Container fluid className="m-3">
        <Row className="justify-content-center">test</Row>
        <Row className="justify-content-center">
          {parts.map((part, i) => {
            return (
              <Card
                style={{ width: "18rem" }}
                className="card m-3"
                key={part._id}
              >
                <Card.Img
                  style={{ cursor: "pointer" }}
                  className="p-3"
                  onClick={() => {
                    setProductSelection({ ...part, index: i });
                  }}
                  variant="top"
                  src={part.photo}
                  to="/single"
                />
                <Card.Body>
                  <Card.Title>{part.partNumber}</Card.Title>
                  <Card.Text>{part.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{part.brand}</ListGroupItem>
                  <ListGroupItem>{part.category}</ListGroupItem>
                  <ListGroupItem>${part.retailPrice}</ListGroupItem>
                  <Button
                    onClick={() => cart.addItem(part)}
                    variant="outline-primary"
                  >
                    Add to Cart
                  </Button>
                </ListGroup>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Product;
