import React , { useState } from 'react'
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")

    const [captainData , setCaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setCaptainData({
            username:{
                firstName:firstName,
                lastName:lastName
            },
            email,
            password
        })
        console.log(captainData)
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
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
                type="email"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required

                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-1/2 text-lg placeholder:text-sm"
                type="email"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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