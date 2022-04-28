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

//page to see completed orders placed on the website
const CompletedOrders = (props) => {
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

  //function to refresh page when updated order details
  function refreshPage() {
    window.location.reload(false);
  }

  //marks order as deleted, does not actually delete order, it never deletes any orders so you can always go back to reference it
  const deleteOrder = (event) => {
    var orderId = event.target.attributes.value.value;
    try {
      const res = axios.put(`/api/order/${orderId}`, { status: `Deleted` });
      refreshPage();
      console.log(res.data);
      window.alert("Order deleted!");
      this.props.history.push("/completed");
    } catch (err) {
      console.log(err);
    }
  };

  //returns the orders as full width cards with all of the order details like the products and the customer information
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
              <h2>Completed Orders</h2>
            </Col>
          </Row>
          <Row>
            {orders.map((order, i) => {
              if (order.status === "Completed") {
                return (
                  <Card className="m-4">
                    <Card.Header>Order #{order.orderNumber}</Card.Header>
                    <Card.Body>
                      <Card.Title style={{ backgroundColor: "#ff8080" }}>
                        Order Status - {order.status}
                      </Card.Title>
                      <Card.Text>
                        <Row>
                          <Col sm={3}>
                            <Table
                              // style={{ width: "18rem" }}
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

export default CompletedOrders;
