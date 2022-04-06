import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../components/Context/CartContext";
import axios from "axios";
import SingleProduct from "../SingleProduct";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Button,
} from "react-bootstrap";

const Product = () => {
  const [parts, setParts] = useState([]);
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
      {/* <SingleProduct data={part.data}/> */}
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
                  className="p-3"
                  variant="top"
                  src={part.photo}
                  style={{ cursor: "pointer" }}
                  path={"/single/" + part.partNumber}
                  data-part={part._id}
                  // onClick={changePart}
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
                    onClick={() => {
                      cart.addItem(part)
                    }}
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
