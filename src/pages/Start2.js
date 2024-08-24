import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { Link } from 'react-router-dom'

const Start2 = () => {
  return (
    <div className="start-container">
      <div className="content">
        <h1>Bienvenido a la gestion de las empresas de transporte <MdOutlineWavingHand /></h1>
        <h3>¿Que necesitas hacer hoy?</h3>
        <div className="row d-flex justify-content-center">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">Lista de camiones</p>
                    </div>
                    <div class="flip-card-back">
                        <p>En este apartado podras ver la lista completa de camiones y determinar el mejor camion para una carga.</p>
                        <Link className="btn btn-dark rounded-5" to={'/list'}><p class="title">Click aqui</p></Link>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">Carga y descarga de camiones</p>
                    </div>
                    <div class="flip-card-back ">
                        <p>En este apartado podras administrar todo lo relacionado con la carga y descarga de los camiones.</p>
                        <Link className="btn btn-dark rounded-5" to={'/cargadescarga'}><p class="title">Click aqui</p></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Start2