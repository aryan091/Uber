import React, { useRef , useState} from 'react'
import { Link } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {


      const [finishRide , setFinishRide] = useState(false)
    
      const freshRideRef = useRef(null); 

    useGSAP(() => {
        if (finishRide) {
          gsap.to(freshRideRef.current, {
            transform: "translateY(0%)",
          });
        } else {
          gsap.to(freshRideRef.current, {
            transform: "translateY(100%)",
          });
        }
      }, [finishRide]);

  return (
    <div className="h-screen overflow-hidden">

      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captainScreen"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className="ri-logout-circle-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>


      <div className="h-1/5 p-6 flex  items-center justify-between relative bg-yellow-400 pt-10">
      <h5 onClick={() => {
        setFinishRide(true)
      }} className='p-1 text-center w-screen absolute top-0'>
        <i className='text-3xl text-gray-800 ri-arrow-up-wide-line'></i>
      </h5>
      <h4 className='text-xl font-semibold'>4 Km Away</h4>
      <button onClick={() => {
        setFinishRide(true)
      }} className="w-1/2 font-medium bg-black text-white py-3 mt-3">Complete</button>
        </div>
      

        <div ref={freshRideRef}  className="fixed w-full bg-white z-10 translate-y-full bottom-0 px-3 py-8">
<FinishRide setFinishRide={setFinishRide} />
      </div>


    </div>

      



  )
}

export default CaptainRiding