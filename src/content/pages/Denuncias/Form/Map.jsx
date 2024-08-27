import React, { useState, useEffect } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';

const MapComponent = ({ onMarkerSet }) => {
    const [markerPosition, setMarkerPosition] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setMarkerPosition({ lat: latitude, lng: longitude });
                },
                (err) => {
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                    setMarkerPosition({ lat: -3.968, lng: -80.053 });
                },
                {
                    timeout: 5000,
                }
            );
        }
    }, []);

    const handleMapClick = ({ latLng, event, pixel }) => {
        const [lat, lng] = latLng;
        setMarkerPosition({ lat, lng });
        onMarkerSet({ lat, lng });
    };

    return (
        <Map height={400} defaultCenter={markerPosition || [-3.968, -80.053]} defaultZoom={11} onClick={handleMapClick}>
            {markerPosition && (
                <Marker width={50} anchor={[markerPosition.lat, markerPosition.lng]} draggable={true}
                        onDragEnd={(event) => {
                            const { lat, lng } = event.latLng;
                            setMarkerPosition({ lat, lng });
                            onMarkerSet({ lat, lng });
                        }} />
            )}
        </Map>
    );
};

export default MapComponent;
