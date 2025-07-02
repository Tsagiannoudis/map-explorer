import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import MapUpdater from './MapUpdater'; // Helper component to move the map
//import { map } from 'leaflet';
import SearchBar from './SearchBar'; // Import the SearchBar component

export default function MapContainer({  mapCoordinates, cityData }) {
  // Set a default position for the map when the app first loads
  const defaultPosition = [40.626, 22.948]; // This is a central point in the Mediterranean
  const position = mapCoordinates ? [mapCoordinates.lat, mapCoordinates.lng] : defaultPosition;

  return (
    <>
      {/* Search Bar */}
      <div className="mb-2 relative z-[1000]"> {/* z-index to keep it above map controls */}
        <SearchBar />
      </div>

      {/* Map */}
      <div className="flex-1 rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <LeafletMap center={position} zoom={7} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cityData && mapCoordinates && <Marker position={position}><Popup>{cityData.name}</Popup></Marker>}
          <MapUpdater coords={position} zoom={13} isCitySelected={!!mapCoordinates} />
        </LeafletMap>
      </div>
    </>
  );
}