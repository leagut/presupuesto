import {useState} from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje , setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto ) < 0){
            setMensaje('no es un presupuesto valido')
        }else{
            setMensaje(' valido')
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo' >
                <label htmlFor="">Definir presupuesto</label>
                <input type="text" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={ e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" value="Añadir" id="" />
        </form>

     </div>
  )
}

export default NuevoPresupuesto