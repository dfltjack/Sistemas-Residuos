import React, { useEffect, useRef, useState } from "react";
import {
  GetPontoColeta,
  DeletePontoColeta,
  PutPontoColeta,
  PostPontoColeta,
} from "../../../services/servicePontoColeta";
import "./mapa.css";
import Table from "../../commons/table/table";
import axios from "axios";

const Mapa = () => {
  const mapRef = useRef(null);
  const [alterar, setAlterar] = useState(false);
  const [pontocoleta, setPontoCOleta] = useState({
    pontoColetaId: 0,
    latitude: "",
    longitude: "",
    tipoResiduoId:0,
  });
  const [listaMap, setListaMap] = useState([]);
  const [salvou, setSalvou] = useState(false);
  const [habilitar, setHabilitar] = useState(false);
  const [textoBotao, setTextoBotao] = useState("Salvar");

  const columns = [
    { name: "latitude", columnType: "texto" },
    { name: "longitude", columnType: "texto" },
    { name: "Ação", columnType: "botao" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetPontoColeta();
        console.log("Dados carregados:", response.data);
        setListaMap(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPontoCOleta((prevState) => ({
      ...prevState,
      [id.toLowerCase()]: value,
    }));
  };

  const handleSalvar = async () => {
    try {
      console.log("Dados a serem enviados:", pontocoleta);
      let response;
      if (alterar) {
        response = await PutPontoColeta(pontocoleta);
      } else {
        response = await PostPontoColeta(pontocoleta);
      }
      console.log("Resposta do Servidor:", response);
      setSalvou(true);
    } catch (error) {
      console.error("Erro ao salvar ponto de coleta:", error);
    }
  };

  // const dataSource = listaMap.map((item, index) => ({
    //   latitude: item.lat || "N/A",
    //   longitude: item.long || "N/A",
    //   acao: {
    //     botoes: [
    //       {
    //         botao: (
    //           <button
    //             onClick={() => CarregarPontoColeta(item)}
    //             style={{ marginLeft: "5px" }}
    //             className="btn-sm btn-primary"
    //             type="button"
    //           >
    //             Editar
    //           </button>
    //         ),
    //       },
    //       {
    //         botao: (
    //           <button
    //             onClick={() => ExcluirPontoDeColeta(item.pontoColetaId)}
    //             className="btn btn-sm btn-danger"
    //             type="button"
    //           >
    //             Excluir
    //           </button>
    //         ),
    //       },
    //     ],
    //   },
    // }));
    
    // const CarregarPontoColeta = (pontocoleta) => {
    //   setPontoCOleta({
    //     pontoColetaId: pontocoleta.pontoColetaId,
    //     latitude: pontocoleta.lat,
    //     longitude: pontocoleta.long,
    //     tipoResiduoId: pontocoleta.tipoResiduoId,
    //   });
    //   setAlterar(true);
    //   setTextoBotao("Atualizar");
    // };

  const dataSource = Array.isArray(listaMap) ? listaMap.map((item) => {
      console.log("Item no DataSource:", item);
      return [
        { name: item.lat || "N/A" },
        { name: item.long || "N/A" },
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
                  onClick={() => ExcluirPontoDeColeta(item.pontoColetaId)}
                  className="btn btn-sm btn-danger"
                  type="button"
                >
                  Excluir
                </button>
              ),
            },
          ],
        },
      ];
    }) : [];

  const CarregarPontoColeta = (pontocoleta) => {
    setPontoCOleta({
      pontoColetaId: pontocoleta.pontoColetaId,
      latitude: pontocoleta.lat.toString(),
      longitude: pontocoleta.long.toString(),
      tipoResiduoId: pontocoleta.tipoResiduoId,
    });
    setAlterar(true);
    setTextoBotao("Atualizar");
  };

  const ExcluirPontoDeColeta = (id) => {
    DeletePontoColeta(id).then((res) => {
      console.log(res.data);
    });
    setSalvou(true);
  };  

  const NovoCalendario = () => {
    setPontoCOleta({ pontoColetaId: 0, latitude: "", longitude: "", tipoResiduoId: 0 });
    setTextoBotao("Salvar");
    setHabilitar(false);
    setAlterar(false);
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
            pontoColetaId: item.pontoColetaId,
            lat: parseFloat(item.latitude),
            long: parseFloat(item.longitude),
            tipoResiduoId: item.tipoResiduoId,
          }));
          console.log("Dados processados:", dados);
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    const handler = (event) => {
      console.log("Event:", event.type);
    };

    document.addEventListener("touchstart", handler, { passive: true });
    document.addEventListener("touchmove", handler, { passive: true });

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

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("touchstart", handler);
      document.removeEventListener("touchmove", handler);
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

      <div className="table-container1">
        <h2 style={{ textAlign: "center" }}>Cadastro de pontos de Coleta</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "10px" }} className="col-md">
            <div className="col-md">
              <label>Latitude:</label>
              <input
                readOnly={habilitar}
                type="text"
                id="latitude"
                step="1"
                value={pontocoleta.latitude || ""}
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
                id="longitude"
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
          key={dataSource.length}
          dados={dataSource}
          columns={columns}
          className="table table-striped"
        />
      </div>
    </div>
  );
};

export default Mapa;
