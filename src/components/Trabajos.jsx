import { useState } from 'react'
import './Trabajos.css'

const trabajos = [
  { id: 1, titulo: 'Cámara frigorífica', descripcion: 'Instalación completa en supermercado local.', imagen: 'https://picsum.photos/seed/trabajo1/600/400' },
  { id: 2, titulo: 'Mantenimiento industrial', descripcion: 'Mantenimiento preventivo en frigorífico.', imagen: 'https://picsum.photos/seed/trabajo2/600/400' },
  { id: 3, titulo: 'Reparación de compresor', descripcion: 'Diagnóstico y reparación en laboratorio farmacéutico.', imagen: 'https://picsum.photos/seed/trabajo3/600/400' },
  { id: 4, titulo: 'Instalación en frigorífico', descripcion: 'Sistema completo para cámara de congelado.', imagen: 'https://picsum.photos/seed/trabajo4/600/400' },
  { id: 5, titulo: 'Tablero eléctrico', descripcion: 'Renovación de tablero para planta industrial.', imagen: 'https://picsum.photos/seed/trabajo5/600/400' },
  { id: 6, titulo: 'Unidad condensadora', descripcion: 'Reemplazo e instalación en local comercial.', imagen: 'https://picsum.photos/seed/trabajo6/600/400' },
  { id: 7, titulo: 'Cámara de lácteos', descripcion: 'Diseño e instalación a medida.', imagen: 'https://picsum.photos/seed/trabajo7/600/400' },
  { id: 8, titulo: 'Service preventivo', descripcion: 'Revisión trimestral de equipos industriales.', imagen: 'https://picsum.photos/seed/trabajo8/600/400' },
  { id: 9, titulo: 'Reparación de urgencia', descripcion: 'Atención fuera de horario en planta frigorífica.', imagen: 'https://picsum.photos/seed/trabajo9/600/400' },
]

function TrabajosCard({ trabajo }) {
  return (
    <div className="trabajo-card">
      <img src={trabajo.imagen} alt={trabajo.titulo} className="trabajo-card__imagen" />
      <div className="trabajo-card__contenido">
        <h3 className="trabajo-card__titulo">{trabajo.titulo}</h3>
        <p className="trabajo-card__descripcion">{trabajo.descripcion}</p>
      </div>
    </div>
  )
}

function Trabajos() {
  const porPagina = 3
  const [pagina, setPagina] = useState(0)

  // 'salida-izq' | 'salida-der' | 'entrada-izq' | 'entrada-der' | ''
  const [transicion, setTransicion] = useState('')

  const totalPaginas = Math.ceil(trabajos.length / porPagina)
  const inicio = pagina * porPagina
  const trabajosVisibles = trabajos.slice(inicio, inicio + porPagina)

  // Cambia de página en dos pasos: primero la salida, después la entrada
  const irAPagina = (nuevaPagina, direccion) => {
    if (transicion) return // evita clickear mientras ya está animando

    setTransicion(direccion === 'siguiente' ? 'salida-izq' : 'salida-der')

    setTimeout(() => {
      setPagina(nuevaPagina)
      setTransicion(direccion === 'siguiente' ? 'entrada-der' : 'entrada-izq')

      setTimeout(() => {
        setTransicion('')
      }, 300)
    }, 300)
  }

  const paginaAnterior = () => {
    const nueva = pagina === 0 ? totalPaginas - 1 : pagina - 1
    irAPagina(nueva, 'anterior')
  }

  const paginaSiguiente = () => {
    const nueva = pagina === totalPaginas - 1 ? 0 : pagina + 1
    irAPagina(nueva, 'siguiente')
  }

  return (
    <section className="trabajos" id="trabajos">
      <h2 className="trabajos__titulo">Trabajos Realizados</h2>

      <div className="trabajos__carrusel">
        <button className="trabajos__flecha" onClick={paginaAnterior}>‹</button>

        <div className={`trabajos__grid trabajos__grid--${transicion}`}>
          {trabajosVisibles.map((trabajo) => (
            <TrabajosCard key={trabajo.id} trabajo={trabajo} />
          ))}
        </div>

        <button className="trabajos__flecha" onClick={paginaSiguiente}>›</button>
      </div>

      <div className="trabajos__indicadores">
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <button
            key={index}
            className={`trabajos__punto ${index === pagina ? 'trabajos__punto--activo' : ''}`}
            onClick={() => setPagina(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Trabajos