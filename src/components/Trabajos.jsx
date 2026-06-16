import './Trabajos.css'

const trabajos = [
  {
    id: 1,
    titulo: 'Cámara frigorífica',
    descripcion: 'Instalación completa en supermercado local.',
    imagen: 'https://picsum.photos/seed/trabajo1/600/400',
  },
  {
    id: 2,
    titulo: 'Mantenimiento industrial',
    descripcion: 'Mantenimiento preventivo en frigorífico.',
    imagen: 'https://picsum.photos/seed/trabajo2/600/400',
  },
  {
    id: 3,
    titulo: 'Reparación de compresor',
    descripcion: 'Diagnóstico y reparación en laboratorio farmacéutico.',
    imagen: 'https://picsum.photos/seed/trabajo3/600/400',
  },
]

function TrabajosCard({ trabajo }) {
  return (
    <div className="trabajo-card">
      <img
        src={trabajo.imagen}
        alt={trabajo.titulo}
        className="trabajo-card__imagen"
      />
      <div className="trabajo-card__contenido">
        <h3 className="trabajo-card__titulo">{trabajo.titulo}</h3>
        <p className="trabajo-card__descripcion">{trabajo.descripcion}</p>
      </div>
    </div>
  )
}

function Trabajos() {
  return (
    <section className="trabajos" id="trabajos">
      <h2 className="trabajos__titulo">Trabajos Realizados</h2>
      <div className="trabajos__grid">
        {trabajos.map((trabajo) => (
          <TrabajosCard key={trabajo.id} trabajo={trabajo} />
        ))}
      </div>
    </section>
  )
}

export default Trabajos