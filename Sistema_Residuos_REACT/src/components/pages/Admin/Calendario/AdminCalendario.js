import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  DeleteCalendario,
  GetCalendario,
  PostCalendario,
  PutCalendario,
} from "../../../../services/serviceCalendario";
import "./calendario.css";
import "./../../Admin/Calendario/calendario.css";
import Table from "../../../commons/table/table";
import axios from "axios";
import { styled } from "@mui/material";

const AdminCalendario = () => {
  const [alterar, setAlterar] = useState(false);
  const [textoBotao, setTextoBotao] = useState("Salvar");
  const [listaCalendario, setListaCalendario] = useState([]);
  const [calendario, setCalendario] = useState({});
  const [salvou, setSalvou] = useState(false);
  const [habilitar, setHabilitar] = useState(true);
  const [coletaDays, setColetaDays] = useState([]);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    // Desativa o scroll da página
    document.body.style.overflow = "hidden";

    // Limpa o estilo ao desmontar o componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const columns = [
    { name: "Horario", columnType: "timeonly" },
    { name: "Dia da Semana", columnType: "texto" },
    { name: "Ação", columnType: "botao" },
  ];

  const dataSource =
  listaCalendario &&
  listaCalendario.map((item) => [
    { name: item.horario },
    { name: item.diaSemana },
    {
      botoes: [
        {
          botao: (
            <div style={{ display: "flex"}}>
              <button
                onClick={() => CarregarCalendario(item)}
                className="btn-sm btn-primary"
                type="button"
                style={{ margin: "auto"}}
              >
                Editar
              </button>
              <button
                onClick={() => ExcluirCalendario(item.calendarioColetaId)}
                className="btn btn-sm btn-danger"
                type="button"
              >
                Excluir
              </button>
            </div>
          ),
        },
      ],
    },
  ]);

  const handleChange = (event, value) => {
    setCalendario({
      ...calendario,
      [event.target.id]: value,
    });
  };

  const handleSalvar = () => {
    const saveOrUpdate = alterar ? PutCalendario : PostCalendario;

    saveOrUpdate(calendario)
      .then((res) => {
        setSalvou(true);
        setCalendario({});
        setAlterar(false); // Reset the 'alterar' state after saving
      })
      .catch((err) =>
        console.error(
          `Erro ao ${alterar ? "alterar" : "salvar"} o calendário:`,
          err
        )
      );
  };

  const NovoCalendario = () => {
    setCalendario({});
    setHabilitar(false);
    setAlterar(false);
  };

  const CarregarCalendario = (calendario) => {
    setCalendario(calendario);
    setAlterar(true);
  };

  const ExcluirCalendario = (id) => {
    DeleteCalendario(id).then((res) => {
      console.log(res.data);
    });
    setSalvou(true);
  };

  useEffect(() => {
    const verificarAPI = async () => {
      try {
        const response = await axios.get(
          "https://localhost:5000/api/Calendario"
        );
        console.log("API funcionando:", response.data);
      } catch (error) {
        console.error("Erro ao acessar API:", error);
      }
    };

    verificarAPI();
    GetCalendario().then((res) => {
      setListaCalendario(res.data);
      const days = res.data.map((item) => ({
        diaSemana: item.diaSemana,
        horario: item.horario,
      }));
      setColetaDays(days);
    });
    setSalvou(false);
  }, [salvou]);

  useEffect(() => {
    setTextoBotao(alterar ? "Alterar" : "Salvar");
  }, [alterar]);

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
    <div className="calendar-page-background-Admin">
      {" "}
      {/* Classe para o fundo da página */}
      <div className="calendar-table-container-Admin">
        {" "}
        {/* Novo contêiner flex */}
        <div className="calendar-container-Admin">
          <h1 style={{ textAlign: "center" }}>Calendário de Coleta</h1>
          <Calendar
            onChange={setValue}
            value={value}
            tileClassName={tileClassName}
            tileContent={tileContent}
          />
        </div>
        <div className="table-container">
          {" "}
          {/* Tabela de cadastro */}
          <h2 style={{ textAlign: "center" }}>Cadastro de dias de Coleta</h2>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "10px" }} className="col-md">
              <div className="col-md">
                <label>Horário:</label>
                <input
                  readOnly={habilitar}
                  type="time"
                  id="horario"
                  step="1"
                  value={calendario.horario || ""}
                  onChange={(e) => {
                    handleChange(e, e.target.value);
                  }}
                  className="form-control"
                />
              </div>
            </div>
            <div style={{ padding: "10px" }} className="col-md">
              <div className="col-md">
                <label>Dia Da Semana: </label>
                <input
                  readOnly={habilitar}
                  type="text"
                  id="diaSemana"
                  value={calendario.diaSemana || ""}
                  onChange={(e) => {
                    handleChange(e, e.target.value);
                  }}
                  className="form-control"
                />
              </div>
            </div>

            <button
              onClick={handleSalvar}
              type="button1"
              className="btn-success"
            >
              {textoBotao}
            </button>
            <button
              onClick={NovoCalendario}
              type="button"
              style={{ marginLeft: "5px", width: "9%", display: "block" }}
              className="btn-primary"
            >
              Novo
            </button>
          </div>
          <Table
            dados={dataSource}
            columns={columns}
            className="table table-striped"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCalendario;
