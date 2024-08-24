import React, { useEffect, useRef } from 'react';

function Mapa() {
    const mapRef = useRef(null);

    useEffect(() => {
        // Load the Google Maps API script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Initialize the map
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 37.7749, lng: -122.4194 }, // Replace with your desired latitude and longitude values
                zoom: 10, // Replace with your desired zoom level value
            });

            // Add markers for points of interest
            const marker = new window.google.maps.Marker({
                position: { lat: 37.7749, lng: -122.4194 }, // Replace with your desired latitude and longitude values
                map: map,
                title: 'Point of Interest',
            });
        };

        return () => {
            // Clean up the Google Maps API script
            document.head.removeChild(script);
        };
    }, []);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
}

export default Mapa;