import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import RandomDog from './pages/RandomDog'
import StatusCodeCat from './pages/StatusCodeCat'
import UserGenerator from './pages/UserGenerator'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/generator' element={<UserGenerator />} />
        <Route path='/statusCode' element={<StatusCodeCat />} />
        <Route path='/randomDog' element={<RandomDog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
