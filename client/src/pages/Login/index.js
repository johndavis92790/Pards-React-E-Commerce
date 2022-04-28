import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


//login page for owners back end
function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false)

  const submit = (e) => {
    e.preventDefault();

    fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({
        username,
        password
      }),
    }).then((res) => {
      setUser(username);
      setRedirect(true);
    });
  }

  if (redirect) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Container fluid="md">
      <Row>
        <Col className="mx-auto my-5">
          <h3>Login</h3>
          <h4>Use username: test password: test</h4>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

