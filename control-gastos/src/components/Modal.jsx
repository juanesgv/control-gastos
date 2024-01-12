import cerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'
import { useState } from 'react'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')
    

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e =>{
        e.preventDefault();        
        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return;
        }
        guardarGasto({nombre,cantidad,categoria})
    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={cerrarBtn}
                    alt='Cerrar modal'
                    onClick={ocultarModal}
                />
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='campo'>
                    <label>Nombre del gasto</label>
                    <input id='nombre' type='text' placeholder='Añade del nombre del gasto' value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>

                <div className='campo'>
                    <label>Cantidad</label>
                    <input id='Cantidad' type='number' placeholder='Añade la cantidad del gasto' value={cantidad} onChange={e => setCantidad(Number(e.target.value))}/>
                </div>

                <div className='campo'>
                    <label htmlFor='categoria'>Categoría</label>
                    <select id='categoria' value={categoria} onChange={e => setCategoria(e.target.value)}>
                        <option value=''>-- Seleccione --</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida</option>
                        <option value='casa'>Casa</option>
                        <option value='gastos'>Gastos varios</option>
                        <option value='ocio'>Ocio</option>
                        <option value='salud'>Salud</option>
                        <option value='suscripciones'>Suscripciones</option>
                    </select>
                </div>

                <input type='submit' value='Añadir gasto' />

            </form>
        </div>
    )
}

export default Modal
