import React , {useContext , useEffect} from 'react'
import { Link , useLocation , useNavigate} from 'react-router-dom'
import { SocketDataContext } from '../context/SocketContext'
import LiveTracking from '../components/LiveTracking';

const Riding = () => {


  const {state} = useLocation();
  const {ride} = state

  const navigate = useNavigate();

  const {socket} = useContext(SocketDataContext);


  socket.on('ride-ended', () => {
    navigate('/homeScreen')
  })

  return (
    <div className='h-screen'>
        <Link to='/homeScreen' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-2 right-2'>
        <i className="ri-home-5-line text-lg font-medium"></i>
        </Link>
        <div className='h-1/2'>
        
        <LiveTracking/>
        </div>

        <div className='h-1/2 px-2'>
        
        <div className='flex items-center justify-between p-3'>
          <img className='h-12 rounded-full' src="https://sense.iitd.ac.in/public/storage/students_image/aaaaaa_1696412611.jpg" alt="" />
          <div className='text-right'>
            <h2 className='font-medium text-lg'>{ride?.captain?.fullname?.firstname + " " + ride?.captain?.fullname?.lastname}</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain?.vehicle?.plate}</h4>
            <p className='text-gray-600 text-sm'>{ride?.captain?.vehicle?.vehicleName}</p>
          </div>
        </div>

      <div className="flex justify-between flex-col items-center gap-4">
        
        <div className="w-full flex flex-col gap-4">
          

        <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {ride?.destination.substring(0, ride?.destination.lastIndexOf(","))}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {ride?.destination.substring(ride?.destination.lastIndexOf(",") + 1).trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center p-2">
          <i className="ri-cash-line text-lg"></i>          
          <div>
              <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash
              </p>
            </div>
          </div>

        </div>

      </div>
<button className="w-full bg-black text-white py-3 mt-3">Pay</button>
        </div>

    </div>
  )
}

export default Riding