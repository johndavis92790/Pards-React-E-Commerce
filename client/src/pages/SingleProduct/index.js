import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { useShoppingCart } from "../../components/CartContext";
import { FaArrowLeft } from "react-icons/fa";

const SingleProduct = ({ setProductSelection, productSelection }) => {

  const { add } = useShoppingCart();

  function mapOrRetail(product) {
    if (product.mapPrice === "") {
      return product.retailPrice;
    } else {
      return product.mapPrice;
    }
  }
  return (
    <Container fluid="md" className="my-5">
      <Button onClick={() => setProductSelection(null)}>
        <FaArrowLeft /> Back
      </Button>
      <Row className="align-items-center">
        <Col sm={7} className="p-5">
          <Image
            fluid
            src={productSelection.photo}
            alt={productSelection.partNumber}
          />
        </Col>
        <Col sm={5}>
          <div>
            <h1>{productSelection.brand}</h1>
            <h3 className="mb-4">Part# {productSelection.partNumber}</h3>
            <h6 className="mb-4">{productSelection.description}</h6>
            <h5>Part Type: {productSelection.descriptionTwo}</h5>
            <h5>Category: {productSelection.category}</h5>
            <h4>Price: ${mapOrRetail(productSelection)}</h4>
            <Form.Select
              className="my-4"
              style={{ width: "110px" }}
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
            <Button onClick={add(productSelection)}>Add to Cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
