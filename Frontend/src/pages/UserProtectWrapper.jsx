import React , {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {UserDataContext} from "../context/UserContext";

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    console.log(user)
    if(!token ) navigate("/userLogin")


  return (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper