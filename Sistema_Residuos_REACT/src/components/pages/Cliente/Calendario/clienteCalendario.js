import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; // Importa a função jwtDecode corretamente
import "./calendarioCliente.css";

const ClienteCalendario = () => {
  const [coletaDays, setColetaDays] = useState([]);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    // Desativa o scroll da página
    document.body.style.overflow = 'hidden';

    // Limpa o estilo ao desmontar o componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const verificarAPI = async () => {
      try {
        const response = await axios.get(
          "https://localhost:5000/api/Calendario"
        );
        console.log("API funcionando:", response.data);
        const days = response.data.map((item) => ({
          diaSemana: item.diaSemana,
          horario: item.horario,
        }));
        setColetaDays(days);
      } catch (error) {
        console.error("Erro ao acessar API:", error);
      }
    };

    verificarAPI();
  }, []);

  const isColetaDay = (date) => {
    const diaSemana = date
      .toLocaleDateString("pt-BR", { weekday: "long" })
      .toLowerCase();
    return coletaDays.find((day) => day.diaSemana.toLowerCase() === diaSemana);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const diaSemana = date
        .toLocaleDateString("pt-BR", { weekday: "long" })
        .toLowerCase();
      switch (diaSemana) {
        case "segunda-feira":
          return "segunda-feira";
        case "terça-feira":
          return "terça-feira";
        case "quarta-feira":
          return "quarta-feira";
        case "quinta-feira":
          return "quinta-feira";
        case "sexta-feira":
          return "sexta-feira";
        case "sábado":
          return "sabado";
        case "domingo":
          return "domingo";
        default:
          return null;
      }
    }
    return null;
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const coleta = isColetaDay(date);
      if (coleta) {
        return (
          <div className="coleta-content">
            Coleta a partir de: {coleta.horario}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <>
    <br></br>
    
    <div className="calendar-page-background cliente">
      <div className="calendar-table-container cliente">
        <div className="calendar-container">
          <h1 style={{ textAlign: "center" }}>Calendário de Coleta</h1>
          <Calendar
            onChange={setValue}
            value={value}
            tileClassName={tileClassName}
            tileContent={tileContent}
          />
        </div>
      </div>
    </div>
    </>    
  );
};

export default ClienteCalendario;