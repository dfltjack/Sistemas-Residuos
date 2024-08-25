import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';

export default function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    function handleCreateUser() {
        if (name && email && password !== '' && password === passwordConfirm) {
            alert('Cadastro criado com sucesso');
            navigate('/login');
        } else {
            alert('Ops! algo errado');
        }
    }

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={6}>
                <div className="text-center mb-4">
                        <img src='/assets/user-blue.png' alt="User" className="img-fluid" />
                </div>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nome"
                                autoComplete="username"
                                autoCapitalize="none"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                autoComplete="email"
                                autoCapitalize="none"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                autoComplete="current-password"
                                autoCapitalize="none"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPasswordConfirm">
                            <Form.Label>Confirmar senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirmar senha"
                                autoComplete="current-password"
                                autoCapitalize="none"
                                onChange={(event) => setPasswordConfirm(event.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" className="w-100 mt-3" onClick={handleCreateUser}>
                            Cadastrar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}