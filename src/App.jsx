import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import HomePage from './components/homepage/HomePage'
import Login from './components/login/Login'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Login' element={<Login/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
