import React , { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext"
import axios from 'axios'
const CaptainLogin = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate()

    const {captain , setCaptain} = React.useContext(CaptainDataContext)
    const submitHandler = async (e) => {
        e.preventDefault()
        const captain = {
            email,
            password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login` , captain)
        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token' , data.token)
            console.log(response.data.captain)
            navigate("/captainScreen")
        }        
        setEmail("")
        setPassword("")

    }
    return (
        
        <div className="p-8 h-screen flex flex-col justify-between">
          <div>
            <img
              className="w-16 mb-10"
              src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
              alt=""
            />
    
            <form onSubmit={submitHandler}>
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
              <button className="bg-[#111] text-white font-semibold mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-sm">
                Login
              </button>
    
              <p className="text-center font-medium">
                {" "}
                Join a fleet?
                <Link to="/captainSignUp" className="text-blue-600">
                  Register as a Captain
                </Link>
              </p>
            </form>
          </div>
          <div>
            <Link to="/userLogin" className="bg-[#10b461] text-white flex items-center justify-center font-semibold mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-sm">
              Sign in as User
            </Link>
          </div>
        </div>
      );
    };


export default CaptainLogin