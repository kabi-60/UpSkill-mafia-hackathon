import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import './App.css'
import Signup from './Components/Signup/Signup';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>


      </Routes>



    </BrowserRouter>
  )
}

export default App