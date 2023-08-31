import React from 'react'
import './Navbar.css';

const Categorias = () => {
  return (
    <div className='dropdown'>
    <button className='dropbtn'>
      Categorias
    </button>
    <div className='dropdown-content'>
      <a href="#">Fondo45</a>
      <a href="#">Fondo590</a>
      <a href="#">Fondo999</a>
    </div>
   </div>
  )
}

export default Categorias