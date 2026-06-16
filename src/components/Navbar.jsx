import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* Logo y links juntos a la izquierda */}
        <div className="navbar__izquierda">
          <h1 className="navbar__logo">Electro Frío</h1>
          <div className="navbar__links">
            <button onClick={() => scrollTo('servicios')}>Servicios</button>
            <button onClick={() => scrollTo('trabajos')}>Trabajos</button>
            <button onClick={() => scrollTo('contacto')}>Contacto</button>
          </div>
        </div>

        {/* Botón llamada a la derecha */}
        <div className="navbar__derecha">
          <a href="tel:+54249xxxxxxx" className="navbar__llamada">
             Contacto: +54 249 xxx-xxxx
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar