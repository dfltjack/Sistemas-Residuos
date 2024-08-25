import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
    const navigate = useNavigate();

    return (
      <div>
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="text-center mb-4">
                        <img src='/assets/user-blue.png' alt="User" className="img-fluid" />
                    </div>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" autoComplete="email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" autoComplete="current-password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Entrar
                        </Button>
                        <Button variant="link" onClick={() => navigate('/createuser')} className="w-100 mt-2">
                            Criar Conta
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
      </div>
    );
}