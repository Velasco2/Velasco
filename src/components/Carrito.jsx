import React from 'react'
import ItemListContainer from './ItemListContainer'
import './Carrito.css'

const Carrito = ({cant}) => {
  return (
    <div className='carrito-img dropdown-carrito'>
     <img src="https://www.svgrepo.com/show/530393/shopping-cart.svg" alt="carrito" className='dropbtn-carrito'/> 
     <span className='carrito-noti-carrito'>
      {cant}
     </span>
     <ItemListContainer greeting={"greeting"}/>
     </div> 
  )
}

export default Carrito