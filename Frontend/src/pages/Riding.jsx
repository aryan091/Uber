import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/homeScreen' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-2 right-2'>
        <i className="ri-home-5-line text-lg font-medium"></i>
        </Link>
        <div className='h-1/2'>
        
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
        </div>

        <div className='h-1/2 px-2'>
        
        <div className='flex items-center justify-between px-3'>
          <img className='h-12 rounded-full' src="https://sense.iitd.ac.in/public/storage/students_image/aaaaaa_1696412611.jpg" alt="" />
          <div className='text-right'>
            <h2 className='font-medium text-lg'>Aryan</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>JK01Q 3357</h4>
            <p className='text-gray-600 text-sm'>Tata Nano</p>
          </div>
        </div>

      <div className="flex justify-between flex-col items-center gap-4">
        
        <div className="w-full flex flex-col gap-4">
          

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
<button className="w-full bg-black text-white py-3 mt-3">Pay</button>
        </div>

    </div>
  )
}

export default Riding