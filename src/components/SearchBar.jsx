import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {

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
    </>
    );
}
  
