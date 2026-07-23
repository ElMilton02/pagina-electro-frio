import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <div className="navbar__izquierda">
          <img src={logo} alt="Electro Frío" className="navbar__logo" />
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
            <span className="navbar__llamada-largo">Contacto: +54 2314-xxxxxx</span>
          </button>
        </div>

      </div>
    </nav>
  )

}
export default Navbar