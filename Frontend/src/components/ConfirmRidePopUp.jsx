import React from 'react'

const ConfirmRidePopUp = ({setConfirmRidePopUpPanel , setRidePopUpPanel}) => {
  return (
<div className='mt-4'>
      <h5
        className="absolute top-5 right-5 text-2xl"
        onClick={() => {
          setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-8">Confirm Ride</h3>

      <div className='flex items-center justify-between p-2 bg-yellow-400 rounded-lg mb-8'>
      <div className="flex items-center justify-start gap-4">
            <img
              className="h-12 rounded-full"
              src="https://sense.iitd.ac.in/public/storage/students_image/aaaaaa_1696412611.jpg"
              alt=""
            />
            <h4 className="text-lg font-medium">Aryan Daftari</h4>
          </div>
          <h5 className='text-lg font-semibold'>2.2 Km</h5>
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

        <div className='flex items-center justify-between w-full gap-2'>
        <button onClick={
          () => {
            setConfirmRidePopUpPanel(false);
            setRidePopUpPanel(false);
          }
        } className="w-1/2  font-medium bg-gray-200 text-black py-3 mt-3">Cancel</button>

<button onClick={
          () => {
             
          }
        } className="w-1/2 font-medium bg-black text-white py-3 mt-3">Confirm</button>
        </div>

        
      </div>
    </div>  )
}

export default ConfirmRidePopUp