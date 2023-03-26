import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//backend dashboard for owners to login and see open and completed orders and to upload updated product information
function Dashboard({ user, setUser }) {
  console.log("user", user)
  const logout = async () => {
    await fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include'
    });
    setUser('');
  }
  return (
    <>{user ?
      <>
        < Container fluid="md" >
          <Row>
            <Col className="mx-auto my-5">
              <h1>Dashboard</h1>

              <h3>Hello {user}</h3>
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
              <Link to={"/"} onClick={logout}>
                <Button variant="primary" className="m-3">
                  Logout
                </Button>
              </Link>
            </Col>
          </Row>
        </Container >
      </>
      : <>
        <h1>You are not authorized!</h1>
      </>
    }</>
  );
}

export default Dashboard;
