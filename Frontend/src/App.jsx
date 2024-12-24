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
import CaptainScreen from './pages/CaptainScreen'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'

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
      <Route path='/captainScreen' element={
        <CaptainProtectWrapper>
          <CaptainScreen />
        </CaptainProtectWrapper>
      } />
      <Route path='/captain/logout' element={
        <CaptainProtectWrapper>
          <CaptainLogout />
        </CaptainProtectWrapper>
      } />
            <Route path="/riding" element={<Riding />} />

      </Routes>

    </div>
  )
}

export default App