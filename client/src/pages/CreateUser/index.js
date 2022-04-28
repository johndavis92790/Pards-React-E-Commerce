import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

//create user page for owners back end logins
function CreateUser() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    console.log({
      username,
      email,
      password
    })

    await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password
      }),
    });
    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to='/login' />;
  }
  
  return (
    <Container fluid="md">
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
        <Col className="mx-auto my-5">
          <h1 id="about">
            <style>Create New User</style>
          </h1>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Create User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateUser;
