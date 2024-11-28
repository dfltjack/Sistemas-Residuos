import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Dashboard() {
  const userName = localStorage.getItem("userName"); // Recupera o nome do usuário
  const userRole = localStorage.getItem("role");
  console.log(localStorage.getItem("userName")); // Deve mostrar o nome do usuário
  console.log("UserName:", userName);
  console.log("role:", userRole);

  return (
    <Container className="mt-4">
      <h1>Bem-vindo, {userName || "Usuário"}!</h1>{" "}
      {/* Exibe 'Usuário' se userName for undefined */}
      {/* Outros conteúdos da página */}
      <div>
        {userRole === "admin" ? (
          <Button onClick={"handleAdminAction"}>Ação de Admin</Button>
        ) : (
          <p>Bem-vindo, você tem permissão de cliente!</p>
        )}
      </div>
    </Container>
  );
}
