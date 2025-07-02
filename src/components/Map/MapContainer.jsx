import React from "react";
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import MapUpdater from "./MapUpdater"; // Helper component to move the map
//import { map } from 'leaflet';
import SearchBar from "../ExtraComponents/SearchBar"; // Import the SearchBar component

export default function MapContainer({ mapCoordinates, cityData }) {
  // Set a default position for the map when the app first loads
  const defaultPosition = [40.626, 22.948]; // This is a central point in the Mediterranean
  const position = mapCoordinates
    ? [mapCoordinates.lat, mapCoordinates.lng]
    : defaultPosition;

  return (
    <>
      <div className="h-full w-full">
        <LeafletMap
          center={position}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false} // Disable default zoom control
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="bottomright" />
          {cityData && mapCoordinates && (
            <Marker position={position}>
              <Popup>{cityData.name}</Popup>
            </Marker>
          )}
          <MapUpdater
            coords={position}
            zoom={13}
            isCitySelected={!!mapCoordinates}
          />
        </LeafletMap>
      </div>
    </>
  );
}
