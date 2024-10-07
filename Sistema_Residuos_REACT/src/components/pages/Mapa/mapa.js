import React, { useEffect, useRef, useState } from "react";
import {
  GetPontoColeta,
  DeletePontoColeta,
} from "../../../services/servicePontoColeta";
import "./mapa.css";
import Table from "../../commons/table/table";
import axios from "axios";

const Mapa = () => {
  const mapRef = useRef(null);
  const [alterar, setAlterar] = useState(false);
  const [pontocoleta, setPontoCOleta] = useState({ Latitude: "", longitude: "" });
  const [listaMap, setListaMap] = useState([]);
  const [salvou, setSalvou] = useState(false);
  const [habilitar, setHabilitar] = useState(false);
  const [textoBotao, setTextoBotao] = useState("Salvar");

  const columns = [
    { name: "Latitude", columnType: "decimal" },
    { name: "Longitude", columnType: "decimal" },
    { name: "Ação", columnType: "botao" },
  ];

  const dataSource =
    listaMap &&
    listaMap.map((item) => [
      { name: item.lat },
      { name: item.long },
      {
        botoes: [
          {
            botao: (
              <button
                onClick={() => CarregarPontoColeta(item)}
                style={{ marginLeft: "5px" }}
                className="btn-sm btn-primary"
                type="button"
              >
                Editar
              </button>
            ),
          },
          {
            botao: (
              <button
                onClick={() => ExluirPontoDeColeta(item.calendarioColetaId)}
                className="btn btn-sm btn-danger"
                type="button"
              >
                Excluir
              </button>
            ),
          },
        ],
      },
    ]);

  const ExluirPontoDeColeta = (id) => {
    DeletePontoColeta(id).then((res) => {
      console.log(res.data);
    });
    setSalvou(true);
  };

  const CarregarPontoColeta = (pontocoleta) => {
    setPontoCOleta(pontocoleta);
    setAlterar(true);
  };

  const handleChange = (e, value) => {
    const { id } = e.target;
    setPontoCOleta((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSalvar = () => {
    // Lógica para salvar o ponto de coleta
    setSalvou(true);
  };

  const NovoCalendario = () => {
    setPontoCOleta({ Latitude: "", longitude: "" });
    setTextoBotao("Salvar");
    setHabilitar(false);
  };

  useEffect(() => {
    const verificarAPI = async () => {
      try {
        const response = await axios.get(
          "https://localhost:5000/api/PontosColeta"
        );
        console.log("API funcionando:", response.data);
      } catch (error) {
        console.error("Erro ao acessar API:", error);
      }
    };

    verificarAPI();
    GetPontoColeta()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const dados = res.data.map((item) => ({
            lat: item.Latitude,
            long: item.longitude,
          }));
          setListaMap(dados);
        } else {
          console.error("Dados Inválidos recebidos da API:", res.data);
        }
      })
      .catch((error) => {
        console.error("Erro ao obter pontos de coleta", error);
      });

    setSalvou(false);
  }, [salvou]);

  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFQ9L7_Bi3dkfVy27QzIpA4bzODNT-6rU&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const pontosDeColeta =
        listaMap &&
        listaMap.map((name) => ({
          lat: name.lat,
          lng: name.long,
        }));

      // Coordenadas de Resende, RJ
      const resendeCoords = { lat: -22.4707, lng: -44.45 };

      // Inicializa o mapa focado em Resende, RJ
      const map = new window.google.maps.Map(mapRef.current, {
        center: resendeCoords,
        zoom: 16, // Ajuste o nível de zoom conforme necessário
      });

      // Adiciona marcadores para cada ponto de coleta
      pontosDeColeta.forEach((ponto) => {
        const marker = new window.google.maps.Marker({
          position: { lat: ponto.lat, lng: ponto.lng },
          map: map,
          title: ponto.title,
        });

        // Adiciona evento de clique ao marcador
        marker.addListener("click", () => {
          const googleMapsUrl = `https://www.google.com/maps?q=${ponto.lat},${ponto.lng}&z=18`;
          window.open(googleMapsUrl, "_blank");
        });
      });
    };
  }, [listaMap]);

  return (
    <div className="containermap">
      <div className="legend">
        <h2>Como Utilizar o Mapa</h2>
        <ul>
          <li>Clique em um marcador para ver a localização no Google Maps.</li>
          <li>Use o zoom para aproximar ou afastar o mapa.</li>
          <li>Arraste o mapa para navegar pela área.</li>
        </ul>
        <p style={{ textAlign: "justify" }}>
          Atualmente detemos poucos pontos de coleta de resíduos, ao todo são 3
          pontos que estão ajudando a cidade a desempenhar um papel melhor na
          sociedade, coletando, reciclando e fazendo bom uso dos materiais.
        </p>
      </div>
      <div ref={mapRef} className="map-container">
        {/* O mapa será renderizado aqui */}
      </div>

      <div className="table-container">
        <h2 style={{ textAlign: "center" }}>Cadastro de pontos de Coleta</h2>
        <div style={{ display: "flex" }}>
          <div style={{ padding: "10px" }} className="col-md">
            <div className="col-md">
              <label>Latitude:</label>
              <input
                readOnly={habilitar}
                type="text"
                id="Latitude"
                step="1"
                value={pontocoleta.Latitude || ""}
                onChange={(e) => {
                  handleChange(e, e.target.value);
                }}
                className="form-control"
              />
            </div>
          </div>
          <div style={{ padding: "10px" }} className="col-md">
            <div className="col-md">
              <label>Longitude: </label>
              <input
                readOnly={habilitar}
                type="text"
                id="Longitude"
                value={pontocoleta.longitude || ""}
                onChange={(e) => {
                  handleChange(e, e.target.value);
                }}
                className="form-control"
              />
            </div>
          </div>

          <button onClick={handleSalvar} type="button" className="btn-success">
            {textoBotao}
          </button>
          <button
            onClick={NovoCalendario}
            type="button"
            style={{ marginLeft: "5px" }}
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
  );
};

export default Mapa;