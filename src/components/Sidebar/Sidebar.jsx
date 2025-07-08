import React, { useState } from "react";
import CityDetails from "./CityDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ cityData, isLoading, error }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <>
      <div>
        <h2 className="mb-6 flex justify-center items-center text-4xl">
          <FontAwesomeIcon icon={faMapMarkedAlt}/>
        </h2>
        <p className="mb-4 -mt-4">Map Explorer</p>

        <div className="relative pt-4 border-t">
          <button onClick={toggleDetails} className=" flex rounded-lg border-1 bg-white p-2">
            {showDetails ? "Hide Explore" : "Explore"}
          </button>
          
          {showDetails && (
            <div className="absolute -top-20 left-full ml-8 w-96 bg-white rounded-lg shadow-lg z-20">
              <CityDetails cityData={cityData} isLoading={isLoading} error={error} />
            </div>
          )}
          
        </div>

      </div>
    </>
  );
}
