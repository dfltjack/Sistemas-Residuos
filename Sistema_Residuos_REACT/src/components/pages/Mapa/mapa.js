import React, { useEffect, useRef } from 'react';
import './mapa.css'; 

const Mapa = () => {
    const mapRef = useRef(null);    

    useEffect(() => {
        // Load the Google Maps API script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCislW3KYCQQgQJzCTcrB-SMfIBQ8f0Xqk&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Coordenadas de Resende, RJ
            const resendeCoords = { lat: -22.4707, lng: -44.4500 };

            // Inicializa o mapa focado em Resende, RJ
            const map = new window.google.maps.Map(mapRef.current, {
                center: resendeCoords,
                zoom: 16, // Ajuste o nível de zoom conforme necessário
            });

            // Pontos de coleta de resíduos
            const pontosDeColeta = [
                { lat: -22.4710, lng: -44.4510, title: 'Ponto de Coleta 1' },
                { lat: -22.4720, lng: -44.4520, title: 'Ponto de Coleta 2' },
                { lat: -22.4730, lng: -44.4530, title: 'Ponto de Coleta 3' },
                // Adicione mais pontos conforme necessário
            ];

            // Adiciona marcadores para cada ponto de coleta
            pontosDeColeta.forEach(ponto => {
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