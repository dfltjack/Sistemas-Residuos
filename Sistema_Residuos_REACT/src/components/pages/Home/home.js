import React from "react";
import "./home.css";
import {
  Container,
  Nav,
  Navbar,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FaSignInAlt, FaUserPlus, FaBell } from "react-icons/fa";
import { Link, Route, Routes, useNavigate, Navigate } from "react-router-dom";
// import Cadastro from "../Cadastro/cadastro";
// import Login from "../Login/login";
// import Notificacoes from "../Notificacoes/notificacoes";
import NavBarMain from "../../commons/navbar/navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid mt-4" style={{ paddingBottom: "200px" }}>
      <div className="text-center mb-4">
        <p style={{ fontSize: "30px" }}>
          <strong>
            Bem-vindo ao Sistema de Gestão de Residuos Sólidos Para Comunidades
          </strong>
        </p>
      </div>

      <Row>
        <Col md={4} className="d-flex flex-column">
          <Row className="mb-4 d-flex align-items-center">
            <img
              src="/cadastroCasa.png"
              alt="Imagem Cadastro"
              className="mr-3"
              style={{ width: "150px", height: "150px" }}
            />
            <Card className="card-fixed-height flex-grow-1">
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
          </Row>
          <Row className="mb-4 d-flex align-items-center">
            <img
              src="/calendario.jpg"
              alt="Imagem Calendário"
              className="mr-3"
              style={{ width: "150px", height: "150px" }}
            />
            <Card className="card-fixed-height flex-grow-1">
              <Card.Body>
                <Card.Title>Calendário de Coleta</Card.Title>
                <Card.Text>
                  Veja e gerencie todas os dias de coleta feitos nas
                  Comunidades.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate("/calendario")}
                >
                  Ir para Calendário
                </Button>
              </Card.Body>
            </Card>
          </Row>
          <Row className="mb-4 d-flex align-items-center">
            <img
              src="/mapa.jpg"
              alt="Imagem 3"
              className="mr-3"
              style={{ width: "150px", height: "150px" }}
            />
            <Card className="card-fixed-height flex-grow-1">
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
          </Row>
        </Col>

        <Col md={8}>
          <div className="container-fluid1">
            <div className="row">
              <h3 className="text">
                <p className="text">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nosso objetivo é desenvolver um
                  sistema integrado que facilite a gestão de resíduos sólidos na
                  comunidade, promovendo a reciclagem e a correta destinação do
                  lixo. Queremos criar um impacto positivo no meio ambiente e na
                  qualidade de vida dos moradores.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vamos explorar alguns países que
                  são referências em gestão de resíduos sólidos. Esses exemplos
                  inspiradores mostram como abordagens inovadoras podem fazer a
                  diferença:
                  <li>
                   
                      Alemanha: Economia Circular e Coleta Seletiva Eficiente A
                      Alemanha é amplamente reconhecida por sua excelente gestão
                      de resíduos. O país adota uma abordagem abrangente, com
                      foco na minimização de resíduos destinados a aterros e na
                      maximização da reciclagem, compostagem e recuperação de
                      energia. Os cidadãos são incentivados a separar seus
                      resíduos em diferentes categorias, como papel, plástico,
                      vidro e orgânicos. A taxa de reciclagem na Alemanha é uma
                      das mais altas do mundo.
                    
                  </li>
                  <br></br>
                  <li>
                    
                      Suíça: Tecnologia Avançada e Reciclagem Eficiente A Suíça
                      investe em tecnologias avançadas de reciclagem. Possui
                      instalações modernas para processamento de materiais
                      recicláveis, transformando resíduos em matérias-primas
                      secundárias. O país tem metas ambiciosas para minimizar a
                      quantidade de resíduos destinados a aterros. Esses países
                      demonstram que a gestão eficiente de resíduos é possível e
                      essencial para um futuro mais sustentável. 🌿♻️
                    
                  </li>
                </p>
              </h3>
            </div>
          </div>
        </Col>
      </Row>

      <footer>
        <div className="footer-container">
          <div className="main-footer-subnav col-12 d-flex flex-column flex-md-row justify-content-between align-items-lg-center">
            <div
              className="col-10 col-md-5 col-lg-5 offset-1"
              style={{ color: "black" }}
            >
              <h4>Tem alguma dúvida?</h4>
              <ul className="list-unstyled">
                <li className="py-1">
                  <FontAwesomeIcon icon={faAddressCard} />
                  &nbsp;Rua Goiás 427 - Morada do Contorno
                </li>
                <li className="py-1">
                  <FontAwesomeIcon icon={faPhone} />
                  &nbsp;+55 (24) 99879-2952
                </li>
                <li className="py-1">
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;
                  <a
                    href="mailto:SistemaResiduos@hotmail.com"
                    style={{ color: "black" }}
                  >
                    <i className="far fa-envelope"></i>{" "}
                    SistemaResiduos@hotmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="col-10 col-md-5 col-lg-12 offset-1"
              style={{ color: "black" }}
            >
              <h5>
                <p className="copyright" style={{ textAlign: "left" }}>
                  © 2024 - Sistema de Gestão de Resíduos Sólidos para
                  Comunidades
                </p>
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
