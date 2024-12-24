import React from 'react'

const WaitingforDriver = ({setWaitingForDriver , setVehicleFound}) => {
  return (
<div>
      <h5
        className="absolute top-5 right-5 text-2xl"
        onClick={() => {
          setVehicleFound(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

        <div className='flex items-center justify-between'>
          <img className='h-12 rounded-full' src="https://sense.iitd.ac.in/public/storage/students_image/aaaaaa_1696412611.jpg" alt="" />
          <div>
            <h2 className='font-medium text-lg'>Aryan</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>JK01Q 3357</h4>
            <p className='text-gray-600 text-sm'>Tata Nano</p>
          </div>
        </div>

      <div className="flex justify-between flex-col items-center gap-4">
        
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">526/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Jagti Colony, Nagrota, Jammu
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center border-b-2 p-2">
          <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">526/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Jagti Colony, Nagrota, Jammu
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center p-2">
          <i className="ri-cash-line text-lg"></i>          
          <div>
              <h3 className="text-lg font-medium">₹163.45</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>  )
}

export default WaitingforDriver