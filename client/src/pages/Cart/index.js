import React from "react";
import { statesArray } from "../../utils/helpers";
import { useShoppingCart } from "../../components/Context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Table,
} from "react-bootstrap";

//shopping cart page
const Cart = () => {
  //uses shopping cart state
  const cart = useShoppingCart();
  //shopping cart variable
  const items = cart.shoppingCart;

  //pulls form data from page into an object, inserts the shopping cart array and calculates totals and tax and sets status to open when the user places the order
  const formData = (event) => {
    event.preventDefault();
    var form = event.target;
    var orderObj = {
      billingFirstName: form.formGridBillingFName.value,
      billingLastName: form.formGridBillingLName.value,
      billingEmail: form.formGridEmail.value,
      billingAddress1: form.formGridBillingAddress1.value,
      billingAddress2: form.formGridBillingAddress2.value,
      billingCity: form.formGridBillingCity.value,
      billingState: form.formGridBillingState.value,
      billingZip: form.formGridBillingZip.value,
      shippingFirstName: form.formGridShippingFName.value,
      shippingLastName: form.formGridShippingLName.value,
      shippingAddress1: form.formGridShippingAddress1.value,
      shippingAddress2: form.formGridShippingAddress2.value,
      shippingCity: form.formGridShippingCity.value,
      shippingState: form.formGridShippingState.value,
      shippingZip: form.formGridShippingZip.value,
      items: items,
      subtotal: calculateSubtotal(),
      shipping: "25.00",
      tax: calculateTax(),
      total: calculateTotal(),
      status: "Open",
    };
    uploadOrder(orderObj);
  };

  //some parts only have retail prices and no MAP prices, this defaults to the MAP price if it exists, then returns the retail price if it doesn't exist
  function mapOrRetail(product) {
    if (product.mapPrice === "") {
      return product.retailPrice;
    } else {
      return product.mapPrice;
    }
  }

  //uploads placed order to backend
  const uploadOrder = (orderObj) => {
    fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderObj),
    }).then((res) => {
      console.log("Upload order complete! response:", res);
      window.alert("Order completed!");
      window.location.href = "/";
    });
  };

  //calculates the subtotal of all the items together before tax and shipping
  const calculateSubtotal = () => {
    var total = 0;
    if (items[0]) {
      for (let i = 0; i < items.length; i++) {
        var retail = parseFloat(mapOrRetail(items[i]));
        total = total + retail * items[i].quantity;
      }
      return total.toFixed(2);
    } else {
      return "0.00";
    }
  };

  //caculates Salt Lake County sales tax
  const calculateTax = () => {
    if (items[0]) {
      var total = 0;
      var sub = parseFloat(calculateSubtotal());
      total = sub * 0.075;
      return total.toFixed(2);
    } else {
      return "0.00";
    }
  };

  //caluclates order total after items, tax and shipping
  const calculateTotal = () => {
    if (items[0]) {
      var sub = parseFloat(calculateSubtotal());
      var tax = parseFloat(calculateTax());
      var total = sub + tax + 25;
      return total.toFixed(2);
    } else {
      return "0.00";
    }
  };

  //returns shopping cart page complete with customer information form and shopping cart list and totals
  return (
    <>
      <Container fluid className="my-3">
        <Row>
          <h1>Shopping Cart</h1>
        </Row>
        <Row>
          <Col sm={6} className="my-5 px-2">
            <Col sm={7} className="mx-auto">
              <h3 className="pb-3">Customer Details</h3>
              <Form onSubmit={formData}>
                <h5>Billing Address</h5>
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
                <Form.Group
                  className="mb-3"
                  controlId="formGridBillingAddress1"
                >
                  <Form.Label>Billing Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formGridBillingAddress2"
                >
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
                <h5 className="mt-5">Shipping Address</h5>
                <Form.Group as={Col} controlId="formGridShippingFName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridShippingLName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formGridShippingAddress1"
                >
                  <Form.Label>Shipping Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formGridShippingAddress2"
                >
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
                <Button
                  onClick={() => {
                    cart.clearCart();
                  }}
                  className="mt-3"
                  variant="primary"
                  type="submit"
                  to="/"
                >
                  Checkout
                </Button>
              </Form>
            </Col>
          </Col>
          <Col sm={6} md={5} className="align-self-start my-5 px-2">
            <h3 className="pb-3">Order Summary</h3>
            <Table borderless hover size="sm">
              <thead>
                <tr>
                  <th style={{ width: "100px" }}> </th>
                  <th className="header-center px-2">Brand</th>
                  <th className="header-center">Part #</th>
                  <th className="header-left px-0">Qty</th>
                  <th className="price-align">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => {
                  return (
                    <tr key={item._id}>
                      <td>
                        <Image
                          style={{ height: "45px" }}
                          src={item.photo}
                          alt={item.partNumber}
                        />
                      </td>
                      <td>{item.brand}</td>
                      <td>{item.partNumber}</td>
                      <td className="px-0">
                        <Form
                          onSubmit={(event) => {
                            event.preventDefault();
                            cart.changeQuantity(event, item);
                          }}
                        >
                          <Row>
                            <Col>
                              <Form.Group
                                size="sm"
                                className="m-0 mx-auto p-0"
                                controlId="formQuantity"
                                style={{ width: "50px" }}
                              >
                                <Form.Control
                                  className="px-1"
                                  type="number"
                                  defaultValue={item.quantity}
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Button
                                type="submit"
                                id="quantityButton"
                                value={item._id}
                                variant="light"
                                className="mx-0 px-1"
                              >
                                Update
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </td>
                      <td className="price-align">${item.retailPrice}</td>
                      <td>
                        <Button
                          as={Link}
                          to="/cart"
                          className="p-0"
                          onClick={() => {
                            cart.removeItem(item);
                          }}
                          variant="light"
                        >
                          <FaTrash
                            style={{ cursor: "pointer" }}
                            className="icons p-0"
                          />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Subtotal</th>
                  <th className="price-align">${calculateSubtotal()}</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Shipping</th>
                  <th className="price-align">$25.00</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Tax</th>
                  <th className="price-align">${calculateTax()}</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Total</th>
                  <th className="price-align">${calculateTotal()}</th>
                </tr>
              </tbody>
            </Table>
            <Button
              onClick={() => {
                cart.clearCart();
              }}
              variant="outline-danger"
              className="float-end"
            >
              Empty Shopping Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
