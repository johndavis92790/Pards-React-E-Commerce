import React from "react";
// import axios from "axios";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";


const SingleProduct = ({ setProductSelection, productSelection }) => {
  return (
    <>
      <Container fluid="md" className="my-5">
        <Row className="align-items-center">
          <Col sm={7} className="p-5">
            <Image
              fluid
              src={
                "https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg"
              }
              alt="16060"
            />
          </Col>
          <Col sm={5}>
            <div>
              <h1>Air Lift</h1>
              <h3>Part# 16060</h3>
              <h6>Air Lift 16060 Black electric 12V Standard Air Compressor</h6>
              <h5>Category: Suspension</h5>
              <h5>Part Type: Compressor System</h5>
              <h4>$104.17</h4>
              <Form.Select
                style={{width: "110px"}}
                aria-label="Quantity"
              >
                <option>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
              <Button>Add to Cart</Button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <p>{productSelection}</p>
      <button onClick={() => setProductSelection(null)}>Back</button> */}
    </>
  );
};

export default SingleProduct;
