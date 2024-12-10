import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin' 
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/userSignUp" element={<UserSignUp />} />
      <Route path="/captainLogin" element={<CaptainLogin />} />
      <Route path="/captainSignUp" element={<CaptainSignUp />}  /> 
      </Routes>
    </div>
  )
}

export default App