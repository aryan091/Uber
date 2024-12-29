import React from 'react'

const WaitingforDriver = ({setWaitingForDriver , setVehicleFound , ride , vehicleType}) => {
  return (
<div>
      <h5
        className="absolute top-5 right-5 text-2xl"
        onClick={() => {
          setVehicleFound(false);
          setWaitingForDriver(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

        <div className='flex items-center justify-between'>
          <img className='h-12 rounded-full' src="https://sense.iitd.ac.in/public/storage/students_image/aaaaaa_1696412611.jpg" alt="" />
          <div className='text-right'>
            <h2 className='font-medium text-lg'>{ride?.captain?.fullname?.firstname + " " + ride?.captain?.fullname?.lastname}</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain?.vehicle?.plate}</h4>
            <p className='text-gray-600 text-sm'>{ride?.captain?.vehicle?.vehicleName}</p>
            <h1 className='text-lg font-semibold'>{ride?.otp}</h1>
          </div>
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

      </div>

    </div>  
    )
}

export default WaitingforDriver