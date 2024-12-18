import React , { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios'
import {UserDataContext} from "../context/UserContext";
const UserSignUp = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [firstname , setfirstname] = useState("")
    const [lastname , setlastname] = useState("")

    const [userData , setUserData] = useState({})

    const navigate = useNavigate()
    const {user , setUser} = React.useContext(UserDataContext)


    const submitHandler = async (e) => {
        e.preventDefault()
        const newUser = {
          fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email,
            password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register` , newUser)
        console.log(response.data)
        if(response.status === 201){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token' , data.token)

        }
        setEmail("")
        setPassword("")
        setfirstname("")
        setlastname("")
    }

    return (
        <div className="p-8 h-screen flex flex-col justify-between">
          <div>
            <img
              className="w-16 mb-10"
              src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
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
              <button className="bg-[#111] text-white font-semibold mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-sm">
                Register
              </button>
    
              <p className="text-center font-medium">
                {" "}
                Already have an account?
                <Link to="/userLogin" className="text-blue-600">
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

export default UserSignUp