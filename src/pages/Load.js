import React, {useState} from 'react'
import { FaTruckLoading } from "react-icons/fa";

const Load = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="start-container">
      <div className="content">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" checked={isChecked} onChange={handleCheckboxChange} />
                <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                </label>
            </div>
            <table className="table table-dark table-striped">
                <thead>
                <tr>
                    <th scope="col">Matricula</th>
                    {
                        isChecked && (                        
                            <th scope='col'>Empresa</th>
                        )
                    }
                    <th scope="col">Capacidad</th>
                    <th scope="col">Consumo de gasolina</th>
                    <th scope="col">Carga actual</th>
                    <th scope="col">Carga y Descarga</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">ABC 123</th>
                    {
                        isChecked && (
                            <td>CargasJW</td>
                        )
                    } 
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