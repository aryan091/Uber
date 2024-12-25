import React, {useState , useRef} from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "./RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
const CaptainScreen = () => {

  const [ridePopUpPanel , setRidePopUpPanel] = useState(true)

  const ridePopUpRef = useRef(null); 

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUpPanel]);

  return (
    <div className="h-screen">

      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/homeScreen"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className="ri-logout-circle-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>


      <div className="h-2/5 p-6">
        <CaptainDetails/>
      </div>

      <div ref={ridePopUpRef}  className="fixed w-full bg-white z-10 translate-y-full bottom-0 px-3 py-8">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel}/>
      </div>



    </div>
  );
};

export default CaptainScreen;
