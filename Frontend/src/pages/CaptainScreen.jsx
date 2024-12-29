import React, {useState , useRef , useEffect , useContext} from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "./RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { SocketDataContext } from '../context/SocketContext';
import {CaptainDataContext} from "../context/CaptainContext"
import axios from "axios";
import LiveTracking from "../components/LiveTracking";

const CaptainScreen = () => {

  const [ridePopUpPanel , setRidePopUpPanel] = useState(false)
  const [confirmRidePopUpPanel , setConfirmRidePopUpPanel] = useState(false)
  const [ride, setRide] = useState(null);

  const ridePopUpRef = useRef(null); 
  const confirmRidePopUpPanelRef = useRef(null);

    const { socket } = useContext(SocketDataContext);

  const {captain} = useContext(CaptainDataContext)

  useEffect(() => {
    socket.emit('join',{userType : "captain" , userId : captain._id});

    const updateLocation = () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {

              socket.emit('update-location-captain', {
                  userId: captain._id,
                  location: {
                      ltd: position.coords.latitude,
                      lng: position.coords.longitude
                  }
              })
          })
      }
  }

  const locationInterval = setInterval(updateLocation, 10000)
  updateLocation()

  }, []);
  
  socket.on('new-ride', (data) => {

    setRide(data);
    setRidePopUpPanel(true);
  })


  

       

  async function confirmRide() {

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

        rideId: ride._id,
        captainId: captain._id,


    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    console.log("Confirm Ride :",response.data)

    setRidePopUpPanel(false)
    setConfirmRidePopUpPanel(true)

}





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


  useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopUpPanel]);

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
        <LiveTracking/>
      </div>


      <div className="h-2/5 p-6">
        <CaptainDetails/>
      </div>

      <div ref={ridePopUpRef}  className="fixed w-full bg-white z-10 translate-y-full bottom-0 px-3 py-8">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        confirmRide={confirmRide}
        ride={ride}
        />
      </div>


      <div ref={confirmRidePopUpPanelRef} className="fixed w-full bg-white h-screen z-10 translate-y-full bottom-0 px-3 py-8">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} 
                ride={ride}
/>
      </div>



    </div>
  );
};

export default CaptainScreen;
