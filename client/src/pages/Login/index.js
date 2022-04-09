import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//login page for owners back end
function Login() {
  return (
    <Container fluid="md">
      <Row>
        <Col className="mx-auto my-5">
          <h1 id="about">
            <style>Login</style>
          </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <Link to={"/create"}>
            <Button variant="primary" className="my-3">
              Create New User
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

