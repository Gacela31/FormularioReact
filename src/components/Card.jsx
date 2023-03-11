
import React from 'react'

const Card = ({animal, nombre, peso, selectValue}) => {
  return (
    <div className='caja'>
        <h2 className='color'>Mi animal Favorito es: {animal}</h2>
        <h3>El nombre de mi mascota es: {nombre}</h3>
        <p>{nombre} pesa: {peso} kilos y es {selectValue}</p>
    </div>
  )
}

export default Card