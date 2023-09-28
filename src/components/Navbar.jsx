import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {

  return (
    <nav className='navbar'>
        <a href="/" className='logo'>Non Forsit</a>
        <ul className='menu'>
            <li> <Link className='menu-link' to="/categoriaId/remeras">Remes</Link> </li>
            <li> <Link className='menu-link' to="/categoriaId/gorras">gorras</Link> </li>
            <li> <Link className='menu-link' to="/categoriaId/pantalon">pantalones</Link> </li>
            <li> <Link className='menu-link' to="/contacto">contacto</Link> </li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar