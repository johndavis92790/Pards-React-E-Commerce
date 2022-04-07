import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Dashboard() {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col className="mx-auto my-5">
            <h1>Dashboard</h1>

            <Link to={"/upload"}>
              <Button variant="primary" className="m-3">
                Upload Product Data
              </Button>
            </Link>
            <Link to={"/create"}>
              <Button variant="primary" className="m-3">
                Create New User
              </Button>
            </Link>
            <Link to={"/orders"}>
              <Button variant="primary" className="m-3">
                Open Orders
              </Button>
            </Link>
            <Link to={"/completed"}>
              <Button variant="primary" className="m-3">
                Completed Orders
              </Button>
            </Link>
            <Link to={"/deleted"}>
              <Button variant="primary" className="m-3">
                Deleted Orders
              </Button>
            </Link>
            <Link to={"/"}>
              <Button variant="primary" className="m-3">
                Logout
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
