import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1569226012317-4ae656d0a95f?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5 pl-5 flex-col flex justify-between w-full bg-red-400'>
        <img className='w-16 ml-8' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
            <Link to="/userLogin" className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
        </div>

    </div>
  )
}

export default Home