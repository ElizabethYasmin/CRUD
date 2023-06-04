//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <h1>CRUD MERN STACK Yasmin</h1>
      <BrowserRouter>
        <Routes>

          <Route path = '/' element = {<ListaUsuarios/>}exact></Route>
          <Route path = '/agregarUsuario' element = {<AgregarUsuario/>}exact></Route>
          <Route path = '/editarUsuario' element = {<EditarUsuario/>}exact></Route>
        
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
