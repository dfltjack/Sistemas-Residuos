import React, {useState, useEffect} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AdminMapa from "../Admin/Mapa/AdminMapa";
import ClienteMapa from "../Cliente/Mapa/ClienteMapa";
import "./mapa.css"

const Mapa = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const obterUsuario = async () => {
          try {
            const token = localStorage.getItem("token"); // Obtenha o token JWT do localStorage
            if (!token) {
              throw new Error("Token não encontrado");
            }
    
            const decodedToken = jwtDecode(token); // Decodifique o token JWT
            console.log("Token decodificado:", decodedToken); // Verifique o conteúdo do token decodificado
    
            const userEmail = decodedToken.unique_name; // Extraia o email do usuário do token decodificado
            if (!userEmail) {
              throw new Error("Email do usuário não encontrado no token");
            }
    
            const encodedEmail = encodeURIComponent(userEmail); // Codifique o email
            const response = await axios.get(`https://localhost:5000/api/User/email/${encodedEmail}`);
            const user = response.data;
            setIsAdmin(user.role === "admin"); // Verifica se o usuário tem a role 'admin'
            
          } catch (error) {
            console.error("Erro ao obter informações do usuário:", error);
          }
        };
    
        obterUsuario();
      }, []);

      return (
        <div>
            {isAdmin ? <AdminMapa/> : <ClienteMapa/>}
        </div>
      );
};

export default Mapa;