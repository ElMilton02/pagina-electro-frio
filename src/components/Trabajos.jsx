import { useState } from 'react'
import './Trabajos.css'

const trabajos = [
  {
    id: 1,
    titulo: 'Cámara frigorífica',
    descripcion: 'Instalación completa en supermercado local.',
    procedimiento: 'Se realizó el relevamiento del espacio disponible, diseño de la cámara a medida, instalación de paneles aislantes, montaje de la unidad condensadora y evaporadora, y puesta en marcha con control de temperatura digital.',
    imagenes: [
      'https://picsum.photos/seed/trabajo1a/800/600',
      'https://picsum.photos/seed/trabajo1b/800/600',
      'https://picsum.photos/seed/trabajo1c/800/600',
    ],
  },
  {
    id: 2,
    titulo: 'Mantenimiento industrial',
    descripcion: 'Mantenimiento preventivo en frigorífico.',
    procedimiento: 'Revisión completa del circuito de gas, limpieza de condensadores, verificación de presiones de trabajo, control de aislaciones y ajuste de termostatos para optimizar el consumo energético.',
    imagenes: [
      'https://picsum.photos/seed/trabajo2a/800/600',
      'https://picsum.photos/seed/trabajo2b/800/600',
    ],
  },
  {
    id: 3,
    titulo: 'Reparación de compresor',
    descripcion: 'Diagnóstico y reparación en laboratorio farmacéutico.',
    procedimiento: 'Diagnóstico de falla mediante análisis de presiones y temperaturas. Se detectó pérdida de gas en el circuito, se reparó la fuga, se recargó el sistema y se verificó el funcionamiento durante 24hs antes de la entrega.',
    imagenes: [
      'https://picsum.photos/seed/trabajo3a/800/600',
      'https://picsum.photos/seed/trabajo3b/800/600',
      'https://picsum.photos/seed/trabajo3c/800/600',
    ],
  },
  {
    id: 4,
    titulo: 'Instalación en frigorífico',
    descripcion: 'Sistema completo para cámara de congelado.',
    procedimiento: 'Diseño e instalación de sistema de congelado a -18°C, incluyendo aislación térmica reforzada, sistema de desescarche automático y monitoreo remoto de temperatura.',
    imagenes: [
      'https://picsum.photos/seed/trabajo4a/800/600',
      'https://picsum.photos/seed/trabajo4b/800/600',
    ],
  },
  {
    id: 5,
    titulo: 'Tablero eléctrico',
    descripcion: 'Renovación de tablero para planta industrial.',
    procedimiento: 'Reemplazo completo del tablero eléctrico, actualización de protecciones termomagnéticas, instalación de contactores nuevos y cableado conforme a normas vigentes.',
    imagenes: [
      'https://picsum.photos/seed/trabajo5a/800/600',
      'https://picsum.photos/seed/trabajo5b/800/600',
    ],
  },
  {
    id: 6,
    titulo: 'Unidad condensadora',
    descripcion: 'Reemplazo e instalación en local comercial.',
    procedimiento: 'Desmontaje de unidad antigua, instalación de nueva unidad condensadora de mayor eficiencia, conexión de circuito de gas y prueba de funcionamiento.',
    imagenes: [
      'https://picsum.photos/seed/trabajo6a/800/600',
      'https://picsum.photos/seed/trabajo6b/800/600',
    ],
  },
  {
    id: 7,
    titulo: 'Cámara de lácteos',
    descripcion: 'Diseño e instalación a medida.',
    procedimiento: 'Cámara diseñada específicamente para conservación de productos lácteos, con control de humedad y temperatura constante entre 2°C y 4°C.',
    imagenes: [
      'https://picsum.photos/seed/trabajo7a/800/600',
      'https://picsum.photos/seed/trabajo7b/800/600',
    ],
  },
  {
    id: 8,
    titulo: 'Service preventivo',
    descripcion: 'Revisión trimestral de equipos industriales.',
    procedimiento: 'Plan de mantenimiento programado que incluye limpieza de filtros, verificación de presiones, control de fugas y generación de informe técnico.',
    imagenes: [
      'https://picsum.photos/seed/trabajo8a/800/600',
      'https://picsum.photos/seed/trabajo8b/800/600',
    ],
  },
  {
    id: 9,
    titulo: 'Reparación de urgencia',
    descripcion: 'Atención fuera de horario en planta frigorífica.',
    procedimiento: 'Atención de urgencia ante falla total del sistema de frío. Diagnóstico rápido, reparación in situ y puesta en marcha en menos de 4 horas para evitar pérdida de mercadería.',
    imagenes: [
      'https://picsum.photos/seed/trabajo9a/800/600',
      'https://picsum.photos/seed/trabajo9b/800/600',
    ],
  },
]

function TrabajosCard({ trabajo, onClick }) {
  return (
    <div className="trabajo-card" onClick={() => onClick(trabajo)}>
      <img src={trabajo.imagenes[0]} alt={trabajo.titulo} className="trabajo-card__imagen" />
      <div className="trabajo-card__contenido">
        <h3 className="trabajo-card__titulo">{trabajo.titulo}</h3>
        <p className="trabajo-card__descripcion">{trabajo.descripcion}</p>
      </div>
    </div>
  )
}

function TrabajoModal({ trabajo, onCerrar }) {
  const [indiceImagen, setIndiceImagen] = useState(0)

  const siguienteImagen = () => {
    setIndiceImagen((prev) => (prev + 1) % trabajo.imagenes.length)
  }

  const anteriorImagen = () => {
    setIndiceImagen((prev) => (prev - 1 + trabajo.imagenes.length) % trabajo.imagenes.length)
  }

  return (
    <div className="modal__fondo" onClick={onCerrar}>
      <div className="modal__contenido" onClick={(e) => e.stopPropagation()}>

        <button className="modal__cerrar" onClick={onCerrar}>×</button>

        <div className="modal__imagen-wrapper">
          <img
            src={trabajo.imagenes[indiceImagen]}
            alt={trabajo.titulo}
            className="modal__imagen"
          />

          {trabajo.imagenes.length > 1 && (
            <>
              <button className="modal__flecha modal__flecha--izq" onClick={anteriorImagen}>‹</button>
              <button className="modal__flecha modal__flecha--der" onClick={siguienteImagen}>›</button>
            </>
          )}

          <div className="modal__contador">
            {indiceImagen + 1} / {trabajo.imagenes.length}
          </div>
        </div>

        <div className="modal__texto">
          <h3 className="modal__titulo">{trabajo.titulo}</h3>
          <p className="modal__procedimiento">{trabajo.procedimiento}</p>
        </div>

      </div>
    </div>
  )
}

function Trabajos() {
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null)

  return (
    <section className="trabajos" id="trabajos">
      <h2 className="trabajos__titulo">Trabajos Realizados</h2>

      {/* Contenedor con scroll horizontal — el navegador maneja el "enganche" solo */}
      <div className="trabajos__scroll">
        {trabajos.map((trabajo) => (
          <TrabajosCard
            key={trabajo.id}
            trabajo={trabajo}
            onClick={setTrabajoSeleccionado}
          />
        ))}
      </div>

      {trabajoSeleccionado && (
        <TrabajoModal
          trabajo={trabajoSeleccionado}
          onCerrar={() => setTrabajoSeleccionado(null)}
        />
      )}
    </section>
  )
}

export default Trabajos