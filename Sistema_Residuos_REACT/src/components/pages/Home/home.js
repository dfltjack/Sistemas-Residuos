import React from "react";
import "./home.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faHouse, faAddressCard, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaSignInAlt, FaUserPlus, FaBell } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-6">
      <div>
        <nav className="navbar navbar-dark bg-dark w-100">
          <a className="navbar-brand" href="home.js">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>&nbsp;
             Sistema de Gestão de Resíduos Sólidos para Comunidades
          </a>

          <div className="navbar-brand">
            <Button variant="outline-light" href="/login">
              <FaSignInAlt /> Login
            </Button>
            <Button variant="outline-light" href="/cadastro">
              <FaUserPlus /> Cadastro
            </Button>
            <Button variant="outline-light" href="/notificacoes">
              <FaBell /> Notificações
            </Button>
          </div>
        </nav>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {/* <h1
        style={{ fontSize: "30px", textAlign: "center", fontWeight: "bolder" }}
      >
        Início
      </h1> */}
      <div>
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          <strong>            
            Bem-vindo ao Sistema de Gestão de Residuos Sólidos Para Comunidades
          </strong>
        </p>
      </div>

      <div className="container mt mt-12">
        <div className="row">
          <h2>
            <p className="text">
              &nbsp;&nbsp;&nbsp;Nosso objetivo é desenvolver um sistema integrado que facilite a gestão de resíduos sólidos na comunidade, promovendo a reciclagem e a correta destinação do lixo. Queremos criar um impacto positivo no meio ambiente e na qualidade de vida dos moradores.
            </p>
          </h2>
        </div>
      </div>

      <Row className="mt-4 flex-column">
        <Col className="mb-4 d-flex">
          <img
            src="/cadastroCasa.png" 
            alt="Imagem Cadastro"
            className="mr-3"
            style={{ width: "150px", height: "150px" }}
          />&nbsp;&nbsp;
          <Card className="card-fixed-height">
            <Card.Body>
              <Card.Title>
                Cadastro de Residências e Estabelecimentos
              </Card.Title>
              <Card.Text>
                Adicione, edite e visualize informações das Residências e
                Estabelecimentos.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/cadastro")}>
                Ir para Cadastro
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4 d-flex">
          <img
            src="/calendario.jpg"
            alt="Imagem Calendário"
            className="mr-3"
            style={{ width: "150px", height: "150px" }}
          />&nbsp;&nbsp;
          <Card className="card-fixed-height">
            <Card.Body>
              <Card.Title>Calendário de Coleta</Card.Title>
              <Card.Text>
                Veja e gerencie todas os dias de coleta feitos nas Comunidades.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/calendario")}>
                Ir para Calendário
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4 d-flex">
          <img
            src="/mapa.jpg"
            alt="Imagem 3"
            className="mr-3"
            style={{ width: "150px", height: "150px" }}
          />&nbsp;&nbsp;
          <Card className="card-fixed-height">
            <Card.Body>
              <Card.Title>Mapeamento de Pontos de Coleta</Card.Title>
              <Card.Text>
                Mostrar no mapa os pontos de coleta seletiva e ecopontos mais
                próximos.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/mapa")}>
                Ir para Mapeamento
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <footer>
        <div class="footer-container">
          <div class="main-footer-subnav col-12 d-flex flex-column flex-md-row justify-content-between align-items-lg-center">
            <div
              class="col-10 col-md-5 col-lg-5 offset-1"
              style={{ color: "black" }}
            >
              <h4>Tem alguma dúvida?</h4>
              <ul class="list-unstyled">
                
                <li class="py-1"><FontAwesomeIcon icon={faAddressCard} />&nbsp;Rua Goiás 427 - Morada do Contorno</li>
                <li class="py-1"><FontAwesomeIcon icon={faPhone} />&nbsp;+55 (24) 99879-2952</li>
                <li class="py-1"><FontAwesomeIcon icon={faEnvelope} />&nbsp;
                  <a
                    href="mailto:SistemaResiduos@hotmail.com"
                    style={{ color: "black" }}
                  >
                    <i class="far fa-envelope"></i> SistemaResiduos@hotmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div
              class="col-10 col-md-5 col-lg-12 offset-1"
              style={{ color: "black" }}
            >
              <p class="copyright" style={{ textalign: "left" }}>
                <h5>
                  © 2024 - Sistema de Gestão de Resíduos Sólidos para
                  Comunidades
                </h5>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
