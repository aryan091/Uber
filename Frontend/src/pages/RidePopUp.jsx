import React from 'react'

const RidePopUp = ({setRidePopUpPanel , setConfirmRidePopUpPanel, ride , confirmRide}) => {

  console.log("ride -->",ride);
  

  return (
    <div>
      <h5
        className="absolute top-5 right-5 text-2xl"
        onClick={() => {
          setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-2">New Ride Available</h3>

      <div className='flex items-center justify-between p-2 bg-yellow-400 rounded-lg'>
      <div className="flex items-center justify-start gap-4">
            <img
              className="h-12 rounded-full"
              src="https://avatars.githubusercontent.com/u/59964730?v=4"
              alt=""
            />
            <h4 className="text-lg font-medium">{ride?.user?.fullname?.firstname + " " + ride?.user?.fullname?.lastname}</h4>
          </div>
          <h5 className='text-lg font-semibold'>2.2Km</h5>
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
                {ride?.pickup.substring(ride?.pickup.lastIndexOf(",") + 1).trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {ride?.destination.substring(0, ride?.destination.lastIndexOf(","))}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {ride?.destination.substring(ride?.destination.lastIndexOf(",") + 1).trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center p-2">
          <i className="ri-cash-line text-lg"></i>          
          <div>
              <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash
              </p>
            </div>
          </div>

        </div>

        <div className='flex items-center justify-between w-full gap-2'>
        <button onClick={
          () => {
            setRidePopUpPanel(false);
          }
        } className="w-1/2  font-medium bg-gray-200 text-black py-3 mt-3">Ignore</button>

<button onClick={
          () => {
            setConfirmRidePopUpPanel(true);
            confirmRide();
          }
        } className="w-1/2 font-medium bg-black text-white py-3 mt-3">Accept</button>
        </div>

        
      </div>
    </div>
  )
}

export default RidePopUp