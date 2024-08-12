import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="start-container">
      <div className="content">
        <h1>Bienvenido a la gestion de la empresa de transporte</h1>
        <p>Para comenzar por favor inicia sesion.</p>
        <Link to={'login'}><button className="btn btn-dark rounded-5">¡Inicia Sesion aqui!</button></Link>
      </div>
    </div>
  )
}

export default Start