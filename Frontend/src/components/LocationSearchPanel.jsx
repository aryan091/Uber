import React from "react";

const LocationSearchPanel = ({ suggestions, setPanelOpen, setVehiclePanel, setPickup, setDestination, activeField }) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion.description);
    } else if (activeField === 'destination') {
      setDestination(suggestion.description);
    }
  };

  return (
    <div>
      {Array.isArray(suggestions) && suggestions.map((suggestion, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(suggestion)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start hover:bg-gray-50 cursor-pointer"
        >
          <div className="bg-gray-200 h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill text-gray-600"></i>
          </div>
          <h4 className="font-medium">{suggestion.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;