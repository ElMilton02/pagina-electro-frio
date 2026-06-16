import './Servicios.css'

const servicios = [
  {
    id: 1,
    titulo: 'Instalación',
    descripcion: 'Instalación de equipos de refrigeración industrial.',
    imagen: 'https://picsum.photos/seed/serv1/400/300',
  },
  {
    id: 2,
    titulo: 'Mantenimiento',
    descripcion: 'Mantenimiento preventivo para alargar la vida útil de tus equipos.',
    imagen: 'https://picsum.photos/seed/serv2/400/300',
  },
  {
    id: 3,
    titulo: 'Reparación',
    descripcion: 'Diagnóstico y reparación de cualquier falla.',
    imagen: 'https://picsum.photos/seed/serv3/400/300',
  },
  {
    id: 4,
    titulo: 'Urgencias 24hs',
    descripcion: 'Atención inmediata para situaciones críticas.',
    imagen: 'https://picsum.photos/seed/serv4/400/300',
  },
]

function ServicioCard({ servicio }) {
  return (
    <div className="servicio-card">
      <img
        src={servicio.imagen}
        alt={servicio.titulo}
        className="servicio-card__imagen"
      />
      <h3 className="servicio-card__titulo">{servicio.titulo}</h3>
      <p className="servicio-card__descripcion">{servicio.descripcion}</p>
    </div>
  )
}

function Servicios() {
  return (
    <section className="servicios" id="servicios">
  <div className="servicios__header">
    <h2 className="servicios__titulo">Servicios</h2>
    <p className="servicios__subtitulo">
      Soluciones completas de refrigeración industrial, desde la instalación
      hasta el mantenimiento y reparación de tus equipos.
    </p>
  </div>
  <div className="servicios__grid">
    {servicios.map((servicio) => (
      <ServicioCard key={servicio.id} servicio={servicio} />
    ))}
  </div>
</section>
  )
}

export default Servicios