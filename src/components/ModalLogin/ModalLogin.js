import React, { useState } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import './ModalLogin.css';
import LoginImg from '../Assets/login.jpg';
import RegisterImg from '../Assets/register.jpg';

function ModalLogin({ show, handleClose }) {
  const [activeForm, setActiveForm] = useState('login');

  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  const renderSwitchLink = () => {
    if (activeForm === 'login') {
      return (
        <p className="right-align">
          ¿No tienes una cuenta?{' '}
          <button className="link" onClick={() => handleFormSwitch('register')}>
            Registrarse
          </button>
        </p>
      );
    } else {
      return (
        <p className="right-align">
          ¿Tienes una cuenta?{' '}
          <button className="link" onClick={() => handleFormSwitch('login')}>
            Inicia sesión
          </button>
        </p>
      );
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="ModalLoginRegister"
      >
        <Modal.Title className="modal-header">
          <button className="btn--primary closeButton" onClick={handleClose}>
            X
          </button>
        </Modal.Title>
        <Modal.Body>
          <Row>
            <Col md={6} className="colImg">
              {activeForm === 'login' && <img src={LoginImg} fluid alt="loginImg" />}
              {activeForm === 'register' && <img src={RegisterImg} fluid alt="registerImg" />}
            </Col>
            <Col md={6} className="formColumn">
              {activeForm === 'login' && (
                <Form>
                  {/* Aquí va tu formulario de inicio de sesión */}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Correo Electrónico" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" className='mt-3'/>
                  </Form.Group>

                  <Form.Group controlId="formForgotPassword">
                    <Form.Text className="text-right mb-2">
                      <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                    </Form.Text>
                  </Form.Group>

                  <Button variant="primary mt-3 mb-4 btnForm" type="submit">
                    Iniciar Sesión
                  </Button>
                  {renderSwitchLink()}
                </Form>
              )}
              {activeForm === 'register' && (
                <Form>
                  {/* Aquí va tu formulario de registro */}
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" />
                  </Form.Group>

                  <Form.Group controlId="formBasicLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su apellido" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="Ingrese su número de teléfono" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Correo Electrónico" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                    <Form.Text className="text-muted">
                      <p className='mt-1 mb-3'>* La contraseña debe tener al menos 6 caracteres. Debe incluir minúsculas, mayúsculas y al menos un número.</p>
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox" className="custom-checkbox">
                    <Form.Check
                      type="checkbox"
                      label="He leído y acepto los Términos y Condiciones y Política de Privacidad"
                    />
                  </Form.Group>

                  <Button variant="primary mt-3 mb-4 btnForm" type="submit">
                    Registrarse
                  </Button>
                  {renderSwitchLink()}
                </Form>
              )}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
