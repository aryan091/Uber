import React from 'react'
import {CaptainDataContext} from '../context/CaptainContext'
const CaptainDetails = () => {

  const {captain} = React.useContext(CaptainDataContext);

  

  return (
    <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <img
              className="h-12 rounded-full"
              src="https://avatars.githubusercontent.com/u/48705673?v=4"
              alt=""
            />
            <h4 className="text-lg font-medium capitalize">{captain.fullname.firstname} {(captain.fullname.lastname)}</h4>
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