import React from 'react';
import { Modal, Tab, Tabs, Col, Row, Form, Button } from 'react-bootstrap';
import './ModalLogin.css';
import LoginImg from '../Assets/login.jpg'
import RegisterImg from '../Assets/register.jpg'

function ModalLogin({ show, handleClose }) {

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='ModalLoginRegister'
      >
        <Modal.Title className="modal-header">
          <button className="btn--primary closeButton" onClick={handleClose}>
            X
          </button>
        </Modal.Title>
        <Modal.Body>
          <Tabs
            defaultActiveKey="login"
            id="uncontrolled-tab-example"
            className="justify-content-center custom-tabs"
          >
            <Tab eventKey="login" title="Iniciar sesión">
              <Row>
                <Col md={6} className="colImg">
                  <img src={LoginImg} fluid alt='loginImg' />
                </Col>
                <Col md={6} className="formLogin">
                  <Form>
                    {/* Aquí va tu formulario de inicio de sesión */}
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Correo Electrónico"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>

                    <Form.Group controlId="formForgotPassword">
                      <Form.Text className="text-right mb-2">
                        <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                      </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Iniciar sesión
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="register" title="Registrarse">
              <Row>
                <Col md={6} className='formRegister'>
                  <Form>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su apellido"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                      <Form.Label>Número de Teléfono</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Ingrese su número de teléfono"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control type="email" placeholder="Correo Electrónico" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña" />
                      <Form.Text className="text-muted">
                        <p>* La contraseña debe tener al menos 6 caracteres. Debe
                        incluir minúsculas, mayúsculas y al menos un número.</p>
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox" className="custom-checkbox">
                      <Form.Check
                        type="checkbox"
                        label="He leído y acepto los Términos y Condiciones y Política de Privacidad"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Registrarse
                    </Button>
                  </Form>
                </Col>
                <Col md={6} className="colImg">
                  <img src={RegisterImg} fluid alt='registerImg'/>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
