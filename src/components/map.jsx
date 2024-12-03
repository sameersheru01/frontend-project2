import React from "react";
import { MapContainer, TileLayer, Marker, Popup,Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./map.module.css";

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with your preferred marker icon
  iconSize: [35, 35],
});

const MapComponent = () => {
  const position = [51.5074, -0.1278]; // London coordinates

  return (
    <div className={styles.mapWrapper}>
      <MapContainer center={position} zoom={23} zoomControl={false} className={styles.mapContainer}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>McDonald’s South London</Popup>
          <Tooltip permanent direction="left" offset={[0, -15]}>
            McDonald’s
          </Tooltip>
        </Marker>

        {/* Floating Info Box */}
        <div className={styles.infoBox}>
          <h2>McDonald’s</h2>
          <h4 className={styles.subHeading}>South London</h4>
          <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
          <p>
            <strong>Phone number:</strong> +934443-43
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a >
              http://mcdonalds.uk/
            </a>
          </p>
        </div>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
