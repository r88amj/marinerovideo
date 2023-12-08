import React from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function ModalRegister({showRegister, handleCloseRegister}) {
  return (
    <>
    <Modal 
    show={showRegister} 
    onHide={handleCloseRegister} 
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Body>
      <Modal.Title className="modal-header">
              <button href="#" className="btn--primary closeButton" onClick={handleCloseRegister}>
                X
              </button>
            </Modal.Title>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">
          Acceso
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default ModalRegister
