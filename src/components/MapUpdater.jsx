import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

// This component is a utility to programmatically update the map's view (center and zoom)
export default function MapUpdater({ coords, zoom, isCitySelected }) {
  const map = useMap();

  useEffect(() => {
    //map.setView(coords, zoom);

    if (isCitySelected){
      map.flyTo(coords, zoom, {
        animate: true,
        duration: 1.5,
      });
    }

  }, [coords, zoom, isCitySelected, map]);
  return null; // This component does not render anything
}