import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Desativa o scroll da página
    document.body.style.overflow = 'hidden';

    // Limpa o estilo ao desmontar o componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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

  return (
    <div>
      <br></br>
      <br></br>
      <Container className="mt-4">
        <div className="mainlogin">
          <div className="leftlogin">
            <h1 style={{textAlign: "center"}}>
              Faça Login
              <br />
              <br /> Entre para nossa causa e ajude a melhorar a cidade!!
            </h1>
            <img src="nft.svg" className="imagem" alt="" />
          </div>
          <div className="rightlogin">
            <div className="cardlogin">
              <h1>LOGIN</h1>
              {error && <Alert color="danger">{error}</Alert>}
              <form onSubmit={handleLogin}>
                <div className="TextField">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="TextField">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-success w-100 mt-3">
                  Entrar
                </button>
                <button
                  type="button"
                  className="btn-link w-100 mt-2"
                  style={{color: "blue"}}
                  onClick={() => navigate('/cadastro')}
                >
                  Criar Conta
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;