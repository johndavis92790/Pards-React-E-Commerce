import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Added to cart!</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} as={Link} to="/cart">Cart</Button>
        <Button onClick={props.onHide}>Keep Shopping</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
