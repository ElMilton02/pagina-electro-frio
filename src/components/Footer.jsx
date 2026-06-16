import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Logo y descripción */}
        <div className="footer__marca">
          <h2 className="footer__logo">Electro Frío</h2>
          <p className="footer__slogan">Especialistas en refrigeración industrial.</p>
        </div>

        {/* Contacto */}
        <div className="footer__seccion">
          <h3 className="footer__titulo">Contacto</h3>
          <p>+54 249 xxx-xxxx</p>
          <p>contacto@electrofrio.com.ar</p>
          <p>Tandil, Buenos Aires</p>
        </div>

        {/* Redes sociales */}
        <div className="footer__seccion">
          <h3 className="footer__titulo">Redes Sociales</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <p>© {new Date().getFullYear()} Electro Frío. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer