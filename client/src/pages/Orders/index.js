import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";

const Product = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/order");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Container className="m-3">
      <Row>
        <h2>Open Orders</h2>
      </Row>
      <Row>
        <Card fluid className="m-4">
          <Card.Header>Order #1234</Card.Header>
          <Card.Body>
            <Card.Title>Order Status - Shipped</Card.Title>
            <Card.Text>
              <Row>
                <Col sm={3}>
                  <Table
                    style={{ width: "18rem" }}
                    striped
                    bordered
                    hover
                    size="sm"
                  >
                    <thead>
                      <tr>
                        <th>Quantity</th>
                        <th>Part #</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1234</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2345</td>
                        <td>$20</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>3456</td>
                        <td>$30</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col sm={2}>
                  <h5>Subtotal: $140</h5>
                  <h5>Shipping: $25</h5>
                  <h5>Tax: $10</h5>
                  <h5>Total: $175</h5>
                </Col>
                <Col sm={2}>
                  <h5>Billing Address:</h5>
                  <p>John Doe</p>
                  <p>123 Fake St.</p>
                  <p>Faketown, UT 84000</p>
                </Col>
                <Col sm={2}>
                  <h5>Shipping Address:</h5>
                  <p>John Doe</p>
                  <p>123 Fake St.</p>
                  <p>Faketown, UT 84000</p>
                </Col>
                <Col sm={2}>
                  <h5>Email:</h5>
                  <p>email@email.com</p>
                </Col>
              </Row>
            </Card.Text>
            <Button variant="primary" className="mx-2">
              Order Shipped
            </Button>
            <Button variant="primary" className="mx-2">
              Order Completed
            </Button>
            <Button variant="primary" className="mx-2">
              Email Customer
            </Button>
            <Button variant="primary" className="mx-2">
              Delete Order
            </Button>
          </Card.Body>
        </Card>
        <Card fluid className="m-4">
          <Card.Header>Order #1234</Card.Header>
          <Card.Body>
            <Card.Title>Order Status - Shipped</Card.Title>
            <Card.Text>
              <Row>
                <Col sm={3}>
                  <Table
                    style={{ width: "18rem" }}
                    striped
                    bordered
                    hover
                    size="sm"
                  >
                    <thead>
                      <tr>
                        <th>Quantity</th>
                        <th>Part #</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1234</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2345</td>
                        <td>$20</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>3456</td>
                        <td>$30</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col sm={2}>
                  <h5>Subtotal: $140</h5>
                  <h5>Shipping: $25</h5>
                  <h5>Tax: $10</h5>
                  <h5>Total: $175</h5>
                </Col>
                <Col sm={2}>
                  <h5>Billing Address:</h5>
                  <p>John Doe</p>
                  <p>123 Fake St.</p>
                  <p>Faketown, UT 84000</p>
                </Col>
                <Col sm={2}>
                  <h5>Shipping Address:</h5>
                  <p>John Doe</p>
                  <p>123 Fake St.</p>
                  <p>Faketown, UT 84000</p>
                </Col>
                <Col sm={2}>
                  <h5>Email:</h5>
                  <p>email@email.com</p>
                </Col>
              </Row>
            </Card.Text>
            <Button variant="primary" className="mx-2">
              Order Shipped
            </Button>
            <Button variant="primary" className="mx-2">
              Order Completed
            </Button>
            <Button variant="primary" className="mx-2">
              Email Customer
            </Button>
            <Button variant="primary" className="mx-2">
              Delete Order
            </Button>
          </Card.Body>
        </Card>
        <Card fluid className="m-4">
          <Card.Header>Order #1234</Card.Header>
          <Card.Body>
            <Card.Title>Order Status - Shipped</Card.Title>
            <Card.Text>
              <Row>
                <Col sm={3}>
                  <Table
                    style={{ width: "18rem" }}
                    striped
                    bordered
                    hover
                    size="sm"
                  >
                    <thead>
                      <tr>
                        <th>Quantity</th>
                        <th>Part #</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1234</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2345</td>
                        <td>$20</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>3456</td>
                        <td>$30</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col sm={2}>
                  <h5>Subtotal: $140</h5>
                  <h5>Shipping: $25</h5>
                  <h5>Tax: $10</h5>
                  <h5>Total: $175</h5>
                </Col>
                <Col sm={2}>
                  <h5>Billing Address:</h5>
                  <p>John Doe</p>
                  <p>123 Fake St.</p>
                  <p>Faketown, UT 84000</p>
                </Col>
                <Col sm={2}>
                  <h5>Shipping Address:</h5>
                  <p>John Doe</p>
                  <p>123 Fake St.</p>
                  <p>Faketown, UT 84000</p>
                </Col>
                <Col sm={2}>
                  <h5>Email:</h5>
                  <p>email@email.com</p>
                </Col>
              </Row>
            </Card.Text>
            <Button variant="primary" className="mx-2">
              Order Shipped
            </Button>
            <Button variant="primary" className="mx-2">
              Order Completed
            </Button>
            <Button variant="primary" className="mx-2">
              Email Customer
            </Button>
            <Button variant="primary" className="mx-2">
              Delete Order
            </Button>
          </Card.Body>
        </Card>
        {/* {orders.map((order, i) => {
          return (
            <Card fluid className="m-4">
              <Card.Header>Order #{order.orderNumber}</Card.Header>
              <Card.Body>
                <Card.Title>Order Status - {order.status}</Card.Title>
                <Card.Text>
                  <Row>
                    <Col sm={2}>
                      <Table
                        style={{ width: "18rem" }}
                        striped
                        bordered
                        hover
                        size="sm"
                      >
                        <thead>
                          <tr>
                            <th>Quantity</th>
                            <th>Part #</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.items.map((item, i) => {
                            return (
                              <tr>
                                <td>{item[i].quantity}</td>
                                <td>{item[i].partNumber}</td>
                                <td>{item[i].price}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Col>
                    <Col sm={2}>
                      <h5>Subtotal: {order.subtotal}</h5>
                      <h5>Shipping: {order.shipping}</h5>
                      <h5>Tax: {order.tax}</h5>
                      <h5>Total: {order.total}</h5>
                    </Col>
                    <Col sm={2}>
                      <h5>Billing Address:</h5>
                      <p>
                        {order.billingFirstName} {order.billingLastName}
                      </p>
                      <p>{order.billingAddress1}</p>
                      <p>{order.billingAddress2}</p>
                      <p>
                        {order.billingCity}, {order.billingState}{" "}
                        {order.billingZip}
                      </p>
                    </Col>
                    <Col sm={2}>
                      <h5>Shipping Address:</h5>
                      <p>
                        {order.shippingFirstName} {order.shippingLastName}
                      </p>
                      <p>{order.shippingAddress1}</p>
                      <p>{order.shippingAddress2}</p>
                      <p>
                        {order.shippingCity}, {order.shippingState}{" "}
                        {order.shippingZip}
                      </p>
                    </Col>
                    <Col sm={2}>
                      <h5>Email:</h5>
                      <p>{order.billingEmail}</p>
                    </Col>
                  </Row>
                </Card.Text>
                <Button variant="primary" className="mx-2">
                  Order Shipped
                </Button>
                <Button variant="primary" className="mx-2">
                  Order Completed
                </Button>
                <Button variant="primary" className="mx-2">
                  Email Customer
                </Button>
                <Button variant="primary" className="mx-2">
                  Delete Order
                </Button>
              </Card.Body>
            </Card>
          );
        })} */}
      </Row>
    </Container>
  );
};

export default Product;
