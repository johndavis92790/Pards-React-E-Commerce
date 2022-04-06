import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { useShoppingCart } from "../../components/Context/CartContext";
import { FaArrowLeft } from "react-icons/fa";

const SingleProduct = (props) => {
  // console.log("props", props);

  // var partId = props.data.target.dataset.part
  // return null;

  const [part, setPart] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/part/");
        setPart(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // const [singleProduct, setSingleProduct] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get("/api/part");
  //       setParts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // function selectProduct(item) {
  //   setSingleProduct((prevItem) => {
  //     prevItem = item;
  //     console.log("prevItem", prevItem);
  //     return prevItem;
  //   });
  // }

  // function returnProduct() {
  //   console.log("singleProduct", singleProduct);
  //   return singleProduct;
  // }

  const cart = useShoppingCart();

  function mapOrRetail(product) {
    if (product.mapPrice === "") {
      return product.retailPrice;
    } else {
      return product.mapPrice;
    }
  }
  return (
    <Container fluid="md" className="my-5">
      <Button>
        <FaArrowLeft /> Back
      </Button>
      <Row className="align-items-center">
        <Col sm={7} className="p-5">
          <Image
            fluid
            src={part.photo}
            alt={part.partNumber}
          />
        </Col>
        <Col sm={5}>
          <div>
            <h1>{part.brand}</h1>
            <h3 className="mb-4">Part# {part.partNumber}</h3>
            <h6 className="mb-4">{part.description}</h6>
            <h5>Part Type: {part.descriptionTwo}</h5>
            <h5>Category: {part.category}</h5>
            <h4>Price: ${mapOrRetail(part)}</h4>
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
            <Button onClick={() => cart.addItem(part)}>
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
