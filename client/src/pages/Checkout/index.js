import React from "react";
import { useShoppingCart } from "../../components/CartContext";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";

const Checkout = () => {
  const { shoppingCart } = useShoppingCart();

  function uploadOrder(order) {
    var newObject = {
      status: "ordered",
      items: "",
      subtotal: "",
      shipping: "",
      tax: "",
      total: "",
      billingFirstName: shoppingCart.customer.billingFirstName,
      billingLastName: shoppingCart.customer.billingLastName,
      billingAddress1: shoppingCart.customer.billingAddress1,
      billingAddress2: shoppingCart.customer.billingAddress2,
      billingCity: shoppingCart.customer.billingCity,
      billingState: shoppingCart.customer.billingState,
      billingZip: shoppingCart.customer.billingZip,
      shippingFirstName: shoppingCart.customer.shippingFirstName,
      shippingLastName: shoppingCart.customer.shippingLastName,
      shippingAddress1: shoppingCart.customer.shippingAddress1,
      shippingAddress2: shoppingCart.customer.shippingAddress2,
      shippingCity: shoppingCart.customer.shippingCity,
      shippingState: shoppingCart.customer.shippingState,
      shippingZip: shoppingCart.customer.shippingZip,
      billingEmail: shoppingCart.customer.billingEmail,
    };
    var orderString = JSON.stringify(order);
    fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: orderString,
    }).then((res) => {
      console.log("Upload order complete! response:", res);
    });
  };

  return (
    <>
      <Container fluid="md" className="my-5">
        <Row className="align-items-center">
          <Col sm={5}>
            <h3>Order Summary</h3>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Order Summary
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image
                  fluid
                  style={{ height: "50px" }}
                  src={
                    "https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg"
                  }
                  alt="16060"
                />
                16060 x1 $100
              </ListGroup.Item>

              <ListGroup.Item as="li">Shipping - $25</ListGroup.Item>
              <ListGroup.Item as="li">Tax - $30</ListGroup.Item>
              <ListGroup.Item as="li">Total - $455</ListGroup.Item>
              <ListGroup.Item as="li" active>
                Billing Address
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {shoppingCart.customer.billingFirstName}{" "}
                {shoppingCart.customer.billingLastName}
                <br></br>
                {shoppingCart.customer.billingEmail}
                <br></br>
                {shoppingCart.customer.billingAddress1}
                <br></br>
                {shoppingCart.customer.billingAddress2}
                <br></br>
                {shoppingCart.customer.billingCity}
                {", "}
                {shoppingCart.customer.billingState}{" "}
                {shoppingCart.customer.billingZip}{" "}
              </ListGroup.Item>
              <ListGroup.Item as="li" active>
                Shipping Address
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {shoppingCart.customer.shippingFirstName}{" "}
                {shoppingCart.customer.shippingLastName}
                <br></br>
                {shoppingCart.customer.shippingAddress1}
                <br></br>
                {shoppingCart.customer.shippingAddress2}
                <br></br>
                {shoppingCart.customer.shippingCity}
                {", "}
                {shoppingCart.customer.shippingState}{" "}
                {shoppingCart.customer.shippingZip}{" "}
              </ListGroup.Item>
            </ListGroup>
            <Button
              onClick={uploadOrder(shoppingCart)}
              variant="primary"
              type="submit"
            >
              Place Order
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
