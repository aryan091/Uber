import React from "react";
import { IMAGES } from "../constants";
const ConfirmedRide = ({
  setConfirmRidePanel,
  setVehiclePanel,
  setVehicleFound,
  createRide,
  pickup,
  destination,
  vehicleType,
  fare,
}) => {
  return (
    <div>
      <h5
        className="absolute top-5 right-5 text-2xl"
        onClick={() => {
          setVehiclePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-2">Confirm your ride</h3>

      <div className="flex justify-between flex-col items-center gap-4">
        <img
          className=" h-25"
          src={
            vehicleType === 'car' ? IMAGES.CAR : 
            vehicleType === 'moto' ? IMAGES.MOTO : 
            IMAGES.AUTO
          } 
                    alt=""
        />

        <div className="w-full flex flex-col gap-4">

          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {" "}
                {pickup.substring(0, pickup.lastIndexOf(","))}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {pickup.substring(pickup.lastIndexOf(",") + 1).trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {destination.substring(0, destination.lastIndexOf(","))}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {destination.substring(destination.lastIndexOf(",") + 1).trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center p-2">
            <i className="ri-cash-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹{fare[vehicleType]}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setConfirmRidePanel(false);
            setVehicleFound(true);
            createRide();
          }}
          className="w-full bg-black text-white py-3 mt-3"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
