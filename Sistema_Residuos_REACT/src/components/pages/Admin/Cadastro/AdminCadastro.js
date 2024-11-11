import React, { useEffect, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { resolvePath, useNavigate } from 'react-router-dom';
import { register } from '../../../../services/serviceLoginRegister'; // Atualize o caminho se necessário
import './cadastro.css';

export default function CreateUser() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow ="hidden";

        return() => {
            document.body.style.overflow ="unset";
        }
    })

    const handleCreateUser  = async (e) => {
      e.preventDefault();
      console.log("Dados antes da solicitação:", {name, email, password, role});
      if (name && email && password && role !== '' && password === passwordConfirm) {
          try {      
              await new Promise(resolve => setTimeout(resolve, 100));       
              await register(name, email, password, role);
              alert('Cadastro criado com sucesso');
              navigate('/login');
          } catch (err) {
              setError('Erro ao criar conta');
          }
      } else {
          setError('Preencha todos os campos corretamente');
      }
    };

    return (
    <div>
      <br></br>
      <br></br>
      <Container className="mt-4">
        <div className="mainlogin">
          <div className="leftlogin">
            <h1 style={{textAlign: "center"}}>
              Cadastre-se
              <br />
              <br /> Entre para nossa causa e ajude a melhorar a cidade!!
            </h1>
            <img src="nft.svg" className="imagem" alt="" />
          </div>
          <div className="rightlogin">
            <div className="cardlogin">
              <h1>Cadastro</h1>
              {error && <Alert color="danger">{error}</Alert>}
              <form onSubmit={handleCreateUser}>
              <div className='TextField'>
                  <label htmlFor='role'>Tipo de Usuário</label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="" disabled>Selecione um tipo</option>
                    <option value="cliente" >Cliente</option>
                    <option value="admin" >Admin</option>
                  </select>
              </div>
              <div className="TextField">
                  <label htmlFor="username">Nome de Usuário</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Nome de Usuário"
                    autoComplete="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
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
                <div className="TextField">
                    <label htmlFor="passwordConfirm">Confirmar Senha</label>
                    <input                    
                    type="password"
                    placeholder="Confirmar senha"
                    autoComplete="current-password"
                    autoCapitalize="none"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required></input>
                </div>                                        
                <button type="submit" className="btn-success w-100 mt-3">
                  Cadastrar
                </button>                
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>       
    );
} 