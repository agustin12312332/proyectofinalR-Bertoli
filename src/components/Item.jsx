import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className='producto'>
            <img src={producto.imagen} />
            <div>
                <h4>{producto.titulo}</h4>
                <p>precio: &{producto.precio}</p>  
                <Link className="ver-mas" to={`/item/${producto.id}`}>ver mas</Link>
            </div>
        </div>
    )
}

export default Item