import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {CaptainDataContext} from "../context/CaptainContext"
import axios from 'axios'


const CaptainProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain , setCaptain} = React.useContext(CaptainDataContext)
    const [loading , setLoading] = useState(true)

    

    useEffect(() => {
        if(!token ) navigate("/captainLogin")

          axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile` , 
            {
              headers : {
                "Authorization" : `Bearer ${token}`
                        }
            })
            .then((res) => {
              if(res.status === 200) 
              {
              setCaptain(res.data.captain)        
              setLoading(false)
              }
          }).catch((err) => {console.log(err)
            localStorage.removeItem('token')
          navigate("/captainLogin")}
        )
    }, [token])


    

  if(loading) return <h1>Loading...</h1>

  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectWrapper