import React from 'react'
import { FaTruckLoading } from "react-icons/fa";

const Load = () => {
  return (
    <div className="start-container">
      <div className="content">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Matricula</th>
                    <th scope="col">Capacidad</th>
                    <th scope="col">Consumo de gasolina</th>
                    <th scope="col">Carga actual</th>
                    <th scope="col">Carga y Descarga</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">ABC 123</th>
                    <td>600kg</td>
                    <td>1g/15km</td>
                    <td>0</td>
                    <td>
                        <button className="btn btn-success"><FaTruckLoading />Carga</button>
                        <button className="btn btn-danger"><FaTruckLoading />Descarga</button>
                    </td>
                </tr>
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default Load