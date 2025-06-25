import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

// This component is a utility to programmatically update the map's view (center and zoom)
export default function MapUpdater({ coords, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, zoom);
  }, [coords, zoom, map]);
  return null; // This component does not render anything
}