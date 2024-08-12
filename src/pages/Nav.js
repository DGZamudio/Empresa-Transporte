import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FaTruck, FaTruckLoading } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="app-container">
        <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
            <div className="container">
            <Link to={'/home'} className="navbar-brand"><h2>Empresa Transporte</h2></Link>
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                    <Link className="nav-link mx-2" to={'/list'}><FaTruck />Lista de camiones</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-2" to={'/cargadescarga'}><FaTruckLoading />Carga y descarga</Link>
                </li>
                <li className="nav-item ms-3">
                    <Link className="btn btn-dark rounded-5" to={'/login'}>Inicia Sesion</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>


        <div className="content-container">
            <Outlet />
        </div>

        <footer className="py-3 bg-light">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to={'/home'} className="nav-link px-2 text-muted">Home</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Features</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Pricing</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">FAQs</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">About</Link></li>
            </ul>
            <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
    </div>
  )
}

export default Nav