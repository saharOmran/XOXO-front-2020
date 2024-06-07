import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import HomePage from './components/homepage/HomePage'
import Login from './components/login/Login'
import Game from './components/game/Game'
import Table from './components/table/Table'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Game' element={<Game/>} />
            <Route path='/Table' element={<Table/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
