import React from 'react'
import { Link } from "react-router-dom";

const FinishRide = ({setFinishRide , ride}) => {
  return (
    <div className="mt-4">
    <h5
      className="absolute top-5 right-5 text-2xl"
      onClick={() => {
        setFinishRide(false);
      }}
    >
      <i className="ri-arrow-down-wide-line"></i>
    </h5>

    <h3 className="text-2xl font-semibold mb-8">Finish the Ride</h3>

    <div className="flex items-center justify-between p-2 bg-yellow-400 rounded-lg mb-8">
      <div className="flex items-center justify-start gap-4">
        <img
          className="h-12 rounded-full"
          src="https://avatars.githubusercontent.com/u/59964730?v=4"
          alt=""
        />
        <h4 className="text-lg font-medium">{ride?.user?.fullname?.firstname +
              " " +
              ride?.user?.fullname?.lastname}</h4>
      </div>
      <h5 className="text-lg font-semibold">2.2 Km</h5>
    </div>

    <div className="flex justify-between flex-col items-center gap-4">
      <div className="w-full flex flex-col gap-4">

        <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {" "}
                {ride?.pickup.substring(0, ride?.pickup.lastIndexOf(","))}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {ride?.pickup
                  .substring(ride?.pickup.lastIndexOf(",") + 1)
                  .trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {ride?.destination.substring(
                  0,
                  ride?.destination.lastIndexOf(",")
                )}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {ride?.destination
                  .substring(ride?.destination.lastIndexOf(",") + 1)
                  .trim()}
              </p>
            </div>
          </div>

        <div className="flex gap-4 items-center p-2">
          <i className="ri-cash-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full gap-2">
        
          
          

<div className="flex flex-col items-center justify-between w-full gap-2">


          <Link
            to="/captainScreen"
            className="w-full flex justify-center font-medium bg-black text-white py-3 mt-3"
          >
            Finish Ride
          </Link>
          <p className='text-xs text-wrap font-semibold text-center text-red-500 mt-10'>Click here to finish the ride if you have reached your destination</p>
</div>
          
         
      </div>
    </div>
  </div>
  )
}

export default FinishRide