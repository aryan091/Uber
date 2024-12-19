import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {UserDataContext} from "../context/UserContext"
import axios from 'axios'

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {user , setUser} = React.useContext(UserDataContext)
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        if(!token ) navigate("/userLogin")

          axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile` , 
            {
              headers : {
                "Authorization" : `Bearer ${token}`
                        }
            })
            .then((res) => {
              if(res.status === 200) 
              {
              setUser(res.data.user)        
              setLoading(false)
              }
          }).catch((err) => {console.log(err)
            localStorage.removeItem('token')
          navigate("/userLogin")
        }
        )
    }, [token])



  return (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper