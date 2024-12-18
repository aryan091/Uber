import React, { useContext } from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin' 
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import HomeScreen from './pages/HomeScreen'
import UserLogout from './pages/UserLogout'
import UserProtectWrapper from './pages/UserProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/userSignUp" element={<UserSignUp />} />
      <Route path="/captainLogin" element={<CaptainLogin />} />
      <Route path="/captainSignUp" element={<CaptainSignUp />}  /> 
      <Route path='/homeScreen' element={
        <UserProtectWrapper>
          <HomeScreen />
        </UserProtectWrapper>
      } />
      <Route path='/user/logout' element={
        <UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>
      } />
      </Routes>
    </div>
  )
}

export default App