import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { GetTipoResiduo } from "../../../../services/serviceTipoResiduo";
import "./clienteTipoResiduos.css";

const ClienteTipoResiduos = () => {
  const [tiposResiduos, setTiposResiduos] = useState([]);

  useEffect(() => {
    fetchTiposResiduos();
  }, []);

  const fetchTiposResiduos = async () => {
    try {
      const response = await GetTipoResiduo();
      console.log("Dados recebidos:", response.data);
      setTiposResiduos(response.data);
    } catch (error) {
      console.error("Erro ao buscar tipos de resíduos:", error);
    }
  };

  return (
    <Container>
      <h1 style={{ color: "black", textAlign: "center", margin: "20px 0" }}>Tipos de Resíduos</h1>
      <Row>
        {tiposResiduos.map((residuo) => (
          <Col key={residuo.tipoResiduoId} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={residuo.fotoResiduo} alt="Foto do Resíduo" />
              <Card.Body>
                <Card.Title>{residuo.resíduo}</Card.Title>                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClienteTipoResiduos;

// import React, { useState, useEffect } from "react";
// import { Container, Table, Button, Modal, Form } from "react-bootstrap";
// import {
//   GetTipoResiduo,
//   PostTipoResiduo,
//   PutTipoResiduo,
//   DeleteTipoResiduo,
// } from "../../../../services/serviceTipoResiduo";
// import "./ClienteTipoResiduos.css";

// const TipoResiduos = () => {
//   const [tiposResiduos, setTiposResiduos] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [currentResiduo, setCurrentResiduo] = useState({
//     tipoResiduoId: 0,
//     resíduo: "",
//     fotoResiduo: "",
//   });
//   const [updated, setUpdated] = useState(false);
//   const [textoBotao, setTextoBotao] = useState("Salvar");

//   useEffect(() => {
//     fetchTiposResiduos();
//   }, [updated]);

//   const fetchTiposResiduos = async () => {
//     try {
//       const response = await GetTipoResiduo();
//       console.log("Dados recebidos:", response.data);
//       setTiposResiduos(response.data);
//     } catch (error) {
//       console.error("Erro ao buscar tipos de resíduos:", error);
//     }
//   };

//   const handleShowModal = (
//     residuo = { tipoResiduoId: 0, resíduo: "", fotoResiduo: "" }
//   ) => {
//     setCurrentResiduo({
//       tipoResiduoId: residuo.tipoResiduoId || 0,
//       resíduo: residuo.resíduo || "",
//       fotoResiduo: residuo.fotoResiduo || "",
//     });
//     setShowModal(true);
//     setTextoBotao(residuo.tipoResiduoId !== 0 ? "Alterar" : "Salvar");
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setCurrentResiduo({ tipoResiduoId: 0, resíduo: "", fotoResiduo: "" });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentResiduo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("tipoResiduoId", currentResiduo.tipoResiduoId);
//       formData.append("resíduo", currentResiduo.resíduo);
//       formData.append("fotoResiduo", currentResiduo.fotoResiduo);

//       if (currentResiduo.tipoResiduoId === 0) {
//         await PostTipoResiduo(formData);
//       } else {
//         await PutTipoResiduo(formData);
//       }

//       setUpdated((prev) => !prev); // Atualiza o estado após a operação
//       handleCloseModal(); // Fecha o modal após a operação
//     } catch (error) {
//       console.error("Erro ao salvar tipo de resíduo:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await DeleteTipoResiduo(id);
//       setUpdated((prev) => !prev);
//     } catch (error) {
//       console.error("Erro ao excluir tipo de resíduo:", error);
//     }
//   };

//   return (
//     <Container>
//         <br></br>
//         <br></br>
//       <h1 style={{color: "black", textAlign: "center"}}>Tipos de Resíduos</h1>
//       <Button variant="success" onClick={() => handleShowModal()}>
//         Adicionar Tipo de Resíduo
//       </Button>
//       <Table  bordered hover className="mt-3">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Resíduo</th>
//             <th style={{ width: "200px" }}>Foto</th>
//             <th style={{ textAlign: "center" }}>Ações</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tiposResiduos.map((residuo) => (
//             <tr key={residuo.tipoResiduoId}>
//               <td>{residuo.tipoResiduoId}</td>
//               <td>{residuo.resíduo}</td>
//               <td style={{ width: "200px" }}>
//                 {residuo.fotoResiduo && (
//                   <img
//                     src={residuo.fotoResiduo} // Usando a URL diretamente
//                     alt="Foto do Resíduo"
//                     style={{ width: "100px", height: "100px" }}
//                   />
//                 )}
//               </td>
//               <td
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <Button
//                   variant="primary"
//                   onClick={() => handleShowModal(residuo)}
//                 >
//                   Editar
//                 </Button>
//                 <Button
//                   variant="danger"
//                   onClick={() => handleDelete(residuo.tipoResiduoId)}
//                 >
//                   Excluir
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {currentResiduo.tipoResiduoId === 0
//               ? "Adicionar Tipo de Resíduo"
//               : "Editar Tipo de Resíduo"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="tipoResiduoId">
//               <Form.Label>Id do Resíduo</Form.Label>
//               <Form.Control
//                 type="Number"
//                 name="Id"
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formResíduo">
//               <Form.Label>Resíduo</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="resíduo"
//                 value={currentResiduo.resíduo}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formFotoResiduo">
//               <Form.Label>URL da Foto do Resíduo</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="fotoResiduo"
//                 value={currentResiduo.fotoResiduo}
//                 onChange={handleChange}
//                 required // Campo obrigatório
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancelar
//           </Button>
//           <Button variant="success" onClick={handleSave}>
//             {textoBotao}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default TipoResiduos;
