import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const Success = () => {
  return (
    <Container fluid="md" className="my-5">
      <Button as={Link} to="/">
        <FaArrowLeft /> Back to home
      </Button>
      <Row className="align-items-center">
        <Col className="p-5">
          <h3>Order Placed!</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Success;
