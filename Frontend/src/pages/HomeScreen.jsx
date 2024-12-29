import React, { useRef, useState , useEffect  } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingforDriver from "../components/WaitingforDriver";
import axios from "axios";
import {UserDataContext} from "../context/UserContext";
import { useContext } from 'react';
import { SocketDataContext } from '../context/SocketContext';

const HomeScreen = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const [ride, setRide] = useState(null);

  

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);


  const {user} = useContext(UserDataContext);

  
  const { socket } = useContext(SocketDataContext);

useEffect(() => {
  socket.emit('join',{userType : "user" , userId : user._id});
}, []);

socket.on('ride-confirmed', ride => {


  setVehicleFound(false)
  setWaitingForDriver(true)
  setRide(ride)
})

  /**
   * Handles changes to the pickup input field
   * @param {React.ChangeEvent<HTMLInputElement>} e
   * @returns {Promise<void>}
   */

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data.suggestions);
    } catch(error) {
      console.log("error :", error);
      // handle error
      setPickupSuggestions([]); // Fallback to an empty array

    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data.suggestions);
    } catch {
      // handle error
      setDestinationSuggestions([]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        duration: 0.5,
        height: "70%",
        padding: 24,
        opacity: 1,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        duration: 0.5,
        height: "0%",
        padding: 0,
        opacity: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);


  async function findTrip() {
    setVehiclePanel(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })


  setFare(response.data)


}

async function createRide() {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })


}

  

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h-[30%] bg-white relative  p-6">
          <h5
            className="absolute top-5 right-5 text-2xl opacity-0"
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] bg-gray-700 rounded-full left-10"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              name=""
              id=""
              onClick={() => {
                setPanelOpen(true);
                setActiveField("pickup");
              }}
              placeholder="Add your pickup location"
              onChange={handlePickupChange}
              value={pickup}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              name=""
              id=""
              onClick={() => {
                setPanelOpen(true);
                setActiveField("destination");
              }}
              placeholder="Add your destination"
              onChange={handleDestinationChange}
              value={destination}
            />
          </form>
          <button onClick={findTrip}  className="w-full bg-black text-white py-3 mt-3 ">Find a trip</button>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white mt-3  ">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup" ? pickupSuggestions : destinationSuggestions
            }
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full bg-white z-10 translate-y-full bottom-0 px-3 py-8"
      >
        <VehiclePanel
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
          fare={fare}
          setVehicleType={setVehicleType}
        />
      </div>

      <div
        ref={confirmedRidePanelRef}
        className="fixed w-full bg-white z-10 translate-y-full bottom-0 px-3 py-8"
      >
        <ConfirmedRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
          setVehicleFound={setVehicleFound}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          vehicleType={vehicleType}
          fare={fare}

        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full bg-white z-10 translate-y-full bottom-0 px-3 py-8"
      >
        <LookingForDriver 
        setVehicleFound={setVehicleFound}
        pickup={pickup}
        destination={destination}
        vehicleType={vehicleType}
        fare={fare}
         />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full bg-white z-10 translate-y-full bottom-0 px-3 py-8"
      >
        <WaitingforDriver
          setWaitingForDriver={setWaitingForDriver}
          setVehicleFound={setVehicleFound}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
