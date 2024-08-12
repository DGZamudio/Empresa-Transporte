import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RangeComponent = () => {
    const [value, setValue] = useState(50);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div data-mdb-input-init className="form- mb-4">
            <input 
                type="range" 
                className="form-range" 
                id="customRange1" 
                min="0" 
                max="1000" 
                value={value} 
                onChange={handleChange} 
            />
            <span>{value} kg</span>
            <label htmlFor="mej">Ingresa la carga para el camion</label>
        </div>
    );
};

const List = () => {
  return (
    <div className="start-container">
      <div className="content">
        <div className="d-flex justify-content-between">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Matricula</th>
                <th scope="col">Capacidad</th>
                <th scope="col">Consumo de gasolina</th>
                <th scope="col">Carga actual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">ABC 123</th>
                <td>600kg</td>
                <td>1g/15km</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>

          <div className="card">
            <div className="first-content">
              <span>Esta zona es para consultar el mejor camión</span>
            </div>
            <div className="second-content">
              <span>
                <RangeComponent />
                <Link to={'/cargadescarga'} className='btn btn-dark'>Consultar</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
