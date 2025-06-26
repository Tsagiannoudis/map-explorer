import React from 'react';

export default function ControlPanel({
  cityData,
  isLoading,
  error,
}) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Information</h2>
      
      {isLoading && (
        <div className="p-4 bg-blue-100 text-blue-800 rounded-lg animate-pulse">
          <p>Searching...</p>
        </div>
      )}

      {error && !isLoading && (
        <div className="p-4 bg-red-100 text-red-800 rounded-lg">
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}

      {!isLoading && !error && !cityData && (
        <div className="p-4 bg-gray-100 text-gray-800 rounded-lg">
          <p>Search for a city to see its details here.</p>
        </div>
      )}
      
      {cityData && !isLoading && (
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 space-y-4">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">City Details:</h3>
          <p><strong>Name:</strong> {cityData.name}</p>
          {cityData.summary && (
            <div>
              <h4 className="font-semibold text-gray-600 mt-4 mb-2">Summary (from Wikipedia)</h4>
              {cityData.thumbnail && (
                <img
                  src={cityData.thumbnail}
                  alt={`Picture of ${cityData.name}`}
                  className="w-full h-auto rounded-lg mb-3"
                />
              )}
              <p className="text-sm text-gray-600 italic">{cityData.summary}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}