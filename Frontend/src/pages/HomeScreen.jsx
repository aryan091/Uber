import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const HomeScreen = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        duration: 0.5,
        height: "70%",
        padding: 24
      });
      gsap.to(panelCloseRef.current, {
          opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        duration: 0.5,
        height: "0%",
        padding: 0
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0
    })
    }
  }, [panelOpen]);

  return (
    <div className="relative h-screen">
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
          <h5 className="absolute top-5 right-5 text-2xl opacity-0"
          ref={panelCloseRef}
          onClick={() => {
            setPanelOpen(false)
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
              }}
              placeholder="Add your pickup location"
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              value={pickup}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              name=""
              id=""
              onClick={() => {
                setPanelOpen(true);
              }}
              placeholder="Add your destination"
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              value={destination}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white  ">
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
