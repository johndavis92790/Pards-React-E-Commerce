import React from "react";
// import axios from "axios";
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
                John Doe 123 Fake St. Faketown, UT 12345
              </ListGroup.Item>
              <ListGroup.Item as="li" active>
                Shipping Address
              </ListGroup.Item>
              <ListGroup.Item as="li">
                John Doe 123 Fake St. Faketown, UT 12345
              </ListGroup.Item>
            </ListGroup>
            
            <Form>
              <Button variant="primary" type="submit">
                Place Order
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
