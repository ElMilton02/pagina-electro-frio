import './Navbar.css'

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <div className="navbar__izquierda">
          <h1 className="navbar__logo">Electro Frío</h1>
          <div className="navbar__links">
            <button onClick={() => scrollTo('servicios')}>Servicios</button>
            <button onClick={() => scrollTo('trabajos')}>Trabajos</button>
            <button onClick={() => scrollTo('contacto')}>Contacto</button>
          </div>
        </div>

        <div className="navbar__derecha">
          <button className="navbar__llamada" onClick={() => scrollTo('contacto')}>
            <span className="navbar__llamada-icono">📞</span>
            {/* Texto corto — visible solo en mobile */}
            <span className="navbar__llamada-corto">Llamar</span>
            {/* Texto largo — visible solo en pantallas grandes */}
            <span className="navbar__llamada-largo">Contacto: +54 2314-574880</span>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar