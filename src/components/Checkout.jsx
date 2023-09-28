import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext';
import { useForm } from 'react-hook-form';
import {collection, addDoc, doc} from "firebase/firestore"
import {db} from "../firebase/config"

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const {register, handleSubmit} = useForm();

        const comprar = (data) =>{
            const pedido = {
                cliente: data,
                productos: carrito,
                total: precioTotal(),
            }
            console.log(pedido);

            const pedidosRef = collection(db, "pedidos");
            addDoc(pedidosRef, pedido)
                .then((doc) =>{
                    setPedidoId(doc.id)
                    vaciarCarrito();
                })
        }


        if (pedidoId) {
            return (
                <div className='container'>
                    <h1 className='main-title'>Muchas gracias por su compra</h1>
                    <p>tu numero de pedido es: {pedidoId}</p>
                </div>
            )
        }
  return (
    <div className='container'>
    <h1 className='main-title'>Contacto</h1>
    <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='ingresa tu nombre' {...register("nombre")}/>
        <input type="text" placeholder='ingresa tu e-mail' {...register("email")}/>
        <input type="text" placeholder='ingresa tu telefono' {...register("telefono")}/>

        <button className='enviar'type='submit'>enviar</button>

    </form>
</div>
  )
}

export default Checkout