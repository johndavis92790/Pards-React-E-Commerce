import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { useLocation, Link } from 'react-router-dom'

function OrderModal(props) {
  const location = useLocation();
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Order updated!</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} as={Link}
          to={location.pathname}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;
