import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [role, setRole] = useState('');
  const [model, setModel] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <div className="start-container">
      <div className="content">
        <form>
          <div className="mb-4">
            <select 
              className="form-select bg-transparent text-light" 
              aria-label="Default select example" 
              onChange={handleRoleChange}
            >
              <option value="" selected className="bg-dark">Selecciona el rol</option>
              <option value="1" className="bg-dark">Cliente</option>
              <option value="2" className="bg-dark">Conductor</option>
              <option value="3" className="bg-dark">Empresa</option>
            </select>
          </div>

          {role === '3' && (
            <>
            <div className='row'>
                <div className='col'>
                  <div data-mdb-input-init className="form-floating mb-4">
                    <input 
                      type="text" 
                      id="formName" 
                      className="form-control text-light bg-transparent border-bottom" 
                      placeholder='Nombre de la empresa'
                    />
                    <label htmlFor="formName">
                      Nombre de la empresa
                    </label>
                  </div>
                </div>
                <div className='col'>
                  <div data-mdb-input-init className="form-floating mb-4">
                  <input 
                    type="text" 
                    id="formRUC" 
                    className="form-control text-light bg-transparent border-bottom" 
                    placeholder='RUC'
                  />
                  <label htmlFor="formRUC">RUC</label>
                  </div>
                </div>
            </div>
            <div className='row'>
              <div className='col'>
                  <div data-mdb-input-init className="form-floating mb-4">
                      <input 
                          type="password" 
                          id="formPassword" 
                          className="form-control text-light bg-transparent border-bottom" 
                          placeholder='Contraseña'
                      />
                      <label htmlFor="formPassword">Contraseña</label>
                  </div>
              </div>
              <div className='col'>
                  <div data-mdb-input-init className="form-floating mb-4">
                      <input 
                          type="password" 
                          id="formPassword1" 
                          className="form-control text-light bg-transparent border-bottom" 
                          placeholder='Confirmar contraseña'
                      />
                      <label htmlFor="formPassword1">Confirmar contraseña</label>
                  </div>
              </div>
            </div>
            <div className='row'>
              <div data-mdb-input-init className="form-floating mb-4">
                  <input 
                      type="text" 
                      id="formEmail" 
                      className="form-control text-light bg-transparent border-bottom" 
                      placeholder='Correo Electronico'
                  />
                  <label htmlFor="formEmail">Correo Electronico</label>
              </div>
            </div>
            </>
          )}

          {role === '2' && (
            <>
                <div className='row'>
                    <div className='col'>
                        <div data-mdb-input-init className="form-floating mb-4">
                            <input 
                                type="text" 
                                id="formName" 
                                className="form-control text-light bg-transparent border-bottom" 
                                placeholder='Nombre'
                            />
                            <label htmlFor="formName">
                                Nombre
                            </label>
                        </div>
                    </div>
                    <div className='col'>
                        <div data-mdb-input-init className="form-floating mb-4">
                            <input 
                                type="text" 
                                id="formEmail" 
                                className="form-control text-light bg-transparent border-bottom" 
                                placeholder='Correo Electronico'
                            />
                            <label htmlFor="formEmail">Correo Electronico</label>
                        </div>
                    </div>
                    <div className='col'>
                        <div data-mdb-input-init className="form-floating mb-4">
                            <input 
                                type="password" 
                                id="formPassword" 
                                className="form-control text-light bg-transparent border-bottom" 
                                placeholder='Contraseña'
                            />
                            <label htmlFor="formPassword">Contraseña</label>
                        </div>
                    </div>
                    <div className='col'>
                        <div data-mdb-input-init className="form-floating mb-4">
                            <input 
                                type="password" 
                                id="formPassword1" 
                                className="form-control text-light bg-transparent border-bottom" 
                                placeholder='Confirmar contraseña'
                            />
                            <label htmlFor="formPassword1">Confirmar contraseña</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div data-mdb-input-init className="form-floating mb-4">
                            <input 
                                type="text" 
                                id="formPlaca" 
                                className="form-control text-light bg-transparent border-bottom" 
                                placeholder='Placa'
                            />
                            <label htmlFor="formPlaca">Placa camion</label>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-4">
                        <select 
                            className="form-select bg-transparent text-light" 
                            aria-label="Default select example" 
                            onChange={handleModelChange}
                        >
                            <option value="" selected className="bg-dark">Modelo Camion</option>
                            <option value="a" className="bg-dark">Volvo Gama FH</option>
                            <option value="b" className="bg-dark">Mercedes Gama Actros</option>
                            <option value="c" className="bg-dark">DAF Gama FT</option>
                            <option value="otro" className="bg-dark">¿No esta su camion?</option>
                        </select>
                            {model === 'otro' && (
                                <>
                                  <div className='row'>
                                    <div className='col'>
                                      <div data-mdb-input-init className="form-floating mb-4">
                                          <input 
                                          type="text" 
                                          id="formmodel" 
                                          className="form-control text-light bg-transparent border-bottom" 
                                          placeholder='Modelo de su camion'
                                          />
                                          <label htmlFor="formmodel">Modelo de su camion</label>
                                      </div>
                                    </div>
                                    <div className='col'>
                                      <div data-mdb-input-init className="form-floating mb-4">
                                          <input 
                                          type="text" 
                                          id="formconsume" 
                                          className="form-control text-light bg-transparent border-bottom" 
                                          placeholder='Consumo de su camion'
                                          />
                                          <label htmlFor="formconsume">Consumo de su camion</label>
                                      </div>
                                    </div>
                                  </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </>
          )}

        {role === '1' && (
            <>
            <div className='row'>
                <div className='col'>
                    <div data-mdb-input-init className="form-floating mb-4">
                        <input 
                            type="text" 
                            id="formName" 
                            className="form-control text-light bg-transparent border-bottom" 
                            placeholder='Nombre'
                        />
                        <label htmlFor="formName">
                            Nombre
                        </label>
                    </div>
                    <div data-mdb-input-init className="form-floating mb-4">
                        <input 
                            type="text" 
                            id="formEmail" 
                            className="form-control text-light bg-transparent border-bottom" 
                            placeholder='Correo Electronico'
                        />
                        <label htmlFor="formEmail">
                            Correo Electronico
                        </label>
                    </div>
                </div>
                <div className='col'>
                    <div data-mdb-input-init className="form-floating mb-4">
                        <input 
                            type="password" 
                            id="formPassword" 
                            className="form-control text-light bg-transparent border-bottom" 
                            placeholder='Contraseña'
                        />
                        <label htmlFor="formPassword">Contraseña</label>
                    </div>
                    <div data-mdb-input-init className="form-floating mb-4">
                        <input 
                            type="password" 
                            id="formPassword1" 
                            className="form-control text-light bg-transparent border-bottom" 
                            placeholder='Confirmar contraseña'
                        />
                        <label htmlFor="formPassword1">Confirmar contraseña</label>
                    </div>
                </div>
            </div>
            </>
        )}

          <Link to={'/login'}>
            <button 
              type="button" 
              data-mdb-button-init 
              data-mdb-ripple-init 
              className="btn btn-light rounded-5 btn-block m-4"
            >
              Crear
            </button>
          </Link>

          <div className="text-center">
            <p>¿Quieres iniciar sesión? 
              <a href="/login" className='link-light link-offset-2 link-underline-opacity-45 link-underline-opacity-100-hover'>
                ¡Inicia sesión aquí!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
