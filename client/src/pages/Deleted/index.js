import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Table,
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

//page to see deleted orders placed on the website
const DeletedOrders = (props) => {
  //useState to keep track of the open orders array
  const [orders, setOrders] = useState([]);

  //useEffect to get the orders from the database
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/order");
        setOrders(res.data);
        console.log("orders", res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function mapOrRetail(product) {
    if (product.mapPrice === "") {
      return product.retailPrice;
    } else {
      return product.mapPrice;
    }
  }

  //returns the orders as full width cards with all of the order details like the products and the customer information.
  //no functionality with this page, only for referencing
  return (
    <>{props.user ?
      <>
        <Container className="m-3">
          <Row>
            <Col>
              <Link to={"/dashboard"}>
                <Button variant="primary" className="m-3">
                  Back to Dashboard
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-6 mx-auto">
              <h2>Deleted Orders</h2>
            </Col>
          </Row>
          <Row>
            {orders.map((order) => {
              if (order.status === "Deleted") {
                return (
                  <Card className="m-4" key={order._id}>
                    <Card.Header>Order #{order.orderNumber}</Card.Header>
                    <Card.Body>
                      <Card.Title style={{ backgroundColor: "#ff8080" }}>
                        Order Status - {order.status}
                      </Card.Title>
                      <Card.Text>
                        <Row>
                          <Col sm={3}>
                            <Table striped bordered hover size="sm">
                              <thead>
                                <tr>
                                  <th>Quantity</th>
                                  <th>Part #</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {order.items.map((item) => {
                                  return (
                                    <tr key={item._id}>
                                      <td>{item.quantity}</td>
                                      <td>{item.partNumber}</td>
                                      <td>${mapOrRetail(item)}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </Col>
                          <Col sm={2}>
                            <h5>Subtotal: ${order.subtotal}</h5>
                            <h5>Shipping: ${order.shipping}</h5>
                            <h5>Tax: ${order.tax}</h5>
                            <h5>Total: ${order.total}</h5>
                          </Col>
                          <Col sm={2}>
                            <h5>Billing Address:</h5>
                            <p>
                              {order.billingFirstName} {order.billingLastName}<br />
                              {order.billingAddress1}<br />
                              {order.billingAddress2}<br />
                              {order.billingCity}, {order.billingState}{" "}
                              {order.billingZip}<br />
                            </p>
                          </Col>
                          <Col sm={2}>
                            <h5>Shipping Address:</h5>
                            <p>
                              {order.shippingFirstName} {order.shippingLastName}<br />
                              {order.shippingAddress1}<br />
                              {order.shippingAddress2}<br />
                              {order.shippingCity}, {order.shippingState}{" "}
                              {order.shippingZip}<br />
                            </p>
                          </Col>
                          <Col sm={3}>
                            <h5>Email:</h5>
                            <p>{order.billingEmail}</p>
                            <h5>Tracking:</h5>
                            <p>{order.tracking}</p>
                          </Col>
                        </Row>
                      </Card.Text>
                      <Form>
                        <Row>
                          <Col>
                            <Button
                              href={`mailto:${order.billingEmail}`}
                              variant="primary"
                              className="mx-2"
                            >
                              Email Customer
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                );
              } else {
                return <></>;
              }
            })}
          </Row>
        </Container>
      </>
      : <>
        <h1>You are not authorized!</h1>
      </>
    }</>
  );
};

export default DeletedOrders;
