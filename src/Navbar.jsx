import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo-categoria'>
      <img src="https://th.bing.com/th/id/OIG.V_qPtN1A2yqdKB_X0nkk?pid=ImgGn" alt="calzado" className='logo' />
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
     </div>
     <div className='carrito-img'>
     <img src="https://www.svgrepo.com/show/530393/shopping-cart.svg" alt="carrito"/> 
     <span className='carrito-noti'>
      4
     </span>
     </div> 
      {/* Aquí puedes agregar elementos de la barra de navegación, como el logo, enlaces, etc. */}
    </nav>
  );
}

export default Navbar;
