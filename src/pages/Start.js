import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const RangeComponent = () => {
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
      setValue(event.target.value);
  };

  const handleNumber = (event) => {
      setNumber(event.target.value);
  };

  return (
    <>
      <div className='row'>
        <div className='col'>
          <div data-mdb-input-init className="form- mb-4">
            <input
              type="range"
              className="form-range"
              id="customRange1"
              min="1"
              max="1000"
              value={value}
              onChange={handleChange} />
            <span>{value} kg</span>
            <label htmlFor="mej">Elige el peso de tu paquete</label>
        </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div data-mdb-input-init className="form- mb-4">
              <input
                type="range"
                className="form-range"
                id="customRange1"
                min="1"
                max="15"
                value={number}
                onChange={handleNumber} />
              <span>{number}</span>
              <label htmlFor="mej">Elige la cantidad de paquetes</label>
          </div>
        </div>
      </div>
</>
  );
};

const Start = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate ();

  const handleSearchClick = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      window.alert('Por favor, inicie sesión para continuar');
      navigate('/login'); 
    } else {
      navigate('/cargadescarga');
    }
  };
  return (
    <div className="start-container">
      <div className="content">
        <h1>Bienvenido al portal de empresas de transporte</h1>
        <div className="card2">
        <p className="card-title2">Product Name</p>
          <form className="row g-3">
            <div className="col-md-6">
              <select id="inputState" className="form-select">
                <option selected>¿Empresa en especifico?</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="first-content">
                  <span>Elige el peso de tu paquete y cantidad</span>
                </div>
                <div className="second-content">
                  <RangeComponent />
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <button type="submit" className="btn btn-dark" onClick={handleSearchClick}>Hacer busqueda</button>
            </div>
          </form>
        <div className="go-corner">
          <div className="go-arrow"></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Start