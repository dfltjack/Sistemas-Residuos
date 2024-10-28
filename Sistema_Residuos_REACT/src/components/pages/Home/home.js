import React, { useEffect, useState } from "react";
import { Container, Row, Button, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [lastScrollTop, setLastScrollTop] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer-container");
      if (!footer) {
        console.error("Elemento .footer-container não encontrado");
        return;
      }

      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        // Rolando para baixo
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
          footer.classList.add("visible");
        }
      } else {
        // Rolando para cima
        footer.classList.remove("visible");
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div className="d-flex">
        <div className="sidebar bg-success text-white">
          <h3 className="p-3">Menu</h3>
          <div className="card bg-light mb-3">
            <img
              src="/assets/cadastroCasa.png"
              alt="Imagem Cadastro"
              className="card-img-top"
              style={{
                width: "10%%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Cadastro de Residências e Estabelecimentos</h5>
              <p className="card-text">
                Adicione, edite e visualize informações das Residências e Estabelecimentos.
              </p>
              <Button variant="primary" onClick={() => navigate("/cadastro")}>
                Ir para Cadastro
              </Button>
            </div>
          </div>

          <div className="card bg-light mb-3">
            <img
              src="/assets/calendario.jpg"
              alt="Imagem Calendário"
              className="card-img-top"
              style={{
                width: "",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Calendário de Coleta</h5>
              <p className="card-text">
                Veja e gerencie todas os dias de coleta feitos nas Comunidades.
              </p>
              <Button variant="primary" onClick={() => navigate("/calendario")}>
                Ir para Calendário
              </Button>
            </div>
          </div>

          <div className="card bg-light mb-3">
            <img
              src="/assets/mapa.jpg"
              alt="Imagem Mapa"
              className="card-img-top"
              style={{
                width: "30%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Mapeamento de Pontos de Coleta</h5>
              <p className="card-text">
                Mostrar no mapa os pontos de coleta seletiva e ecopontos mais próximos.
              </p>
              <Button variant="primary" onClick={() => navigate("/mapa")}>
                Ir para Mapeamento
              </Button>
            </div>
          </div>
        </div>
        <div className="content flex-grow-1 p-3">
          <Container>
            <h1 className="text-success">Bem-vindo ao Sistema de Gestão de Resíduos Sólidos</h1>
            <p className="text-success">
              Nosso objetivo é ajudar comunidades a gerenciar seus resíduos de forma eficiente e sustentável.
            </p>
          </Container>
        </div>
      </div>
      <div>
      <Row>
        <Col md={8}>
             <div className="container-fluid1">
               <div className="row">
                 <h3 className="text">
                 <p className="text">
                   Nosso objetivo é desenvolver um sistema integrado que facilite
                   a gestão de resíduos sólidos na comunidade, promovendo a
                   reciclagem e a correta destinação do lixo. Queremos criar um
                   impacto positivo no meio ambiente e na qualidade de vida dos
                   moradores.
                   <br />
                   <br />
                   Vamos explorar alguns países que são referências em gestão de
                   resíduos sólidos. Esses exemplos inspiradores mostram como
                   abordagens inovadoras podem fazer a diferença:
                   <br />
                   <br />
                   <li>
                     <strong>Alemanha:</strong> Economia Circular e Coleta Seletiva Eficiente. A
                     Alemanha é amplamente reconhecida por sua excelente gestão
                     de resíduos. O país adota uma abordagem abrangente, com foco
                     na minimização de resíduos destinados a aterros e na
                     maximização da reciclagem, compostagem e recuperação de
                     energia. Os cidadãos são incentivados a separar seus
                     resíduos em diferentes categorias, como papel, plástico,
                     vidro e orgânicos. A taxa de reciclagem na Alemanha é uma
                     das mais altas do mundo.
                   </li>
                   <br />
                   <li>
                     <strong>Suíça:</strong> Tecnologia Avançada e Reciclagem Eficiente. A Suíça
                     investe em tecnologias avançadas de reciclagem. Possui
                     instalações modernas para processamento de materiais
                     recicláveis, transformando resíduos em matérias-primas
                     secundárias. O país tem metas ambiciosas para minimizar a
                     quantidade de resíduos destinados a aterros. Esses países
                     demonstram que a gestão eficiente de resíduos é possível e
                     essencial para um futuro mais sustentável. 🌿♻️
                   </li>
                   <br />
                   <li>
                     <strong>Japão:</strong> Incineração e Produção de Energia. O Japão é um dos
                     líderes mundiais em incineração de resíduos para produção de
                     energia. Com espaço limitado para aterros, o país investiu
                     em tecnologias de incineração que não apenas reduzem o
                     volume de resíduos, mas também geram eletricidade. As
                     instalações de incineração no Japão são altamente eficientes
                     e possuem sistemas avançados de controle de poluição.
                   </li>
                   <br />
                   <li>
                     <strong>Suécia:</strong> Energia a partir de Resíduos. A Suécia é conhecida
                     por sua abordagem inovadora de transformar resíduos em
                     energia. O país possui um sistema eficiente de coleta
                     seletiva e reciclagem, e os resíduos que não podem ser
                     reciclados são incinerados para gerar calor e eletricidade.
                     A Suécia importa resíduos de outros países para alimentar
                     suas usinas de incineração, demonstrando a eficácia de seu
                     sistema.
                   </li>
                   <br />
                   <li>
                     <strong>Canadá:</strong> Programas de Compostagem e Reciclagem. O Canadá tem
                     implementado programas abrangentes de compostagem e
                     reciclagem em várias províncias. A compostagem de resíduos
                     orgânicos é incentivada, e muitos municípios oferecem
                     serviços de coleta de compostagem. Além disso, o Canadá
                     possui programas de reciclagem bem estabelecidos para papel,
                     plástico, vidro e metais.
                   </li>
                   <br />
                   <li>
                     <strong>Brasil:</strong> Desafios e Oportunidades. O Brasil enfrenta
                     desafios significativos na gestão de resíduos sólidos, mas
                     também possui grandes oportunidades para melhorar. A
                     implementação de programas de coleta seletiva em larga
                     escala, o investimento em tecnologias de reciclagem e
                     compostagem, e a promoção da educação ambiental são passos
                     cruciais. Além disso, o Brasil pode se beneficiar da
                     experiência de outros países, adaptando soluções bem-sucedidas
                     às suas próprias necessidades e contextos. Com um esforço
                     conjunto entre governo, empresas e sociedade, o Brasil pode
                     avançar significativamente na gestão sustentável de resíduos
                     sólidos.
                   </li>
                   <br />
                   <strong>Conclusão:</strong> A gestão eficiente de resíduos sólidos é essencial
                   para a sustentabilidade ambiental e a qualidade de vida nas
                   comunidades. Países como Alemanha, Suíça, Japão, Suécia e
                   Canadá oferecem exemplos inspiradores de como práticas
                   inovadoras podem transformar a gestão de resíduos. O Brasil,
                   com seus desafios únicos, tem a oportunidade de aprender com
                   essas experiências e implementar soluções adaptadas às suas
                   necessidades. Com um compromisso coletivo, é possível criar um
                   futuro mais sustentável e saudável para todos.
                 </p>
                 </h3>
               </div>
             </div>
             <div style={{height: "60px"}}></div>
           </Col>
           
      </Row>
      </div>    
      <footer>
          <div className="footer-container">
            <div className="main-footer-subnav col-12 d-flex flex-column flex-md-row justify-content-between align-items-lg-center">
              <div className="col-10 col-md-5 col-lg-5 offset-1" style={{ color: "black" }}>
                <h4>Tem alguma dúvida?</h4>
                <ul className="list-unstyled">
                  <li className="py-1">
                    <FontAwesomeIcon icon={faAddressCard} />
                    &nbsp;Rua Baker, 221B - Londres
                  </li>
                  <li className="py-1">
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp;+555 (555) 5555-4444
                  </li>
                  <li className="py-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;
                    <a href="mailto:SistemaResiduos@hotmail.com" style={{ color: "black" }}>
                      SistemaResiduos@hotmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-10 col-md-5 col-lg-12 offset-1" style={{ color: "black" }}>
                <h5>
                  <p className="copyright" style={{ textAlign: "left" }}>
                    © 2024 - Sistema de Gestão de Resíduos Sólidos para Comunidades
                  </p>
                </h5>
              </div>
            </div>
          </div>
        </footer>     
    </>
  );
};

export default Home;