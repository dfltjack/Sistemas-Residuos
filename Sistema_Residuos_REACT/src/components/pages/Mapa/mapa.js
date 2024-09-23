import React, { useEffect, useRef, useState } from 'react';
import {GetPontoColeta} from "../../../services/servicePontoColeta"
import './mapa.css'; 
import axios from 'axios';

const Mapa = () => {
    const mapRef = useRef(null);    
    const [pontocoleta, setPontoCOleta] = useState([]);
    const [listaMap, setListaMap] = useState([]);
    const [salvou, setSalvou] = useState(false);

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
        GetPontoColeta().then((res) => {
          setListaMap(res.data);
          const dados = res.data.map((item) => ({
            lat: item.latitude,
            lng: item.longitude,
          }));
          setListaMap(dados);
        });
        setSalvou(false);
    }, [salvou]);

    useEffect(() => {
        // Load the Google Maps API script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        script.onload = () => {

            GetPontoColeta().then((response) => {
                setPontoCOleta(response.data);
            }).catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

            const columns = [
                { name: "Latitude", columnType: "decimal" },
                { name: "Longitude", columnType: "decimal" },
                { name: "Ação", columnType: "botao" },
            ];    
            
            const pontoColeta = listaMap && listaMap.data.map(name => ({
                lat: name.latitude,
                lng: name.longitude
            }));

            // Coordenadas de Resende, RJ
            const resendeCoords = { lat: -22.4707, lng: -44.4500 };

            // Inicializa o mapa focado em Resende, RJ
            const map = new window.google.maps.Map(mapRef.current, {
                center: resendeCoords,
                zoom: 16, // Ajuste o nível de zoom conforme necessário
            });

            // Pontos de coleta de resíduos
            // const pontosDeColeta = [
            //     { lat: -22.4710, lng: -44.4510, title: 'Ponto de Coleta 1' },
            //     { lat: -22.4720, lng: -44.4520, title: 'Ponto de Coleta 2' },
            //     { lat: -22.4730, lng: -44.4530, title: 'Ponto de Coleta 3' },
            //     // Adicione mais pontos conforme necessário
            // ];
            
            // Adiciona marcadores para cada ponto de coleta
            pontoColeta.forEach(ponto => {
                const marker = new window.google.maps.Marker({
                    position: { lat: ponto.lat, lng: ponto.lng },
                    map: map,
                    title: ponto.title,
                });

                // Adiciona evento de clique ao marcador
                marker.addListener('click', () => {
                    const googleMapsUrl = `https://www.google.com/maps?q=${ponto.lat},${ponto.lng}&z=18`;
                    window.open(googleMapsUrl, '_blank');
                });
            });
        };
    }, []);

    return (
        <div className="containermap">
            <div className="legend">
                <h2>Como Utilizar o Mapa</h2>
                <ul>
                    <li>Clique em um marcador para ver a localização no Google Maps.</li>
                    <li>Use o zoom para aproximar ou afastar o mapa.</li>
                    <li>Arraste o mapa para navegar pela área.</li>
                </ul>
                <p style={{textAlign: 'justify'}}> 
                    Atualmente detemos poucos pontos de coleta de resíduos, ao todo são 3 pontos que estão ajudando a cidade a desempenhar um papel melhor na sociedade, coletando, reciclando e fazendo bom uso dos materiais.
                </p>
            </div>
            <div ref={mapRef} className="map-container">
                {/* O mapa será renderizado aqui */}
            </div>
        </div>
    );
}

export default Mapa;
