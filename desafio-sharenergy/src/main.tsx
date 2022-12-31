import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import UserGenerator from './pages/UserGenerator'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/generator' element={<UserGenerator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
