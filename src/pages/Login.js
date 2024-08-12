import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="start-container">
      <div className="content">
      <form>
        <div data-mdb-input-init class="form-floating mb-4">
            <input type="email" id="form2Example1" class="form-control text-light bg-transparent border-bottom" placeholder='Correo'/>
            <label for="form2Example1">Correo</label>
        </div>

        <div data-mdb-input-init class="form-floating mb-4">
            <input type="password" id="form2Example2" class="text-light form-control bg-transparent border-bottom" placeholder='Contraseña'/>
            <label for="form2Example2" className='bg-transparent'>Contraseña</label>
        </div>

        <div class="row mb-4">
            <div class="col d-flex justify-content-center">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Acuerdame </label>
            </div>
            </div>

            <div class="col">
            <a href="#!" className='link-light link-offset-2 link-underline-opacity-45 link-underline-opacity-100-hover'>¿Olvidaste la contraseña?</a>
            </div>
        </div>

        <Link to={'/home'}><button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-light rounded-5 btn-block mb-4">Inicia sesion</button></Link>

        <div class="text-center">
            <p>No estas registrado <a href="#!" className='link-light link-offset-2 link-underline-opacity-45 link-underline-opacity-100-hover'>¡Registrate!</a></p>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login