//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaUsuarios from './ListaUsuarios'
import AgregarUsuario from './AgregarUsuario'
import EditarUsuario from './EditarUsuario'

function App() {

  return (
    <div>
      <h1>CRUD MERN STACK Yasmin</h1>
      <ListaUsuarios/>
      <AgregarUsuario/>
      <EditarUsuario/>
      <ListaUsuarios/>
    </div>
  )
}

export default App
