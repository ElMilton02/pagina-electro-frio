import './Footer.css'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__inner">

        {/* Logo y descripción */}
        <div className="footer__marca">
          <img src={logo} alt="Electro Frío" className="footer__logo" />
          <p className="footer__slogan">Especialistas en refrigeración industrial.</p>
        </div>

        {/* Contacto */}
        <div className="footer__seccion">
          <h3 className="footer__titulo">Contacto</h3>

          <div className="footer__contacto-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer__contacto-icono">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="tel:+549231461397" className="footer__contacto-texto">+54 9 2314 61-3197</a>
          </div>

          <div className="footer__contacto-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer__contacto-icono">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:contacto@electrofrio.com.ar" className="footer__contacto-texto">contacto@electrofrio.com.ar</a>
          </div>

          <div className="footer__contacto-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer__contacto-icono">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="footer__contacto-texto">Urdampilleta, Buenos Aires</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer__seccion">
          <h3 className="footer__titulo">Redes Sociales</h3>
          <div className="footer__redes">

            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__red footer__red--facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/electrofriorefrigeracion/" target="_blank" rel="noopener noreferrer" className="footer__red footer__red--instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__red footer__red--whatsapp" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.485-5.12-1.335L3.2 21.6l.96-3.52A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>

          </div>
        </div>

      </div>

      <div className="footer__copyright">
        <p>© {new Date().getFullYear()} Electro Frío. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer