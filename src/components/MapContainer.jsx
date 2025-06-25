import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import MapUpdater from './MapUpdater'; // Helper component to move the map

export default function MapContainer({
  searchTerm,
  setSearchTerm,
  handleSearch,
  mapCoordinates,
  cityData,
}) {
  // Set a default position for the map when the app first loads
  const defaultPosition = [51.505, -0.09]; // London
  const position = mapCoordinates ? [mapCoordinates.lat, mapCoordinates.lng] : defaultPosition;

  return (
    <>
      {/* Search Bar */}
      <div className="mb-2 relative z-[1000]"> {/* z-index to keep it above map controls */}
        <div className="flex gap-2 pl-4 pr-4 pt-2">
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
            placeholder="e.g., Athens, London..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            className="bg-blue-600 text-white p-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <LeafletMap center={position} zoom={mapCoordinates ? 13 : 5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cityData && mapCoordinates && <Marker position={position}><Popup>{cityData.name}</Popup></Marker>}
          <MapUpdater coords={position} zoom={mapCoordinates ? 13 : 5} />
        </LeafletMap>
      </div>
    </>
  );
}