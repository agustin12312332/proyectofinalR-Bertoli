import React from 'react'
import { useForm } from 'react-hook-form';
const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar = (data) =>{
        console.log(data);
    }



  return (
    <div className='container'>
        <h1 className='main-title'>Contacto</h1>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='ingresa tu nombre' {...register("nombre")}/>
            <input type="text" placeholder='ingresa tu e-mail' {...register("email")}/>
            <input type="text" placeholder='ingresa tu telefono' {...register("telefono")}/>

            <button className='enviar'type='submit'>enviar</button>

        </form>
    </div>
  )
}

export default Contacto