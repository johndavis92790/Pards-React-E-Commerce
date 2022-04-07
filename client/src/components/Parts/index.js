import React from 'react';
import { Link } from "react-router-dom";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
} from "react-bootstrap";
import { useShoppingCart } from "../Context/CartContext";

const Parts = ({ parts, loading }) => {
  const cart = useShoppingCart();
  if (loading) {
    return <h2>Loading</h2>
  }

  return (
    <div>
      <ul className="list-group mb-4">
        <Row className="justify-content-center">
          {parts.map((part) => {
            return (
              <Card
                style={{ width: "18rem" }}
                className="card m-3"
                key={part._id}
              >
                <Link to={"/single/" + part._id}>
                  <Card.Img
                    className="p-3"
                    variant="top"
                    src={part.photo}
                    style={{ cursor: "pointer" }}
                    data-part={part._id}
                  />
                </Link>

                <Card.Body>
                  <Card.Title>{part.partNumber}</Card.Title>
                  <Card.Text>{part.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{part.brand}</ListGroupItem>
                  <ListGroupItem>{part.category}</ListGroupItem>
                  <ListGroupItem>${part.retailPrice}</ListGroupItem>
                  <Button
                    as={Link}
                    to="/cart"
                    onClick={() => {
                      cart.addItem(part);
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
      </ul>
    </div>
  );
}

export default Parts