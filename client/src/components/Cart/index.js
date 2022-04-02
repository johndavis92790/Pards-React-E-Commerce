import React from "react";
import { statesArray } from "../../utils/helpers";
// import axios from "axios";
import { FaTrash } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";

const Cart = ({ setProductSelection, productSelection }) => {
  

  return (
    <>
      <Container fluid="md" className="my-5">
        <Row className="align-items-center">
          <Col sm={7} className="p-5">
            <h1>Shopping Cart</h1>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Billing Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose</option>
                    {statesArray.states.map((i) => (
                      <option>{i}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Use a different shipping address"
                />
              </Form.Group>
            </Form>

            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose</option>
                    {statesArray.states.map((i) => (
                      <option>{i}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
            </Form>
          </Col>
          <Col sm={5}>
            <h3>Order Summary</h3>
            <ListGroup>
              <ListGroup.Item>
                <Image
                  fluid
                  style={{ height: "50px" }}
                  src={
                    "https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg"
                  }
                  alt="16060"
                />
                16060 x1
                <FaTrash onClick="" className="icons" />
              </ListGroup.Item>
              <ListGroup.Item>
                <Image
                  fluid
                  style={{ height: "50px" }}
                  src={
                    "https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg"
                  }
                  alt="16060"
                />
                16060 x1
                <FaTrash onClick="" className="icons" />
              </ListGroup.Item>
              <ListGroup.Item>
                <Image
                  fluid
                  style={{ height: "50px" }}
                  src={
                    "https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg"
                  }
                  alt="16060"
                />
                16060 x1
                <FaTrash onClick="" className="icons" />
              </ListGroup.Item>
              <ListGroup.Item>
                <Image
                  fluid
                  style={{ height: "50px" }}
                  src={
                    "https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg"
                  }
                  alt="16060"
                />
                16060 x1
                <FaTrash onClick="" className="icons" />
              </ListGroup.Item>
              <ListGroup.Item>
                <Image
                  fluid
                  style={{ height: "50px" }}
                  src={
                    "https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg"
                  }
                  alt="16060"
                />
                16060 x1
                <FaTrash onClick="" className="icons" />
              </ListGroup.Item>
              <ListGroup.Item>
                <Image
                  fluid
                  style={{ height: "50px" }}
                  src={
                    "https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg"
                  }
                  alt="16060"
                />
                16060 x1
                <FaTrash onClick="" className="icons" />
              </ListGroup.Item>
            </ListGroup>
            <Form>
              <Form.Group className="mb-3" controlId="standardCheckbox">
                <Form.Check type="checkbox" label="Standard Shipping $25" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="standardCheckbox">
                <Form.Check type="checkbox" label="Expedited Shipping $50" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Checkout
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
