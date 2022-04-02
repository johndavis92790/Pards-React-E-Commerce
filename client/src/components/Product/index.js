import React, { useState, useEffect } from "react";
import SingleProduct from "../SingleProduct";
import axios from "axios";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Button
} from "react-bootstrap";

const Product = () => {
  const [parts, setParts] = useState([]);
  const [productSelection, setProductSelection] = useState([]);

  const handleChange = (e) => {
    console.log("e", e);
    setProductSelection((e) => ({
      brand: e.brand,
      category: e.category,
      description: e.description,
      partNumber: e.partNumber,
      photo: e.photo,
      _id: e._id,
    }));
    console.log("productSelection2", productSelection);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/part");
        setParts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {!productSelection ? (
        <SingleProduct
          setProductSelection={setProductSelection}
          productSelection={productSelection}
        ></SingleProduct>
      ) : (
        <Container fluid className="m-3">
          <Row className="justify-content-center">
            {parts.map((part, i) => {
              return (
                <Card
                  className="m-3"
                  style={{ width: "18rem" }}
                  key={part.partNumber}
                >
                  <Card.Img variant="top" src={part.photo} />
                  <Card.Body>
                    <Card.Title>{part.partNumber}</Card.Title>
                    <Card.Text>{part.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{part.brand}</ListGroupItem>
                    <ListGroupItem>{part.category}</ListGroupItem>
                    {/* <ListGroupItem>{part.retailPrice}</ListGroupItem> */}
                  </ListGroup>
                  <Card.Body>
                    <Button
                      onClick={() => {
                        console.log("part", part);
                        setProductSelection({...part, index: i});
                        console.log("productSelection", productSelection);
                        // handleChange(part);
                      }}
                    >
                      Select Part
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Product;
