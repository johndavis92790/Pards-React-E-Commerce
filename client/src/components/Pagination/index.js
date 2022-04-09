import React from "react";
import { Row, Col } from "react-bootstrap";

//pagination for the product page
const Pagination = ({ partsPerPage, totalParts, paginate }) => {

  //starts with and empty array
  const pageNumbers = [];
  //calculates number of pages of parts
  for (let i = 1; i <= Math.ceil(totalParts / partsPerPage); i++) {
    pageNumbers.push(i);
  }

  //retuns page number buttons at bottom of page
  return (
    <Row>
      <Col>
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  onClick={() => paginate(number)}
                  href="#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Col>
    </Row>
  );
};

export default Pagination;
