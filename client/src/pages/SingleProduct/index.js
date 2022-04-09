import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { useShoppingCart } from "../../components/Context/CartContext";
import { FaArrowLeft } from "react-icons/fa";

//page to display more information of a single product
const SingleProduct = () => {
  //useParams to get the object id from the url to find the specific product to display
  const { partId } = useParams();

  //useState to keep track of which product was selected
  const [part, setPart] = useState({});

  //useEffect to get the details of the product selected
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/api/part/${partId}`);
        setPart(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [partId]);

  //shopping cart variable
  const cart = useShoppingCart();

  //some parts only have retail prices and no MAP prices, this defaults to the MAP price if it exists, then returns the retail price if it doesn't exist
  function mapOrRetail(product) {
    if (product.mapPrice === "") {
      return product.retailPrice;
    } else {
      return product.mapPrice;
    }
  }

  //returns dynamically created page with all the current product information
  return (
    <Container fluid="md" className="my-5">
      <Button as={Link} to="/product">
        <FaArrowLeft /> Back
      </Button>
      <Row className="align-items-center">
        <Col sm={7} className="p-5">
          <Image fluid src={part.photo} alt={part.partNumber} />
        </Col>
        <Col sm={5}>
          <div>
            <h1>{part.brand}</h1>
            <h3 className="mb-4">Part# {part.partNumber}</h3>
            <h6 className="mb-4">{part.description}</h6>
            <h5>Part Type: {part.descriptionTwo}</h5>
            <h5>Category: {part.category}</h5>
            <h4>Price: ${mapOrRetail(part)}</h4>

            <Form
              onSubmit={(event) => {
                event.preventDefault();
                console.log("test");
                cart.addItem(event, part);
              }}
            >
              <Row>
                <Col>
                  <Form.Group
                    size="sm"
                    className="m-0"
                    controlId="formQuantity"
                    style={{ width: "80px" }}
                  >
                    <Form.Control type="number" defaultValue={1} />
                    <Button
                      as={Link}
                      to="/cart"
                      type="submit"
                      id="quantityButton"
                      value={part._id}
                      variant="success"
                      className="mt-2"
                    >
                      Add to Cart
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
