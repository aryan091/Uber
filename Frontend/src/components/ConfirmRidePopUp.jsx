import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConfirmRidePopUp = ({
  setConfirmRidePopUpPanel,
  setRidePopUpPanel,
  ride,
}) => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
    setRidePopUpPanel(false);
     setConfirmRidePopUpPanel(false);
      navigate("/captainRiding", { state: { ride: ride } });
    }
  };

  return (
    <div className="mt-4">
      <h5
        className="absolute top-5 right-5 text-2xl"
        onClick={() => {
          setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-8">Confirm Ride</h3>

      <div className="flex items-center justify-between p-2 bg-yellow-400 rounded-lg mb-8">
        <div className="flex items-center justify-start gap-4">
          <img
            className="h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/59964730?v=4"
            alt=""
          />
          <h4 className="text-lg font-medium">
            {ride?.user?.fullname?.firstname +
              " " +
              ride?.user?.fullname?.lastname}
          </h4>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>

      <div className="flex justify-between flex-col items-center gap-4">
        <div className="w-full flex flex-col gap-4">
          
          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {" "}
                {ride?.pickup.substring(0, ride?.pickup.lastIndexOf(","))}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {ride?.pickup
                  .substring(ride?.pickup.lastIndexOf(",") + 1)
                  .trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {ride?.destination.substring(
                  0,
                  ride?.destination.lastIndexOf(",")
                )}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {ride?.destination
                  .substring(ride?.destination.lastIndexOf(",") + 1)
                  .trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center p-2">
            <i className="ri-cash-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full gap-2">
          <form
            onSubmit={(e) => submitHandler(e)}
            className="w-full flex items-center justify-between gap-2"
          >
            <div className="w-full flex items-center justify-between flex-col ">
              <div className="w-full ">
                <input
                  className="bg-[#eee] px-12 py-2 text-center text-base rounded-lg w-full mt-5"
                  type="number"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between w-full gap-2">
                <button
                  onClick={() => {
                    setConfirmRidePopUpPanel(false);
                    setRidePopUpPanel(false);
                  }}
                  className="w-1/2  font-medium bg-gray-200 text-black py-3 mt-3"
                >
                  Cancel
                </button>

                <button className="w-1/2  font-medium bg-black text-white py-3 mt-3">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
