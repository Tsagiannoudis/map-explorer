import { useState } from 'react'
import './App.css'
import axios from 'axios';
import MainPageLayout from './layouts/MainPageLayout'; 
import MapContainer from './components/MapContainer';
import Sidebar from './components/Sidebar'; 


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityData, setCityData] = useState(null);
  const [mapCoordinates, setMapCoordinates] = useState(null);
  //const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        searchTerm
      )}`;
      
      const response = await axios.get(wikiUrl);
      // what we get back from the API
      const { title, extract, coordinates, thumbnail } = response.data;

      //check if the response contains coordinates
      if ( !coordinates || !coordinates.lat || !coordinates.lon) {
        throw new Error (`Could not found for this location "${searchTerm}" on Wikipedia`);
      }

      //update city data
      setMapCoordinates({ lat: coordinates.lat, lng: coordinates.lon });

      setCityData({
        name: title,
        summary: extract,
        thumbnail: thumbnail ? thumbnail.source : null, // Fallback image if no thumbnail
      });

    } catch (err) {
      console.error('Error fetching data:', err.message);
      // Provide more specific error feedback to the user
      if (err.response && err.response.status === 404) {
        setError(`Could not find a Wikipedia page for "${searchTerm}". Please check the spelling.`);
      } else {
        // Display the actual error message from the thrown Error or the API
        setError(err.message || 'An unexpected error occurred. Please try again.');
      }
      setCityData(null);
      setMapCoordinates(null);

    } finally {
      setIsLoading(false);
    }


  }


  return (
      
      <MainPageLayout
        sidebar={<Sidebar cityData={cityData} isLoading={isLoading} error={error} />}
        mapcontainer={<MapContainer searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} mapCoordinates={mapCoordinates} cityData={cityData} />}
      />
    
  );
    
}

export default App;