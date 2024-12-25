import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <img
              className="h-12 rounded-full"
              src="https://sense.iitd.ac.in/public/storage/students_image/aaaaaa_1696412611.jpg"
              alt=""
            />
            <h4 className="text-lg font-medium">Ankur Daftari</h4>
          </div>

          <div>
            <h4 className="text-xl font-semibold">₹320.45</h4>
            <p className="text-sm text-gray-400 font-bold text-right">Earned</p>
          </div>
        </div>


        <div className="flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-4 items-start">
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-400">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-400">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-booklet-fill"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-400">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails