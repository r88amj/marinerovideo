import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import './ModalLogin.css'
import ModalRegister from '../ModalResgister/ModalRegister';

function ModalLogin ({show, handleClose}) {
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => {
    setShowRegister(true);
    handleClose();
  };
  return (
    <>
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Row className="modal__login">
          <Col md={6} className="imgRight">
            <Image
              src="https://images.pexels.com/photos/8917662/pexels-photo-8917662.jpeg?auto=compress&cs=tinysrgb&w=1600"
              fluid
              alt='login_img'
            />
          </Col>
          <Col md={6} className='form__register'>
            <Modal.Title className="modal-header">
              <button className="btn--primary closeButton" onClick={handleClose}>
                X
              </button>
            </Modal.Title>
            <Form className="text-center">
              <Form.Label className="mb-3">INICIAR SESIÓN</Form.Label>
            </Form>
            <Form className="mx-auto">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="email"
                name='email' 
                placeholder="Correo Electrónico" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control 
                type="password" 
                name='password'
                placeholder="Contraseña" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Form className="text-center">
                <Button variant="primary" onClick={handleClose}>
                  Iniciar Sesión
                </Button>
              </Form>
              <Form className='pt-3 pb-2 text-right'>
                <a href='https://marinero.mx/forgot-password' target='blank'>¿Has olvidado tu contraseña?</a>
              </Form>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <p>
          ¿No tiene una cuenta?<button className='btn--primary pl-2' onClick={handleShowRegister}> Registrarse</button>
        </p>
      </Modal.Footer>
    </Modal>
    <ModalRegister showRegister={showRegister} handleCloseRegister={handleCloseRegister}/>
    </>
  );
}

export default ModalLogin
