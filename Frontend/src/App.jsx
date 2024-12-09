import React from 'react'
import { Route , Routes} from 'react-router-dom'

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