import React from "react";
import { statesArray } from "../../utils/helpers";
import { useShoppingCart } from "../../components/Context/CartContext";
import { useCustomerInfo } from "../../components/Context/CustomerContext";
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

const Cart = () => {

  const cart = useShoppingCart();
  const customerInfo = useCustomerInfo();
  // console.log("customerInfo", customerInfo);

  const formData = (event) => {
    console.log("event", event);
    event.preventDefault();
    var form = event.target;
    console.log("form", form);
    var customerObj = {
      billingFirstName: form.formGridBillingFName.value,
      billingLastName: form.formGridBillingLName.value,
      billingEmail: form.formGridEmail.value,
      billingAddress1: form.formGridBillingAddress1.value,
      billingAddress2: form.formGridBillingAddress2.value,
      billingCity: form.formGridBillingCity.value,
      billingState: form.formGridBillingState.value,
      billingZip: form.formGridBillingZip.value,
      // shippingAddressCheckbox: form.formGridCheckbox.checked,
      shippingFirstName: form.formGridShippingFName.value,
      shippingLastName: form.formGridShippingLName.value,
      shippingAddress1: form.formGridShippingAddress1.value,
      shippingAddress2: form.formGridShippingAddress2.value,
      shippingCity: form.formGridShippingCity.value,
      shippingState: form.formGridShippingState.value,
      shippingZip: form.formGridShippingZip.value,
      // standardShipCheckbox: form.standardShipCheckbox.checked,
      // expeditedShipCheckbox: form.expeditedShipCheckbox.checked,
    };
    console.log("customerObj", customerObj);
    // customerInfo.addCustomerInfo(customerObj);
    function addObj() {
      console.log("customerInfo cart", customerInfo);
      customerInfo.addCustomerInfo(customerObj);
    };
    addObj();
  };

  return (
    <>
      {/* <Button
        onClick={() => itemsLoop(cart.shoppingCart)}
        variant="primary"
        type="submit"
        to="/checkout"
      >
        Checkout
      </Button> */}
      <Container fluid="md" className="my-5">
        <Row className="align-items-center">
          <Col sm={7} className="p-5">
            <h1>Shopping Cart</h1>
            <Form onSubmit={formData}>
              <Form.Group as={Col} controlId="formGridBillingFName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridBillingLName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridBillingAddress1">
                <Form.Label>Billing Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridBillingAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBillingCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBillingState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose</option>
                  {statesArray.states.map((i) => (
                    <option>{i}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBillingZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Use a different shipping address"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridShippingFName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridShippingLName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridShippingAddress1">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridShippingAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridShippingCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridShippingState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose</option>
                  {statesArray.states.map((i) => (
                    <option>{i}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridShippingZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group className="mb-3" controlId="standardShipCheckbox">
                <Form.Check type="checkbox" label="Standard Shipping $25" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="expeditedShipCheckbox">
                <Form.Check type="checkbox" label="Expedited Shipping $50" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                // to="/checkout"
              >
                Checkout
              </Button>
            </Form>
          </Col>
          <Col sm={5}>
            <h3>Order Summary</h3>
            <ListGroup>
              {cart.shoppingCart.map((item, i) => {
                return (
                  <ListGroup.Item>
                    <Image
                      fluid
                      style={{ height: "50px" }}
                      src={item.photo}
                      alt={item.partNumber}
                      key={item._id}
                    />
                    {item.partNumber} x {item.quantity}
                    <FaTrash
                      style={{ cursor: "pointer" }}
                      onClick={cart.removeItem(item)}
                      className="icons"
                    />
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
