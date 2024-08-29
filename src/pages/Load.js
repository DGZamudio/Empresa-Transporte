import React, {useState} from 'react'
import { FaTruckLoading } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const Load = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const location = useLocation();

  const { rol } = location.state || {};

  return (
    <div className="start-container">
      <div className="content">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" checked={isChecked} onChange={handleCheckboxChange} />
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
                    {
                        rol === '1' ? (          
                            <>           
                                <button className="btn btn-success"><FaTruckLoading />Carga</button>
                                <button className="btn btn-danger"><FaTruckLoading />Descarga</button>
                            </>   
                        ) : (
                            <button className="btn btn-success"><FaTruckLoading />Hacer pedido</button>
                        )
                    }
                    </td>
                </tr>
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default Load