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

const Orders = () => {
  const [orders, setOrders] = useState([]);

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

  function refreshPage() {
    window.location.reload(false);
  }

  const deleteOrder = (event) => {
    var orderId = event.target.attributes.value.value;
    try {
      const res = axios.put(`/api/order/${orderId}`, { status: `Deleted` });
      refreshPage();
      console.log(res.data);
      window.alert("Order deleted!");
      this.props.history.push("/orders");
    } catch (err) {
      console.log(err);
    }
  }

  const shipOrder = (event) => {
    var form = event.target;
    
    var trackingObj = { status: `Shipped`, tracking: form.formTracking.value };
    try {
      const res = axios.put(
        `/api/order/${form.trackingButton.value}`,
        trackingObj
      );
      console.log(res.data);
      window.alert("Order shipped!");
      this.props.history.push("/orders");
    } catch (err) {
      console.log(err);
    }
  }

  const completeOrder = (event) => {
    var orderId = event.target.attributes.value.value;
    try {
      const res = axios.put(`/api/order/${orderId}`, { status: `Completed` });
      refreshPage();
      console.log(res.data);
      window.alert("Order completed!");
      this.props.history.push('/orders');
    } catch (err) {
      console.log(err);
    }
  };

  function statusColor(order) {
    if (order.status === "Open") {
      return (
        <Card.Title style={{ backgroundColor: "#ccffcc" }}>
          Order Status - {order.status}
        </Card.Title>
      );
    } else {
      return (
        <Card.Title style={{ backgroundColor: "#ffffcc" }}>
          Order Status - {order.status}
        </Card.Title>
      );
    }
  }

  return (
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
          <h2>Open Orders</h2>
        </Col>
      </Row>
      <Row>
        {orders.map((order, i) => {
          if (order.status === "Deleted") {
            return <></>;
          } else if (order.status === "Completed") {
            return <></>;
          } else {
            return (
              <Card className="m-4">
                <Card.Header>Order #{order.orderNumber}</Card.Header>
                <Card.Body>
                  {statusColor(order)}
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
                            {order.items.map((item, i) => {
                              return (
                                <tr>
                                  <td>{item.quantity}</td>
                                  <td>{item.partNumber}</td>
                                  <td>${item.retailPrice}</td>
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
                      <Col sm={3}>
                        <h5>Email:</h5>
                        <p>{order.billingEmail}</p>
                        <h5>Tracking:</h5>
                        <p>{order.tracking}</p>
                      </Col>
                    </Row>
                  </Card.Text>
                  <Form onSubmit={shipOrder}>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formTracking">
                          <Form.Control
                            type="text"
                            placeholder="Enter tracking number"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Button
                          type="submit"
                          id="trackingButton"
                          value={order._id}
                          variant="primary"
                          className="mx-2"
                        >
                          Order Shipped
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          onClick={completeOrder}
                          id="completeButton"
                          value={order._id}
                          variant="primary"
                          className="mx-2"
                        >
                          Order Completed
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          href={`mailto:${order.billingEmail}`}
                          variant="primary"
                          className="mx-2"
                        >
                          Email Customer
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          onClick={deleteOrder}
                          id="deleteButton"
                          value={order._id}
                          variant="primary"
                          className="mx-2"
                        >
                          Delete Order
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default Orders;
