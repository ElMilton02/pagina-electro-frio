import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  const scrollTo = (id) => {
    const elemento = document.getElementById(id)
    const alturaNavbar = document.querySelector('.navbar').offsetHeight
    const posicion = elemento.getBoundingClientRect().top + window.scrollY - alturaNavbar

  window.scrollTo({
    top: posicion,
    behavior: 'smooth'
  })
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
           <a href="tel:+549231461397" className="navbar__llamada">
            <span className="navbar__llamada-icono">📞</span>
            {/* Texto corto — visible solo en mobile */}
            <span className="navbar__llamada-corto">Llamar</span>
            {/* Texto largo — visible solo en pantallas grandes */}
            <span className="navbar__llamada-largo">Contacto: +54 9 2314 61-3197</span>
          </a>  
        </div>

      </div>
    </nav>
  )

}
export default Navbar