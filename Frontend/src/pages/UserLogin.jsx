import React , { useState , useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios'
import {UserDataContext} from "../context/UserContext";

const UserLogin = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const [userData , setUserData] = useState({})

    const navigate = useNavigate()
    const {user , setUser} =useContext(UserDataContext)


    const submitHandler = async (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login` , userData)
        if(response.status === 200){
            const data = response.data
            console.log(data.user)
            setUser(data.user)
            localStorage.setItem('token' , data.token)
            navigate("/homeScreen")
        }
      

        setEmail("")
        setPassword("")
    }
  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
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
            New here?
            <Link to="/userSignup" className="text-blue-600">
              Create new account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to="/captainLogin" className="bg-[#10b461] text-white flex items-center justify-center font-semibold mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-sm">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
