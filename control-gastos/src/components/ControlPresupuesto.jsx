import {useState,useEffect} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos, setPresupuesto, setGastos, setIsValidPresupuesto}) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(()=>{
    const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0);
    setGastado(totalGastado)

    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible)

    const nuevoPorcentaje = (((presupuesto - totalDisponible)/presupuesto)*100).toFixed(2);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
    
  }, [gastos])
  

  const formatearCantidad = (cantidad)=>{
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
  }

  const handleResetApp = () =>{
    const resultado = confirm('¿Desear reiniciar presupuesto y gastos?')

    if(resultado){
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }else{

    }
  }
    
  return (
    <div className='contenedor-presupuesto contendeor sombra dos-columnas'>
        <div>
            <CircularProgressbar
              value={porcentaje}
              styles={buildStyles({
                pathColor: porcentaje > 100 ? '#FF3B3B':'#3B82F6',
                trailColor: '#F5F5F5',
                textColor: '#3B82F6'
              })}
              text={`${porcentaje}% Gastado`}
            />
        </div>
      <div className='contenido-presupuesto'>
        <button className='reset-app' type='button' onClick={handleResetApp}>
          Resetear app
        </button>
        <p>
            <span>
                Presupuesto:
            </span>
            {formatearCantidad(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? 'negativo': ''}`}>
            <span>
                Disponbile:
            </span>
            {formatearCantidad(disponible)}
        </p>

        <p>
            <span>
                Gastado:
            </span>
            {formatearCantidad(gastado)}
        </p>

      </div>
    </div>
  )
}

export default ControlPresupuesto
