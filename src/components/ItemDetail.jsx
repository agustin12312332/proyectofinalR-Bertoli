import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../CartContext/CartContext"

const ItemDetail = ( {item} ) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext)
    console.log(carrito)


    const [cantidad, setCantidad] = useState(1)
    
    const handleRestar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () =>{
    cantidad  < item.stock && setCantidad(cantidad + 1)
    }



    return (
      <div className='container'>
          <div className='producto-detalle'>
              <img src={item.imagen} alt={item.titulo} />

              <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.descripcion}</p>
                  <p>{item.categoria}</p>
                  <p>{item.precio}</p>
                  <ItemCount 
                  cantidad={cantidad} 
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handelAgregar={() =>{agregarAlCarrito(item, cantidad)}}
                  />
                  
              </div>
          </div>
      </div>
    )
  }

export default ItemDetail