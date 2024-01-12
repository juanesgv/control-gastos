import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

  const formatearCantidad = (cantidad)=>{
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
  }
    
  return (
    <div className='contenedor-presupuesto contendeor sombra dos-columnas'>
        <div>
            <p>gráfica aquí</p>
        </div>
      <div className='contenido-presupuesto'>
        <p>
            <span>
                Presupuesto:
            </span>
            {formatearCantidad(presupuesto)}
        </p>

        <p>
            <span>
                Disponbile:
            </span>
            {formatearCantidad(0)}
        </p>

        <p>
            <span>
                Gastado:
            </span>
            {formatearCantidad(0)}
        </p>

      </div>
    </div>
  )
}

export default ControlPresupuesto
