import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormClientes from './components/FormClientes'
import ListClients from './components/ListClients'
import Clientes from './pages/Clientes'
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
        <Route path='/clientes' element={<Clientes />}>

          <Route path='form' element={<FormClientes />} />
          <Route path='list' element={<ListClients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
