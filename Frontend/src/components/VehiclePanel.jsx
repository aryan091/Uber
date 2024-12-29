import React from 'react'
import { IMAGES } from '../constants';

const VehiclePanel = ({setVehiclePanel , setConfirmRidePanel , fare , setVehicleType}) => {
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
        <h3 className="text-2xl font-semibold mb-5">Your trips</h3>

        {/* Car */}
        <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehicleType('car');
          
        }}
         className="flex w-full items-center justify-between bg-white p-3 border-2 active:border-black mb-2 rounded-xl">
          <img
            className=" h-10"
            src={IMAGES.CAR}
            alt=""
          />

          <div className="w-1/2">
            <h4 className="font-medium text-lg">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>

          <h2 className="font-semibold text-lg">₹{fare.car}</h2>

        </div>

        {/* Moto */}
        <div 
        onClick={() => {
            setConfirmRidePanel(true);
            setVehicleType('moto');
          }}
        className="flex w-full items-center justify-between bg-white p-3 border-2 active:border-black mb-2 rounded-xl">
          <img
            className=" h-10"
            src={IMAGES.MOTO}
            alt=""
          />

          <div className="w-1/2">
            <h4 className="font-medium text-lg">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable motorcycle rides</p>
          </div>

          <h2 className="font-semibold text-lg">₹{fare.moto}</h2>

        </div>

        {/* Auto */}
        <div
        onClick={() => {
            setConfirmRidePanel(true);
            setVehicleType("auto");
          }}
         className="flex w-full items-center justify-between bg-white p-3 border-2 active:border-black mb-2 rounded-xl">
          <img
            className=" h-10"
            src={IMAGES.AUTO}
            alt=""
          />

          <div className="w-1/2">
            <h4 className="font-medium text-lg">
              Auto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
          </div>

          <h2 className="font-semibold text-lg">₹{fare.auto}</h2>

        </div>

    </div>
  )
}

export default VehiclePanel