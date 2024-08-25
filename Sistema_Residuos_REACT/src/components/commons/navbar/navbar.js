import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home/home";
import Cadastro from "../../pages/Cadastro/cadastro";
import Login from "../../pages/Login/login";
import Mapa from "../../pages/Mapa/mapa";
import Calendario from "../../pages/Calendario/calendario";
import Notificacoes from "../../pages/Notificacoes/notificacoes";
import { FaSignInAlt, FaUserPlus, FaBell } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";


const NavBarMain = () => {
  return (
    <>
    <div className="navbar navbar-dark bg-dark w-100">
      <Navbar bg="dark" expand="lg" className="navbar-brand">
      <Container>
            <div>
                <Navbar.Brand as={Link} to="/home">
                <FontAwesomeIcon icon={faHouse} />
                &nbsp;Sistema de Gestão de Resíduos Sólidos para Comunidades
                </Navbar.Brand>
            </div>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div>
                <Nav className="me-auto">
                    <Nav.Item>
                    <Nav.Link as={Link} to="/cadastro">
                        <FaUserPlus /> &nbsp;Cadastro
                    </Nav.Link>
                    </Nav.Item>
                </Nav>  
                </div>
                <div>
                <Nav>
                    <Nav.Item>
                    <Nav.Link as={Link} to="/login">
                        <FaSignInAlt /> &nbsp;Login
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link as={Link} to="/notificacoes">
                        <FaBell /> &nbsp;Notificações
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>

            
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <br></br>    
    <br></br>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mapa" element={<Mapa/>} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};

export default NavBarMain;
