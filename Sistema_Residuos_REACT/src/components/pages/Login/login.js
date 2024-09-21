import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:5000/api/Auth/login', { email, password });
            console.log(response.data); // Para verificar a resposta
    
            const { token, userName, role } = response.data; // Inclua role na desestruturação
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            localStorage.setItem('role', role); // Armazene o role no localStorage
           
            navigate('/dashboard'); // Redirecione para a dashboard
            
        } catch (err) {
            setError('Email ou senha inválidos');
        }
        window.location.reload(false);  // Recarrega a página
    };

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('https://localhost:5000/api/Auth/login', { email, password });
    //         console.log(response.data); // Adicione este log para verificar a resposta
    //         const { token, userName } = response.data;
            
    //         // Armazena o token e nome do usuário no localStorage
    //         localStorage.setItem('token', token);
    //         localStorage.setItem('userName', userName);

    //         // Atualiza a navbar com as informações do usuário
    //         onLoginSuccess(userName, token);

    //         // Redireciona para a página de dashboard
    //         navigate('/dashboard');
    //     } catch (err) {
    //         setError('Email ou senha inválidos');
    //     }
    // };

    return (
        <div>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="text-center mb-4">
                            <img src='/assets/user-blue.png' alt="User" className="img-fluid" />
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Senha"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button 
                                variant="primary" 
                                type="submit" 
                                className="w-100 mt-3"                                
                            >
                                Entrar
                            </Button>
                            <Button
                                variant="link"
                                onClick={() => navigate('/cadastro')}
                                className="w-100 mt-2"
                                style={{color: "blue"}}
                            >
                                Criar Conta
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}




// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './login.css';

// export default function Login() {
//     const navigate = useNavigate();

//     return (
//       <div>
//         <Container className="mt-4">
//             <Row className="justify-content-center">
//                 <Col md={6}>
//                     <div className="text-center mb-4">
//                         <img src='/assets/user-blue.png' alt="User" className="img-fluid" />
//                     </div>
//                     <Form>
//                         <Form.Group controlId="formEmail">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type="email" placeholder="Email" autoComplete="email" />
//                         </Form.Group>
//                         <Form.Group controlId="formPassword">
//                             <Form.Label>Senha</Form.Label>
//                             <Form.Control type="password" placeholder="Senha" autoComplete="current-password" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit" className="w-100 mt-3">
//                             Entrar
//                         </Button>
//                         <Button variant="link" onClick={() => navigate('/createuser')} className="w-100 mt-2">
//                             Criar Conta
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//       </div>
//     );
// }