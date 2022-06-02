import React from 'react'

const NuevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form action="" className='formulario'>
            <div className='campo' >
                <label htmlFor="">Definir presupuesto</label>
                <input type="text" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                />
            </div>
            <input type="submit" value="Añadir" id="" />
        </form>

     </div>
  )
}

export default NuevoPresupuesto