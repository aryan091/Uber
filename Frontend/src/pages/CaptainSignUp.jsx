import React , { useState } from 'react'
import { Link , useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext"
import axios from 'axios'

const CaptainSignUp = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [firstname , setfirstname] = useState("")
    const [lastname , setlastname] = useState("")
    const [vehicleName , setVehicleName] = useState("")
    const [color , setcolor] = useState("")
    const [plate , setplate] = useState("")
    const [capacity , setcapacity] = useState("")
    const [vehicleType , setvehicleType] = useState("")

    const navigate = useNavigate()

    const {captain , setCaptain} = React.useContext(CaptainDataContext)
    const submitHandler = async (e) => {
        e.preventDefault()
        const newCaptain = {
          fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email,
            password,
            vehicle: {vehicleName, color, plate, capacity, vehicleType}
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register` , newCaptain)
        console.log(response.data)
        if(response.status === 201){
            const data = response.data
            setCaptain(data.captain)
            console.log(response.data.captain)
            localStorage.setItem('token' , data.token)
            navigate("/captainScreen")

        }

        setEmail("")
        setPassword("")
        setfirstname("")
        setlastname("")
        setVehicleName("")
        setcolor("")
        setplate("")
        setcapacity("")
        setvehicleType("")
    }
    return (
        <div className="p-8 h-screen flex flex-col justify-between">
          <div>
            <img
              className="w-16 mb-10"
              src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
              alt=""
            />
    
            <form onSubmit={submitHandler} >
            <h3 className="text-lg font-medium mb-2">What's your Name</h3>

            <div className='flex gap-4'>
            <input
                required
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-1/2 text-lg placeholder:text-sm"
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
              <input
                required

                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-1/2 text-lg placeholder:text-sm"
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />   
            </div>
              <h3 className="text-lg font-medium mb-2">What's your email</h3>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-sm"
                type="email"
                placeholder="email@example.com"
              />
              <h3 className="text-lg font-medium mb-2">What's your password</h3>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-sm"
                type="password"
                placeholder="password"
              />
              <h3 className="text-lg font-medium mb-2">Vehicle Name</h3>
              <input
                required
                value={vehicleName}
                onChange={(e) => setVehicleName(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-sm"
                type="text"
                placeholder="Audi"
              />
                          <h3 className="text-lg font-medium mb-2">Vehicles Details</h3>

              <div className='flex gap-4'>
            <input
                required
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-1/2 text-lg placeholder:text-sm"
                type="text"
                placeholder="eg: Red"
                value={color}
                onChange={(e) => setcolor(e.target.value)}
              />
              <input
                required

                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-1/2 text-lg placeholder:text-sm"
                type="text"
                placeholder="eg: JK01AQ9355"
                value={plate}
                onChange={(e) => setplate(e.target.value)}
              /> 
              
                
              
            </div>

            <div className='flex gap-4'>
            <input
                required
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-1/2 text-lg placeholder:text-sm"
                type="number"
                placeholder="eg: 4"
                value={capacity}
                onChange={(e) => setcapacity(e.target.value)}
              />
              <select
              required
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-1/2 text-lg placeholder:text-sm"
                value={vehicleType}
                onChange={(e) => setvehicleType(e.target.value)}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">car</option>
                <option value="motorcycle">motorcycle</option>
                <option value="auto">auto</option>
                
              </select>
              
                
              
            </div>
              <button className="bg-[#111] text-white font-semibold mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-sm">
                Register
              </button>
    
              <p className="text-center font-medium">
                {" "}
                Already have an account?
                <Link to="/captainLogin" className="text-blue-600">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
          <div>
            <p className="text-center font-medium text-xs">
                By registering, you agree to our Terms of Service and acknowledge you have read and understand our Privacy Policy.
            </p>
          </div>
        </div>
      );
}

export default CaptainSignUp