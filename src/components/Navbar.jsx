import React from 'react';
import './Navbar.css'; 
import Carrito from './Carrito';
import Categorias from './Categorias';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo-categoria'>
      <img src="https://th.bing.com/th/id/OIG.V_qPtN1A2yqdKB_X0nkk?pid=ImgGn" alt="calzado" className='logo' />
      <p>Valiliani Calzados</p>
    <Categorias/>
     </div>
    <Carrito cant={4}/>
      {/* Aquí puedes agregar elementos de la barra de navegación, como el logo, enlaces, etc. */}
    </nav>
  );
}

export default Navbar;
