import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

const CartWidget = () => {

  const {cantidadEnCarrito}= useContext(CartContext);

  return (
    <div>
      <Link className='menu-link' to="/carrito">carrito</Link>
      <span className='numerito'> {cantidadEnCarrito()} </span>
    </div>
  )
}

export default CartWidget