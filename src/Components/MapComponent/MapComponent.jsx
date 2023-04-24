import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const MapComponent = ({ center, zoom }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initMap = () => {
      const options = {
        center,
        zoom,
      };
      const map = new window.google.maps.Map(
        document.getElementById("map"),
        options
      );
      setMap(map);
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, [center, zoom]);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

MapComponent.defaultProps = {
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 12,
};

export default MapComponent;
