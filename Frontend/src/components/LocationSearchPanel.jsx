import React from "react";

const LocationSearchPanel = ({setPanelOpen,setVehiclePanel}) => {

  const locations = ["Jagti Colony, Nagrota, Jammu", "Habba Kadal, Srinagar", "Rohan Ananta, Pune , Maharashtra"];

  return (

    
    <div className="flex flex-col gap-2">

{
      locations.map((location) => {
        return (
          <div
          onClick={() => {
            setVehiclePanel(true)
            setPanelOpen(false)
          }} 
           className="flex items-center border-2 rounded-lg p-2 active:border-black justify-start gap-2">
            <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-line "></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        )
      })
    }


      
    </div>
  );
};

export default LocationSearchPanel;
