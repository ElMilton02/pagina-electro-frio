import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const slides = [
  {
    id: 1,
    titulo: 'Instalación de Equipos',
    imagen: 'https://picsum.photos/seed/frio1/1200/600',
  },
  {
    id: 2,
    titulo: 'Mantenimiento Preventivo',
    imagen: 'https://picsum.photos/seed/frio2/1200/600',
  },
  {
    id: 3,
    titulo: 'Reparación de Averías',
    imagen: 'https://picsum.photos/seed/frio3/1200/600',
  },
]

function Hero() {
  const [actual, setActual] = useState(0)
  const [deslizando, setDeslizando] = useState(false)
  const [direccion, setDireccion] = useState(null)
  const [siguiente, setSiguiente] = useState(null)
  const [textoVisible, setTextoVisible] = useState(true)
  const inicioArrastre = useRef(null)
  const intervaloRef = useRef(null)

  const cambiarSlide = (nuevoIndice, dir) => {
    if (deslizando) return // evita cambios mientras ya hay uno en curso

    setTextoVisible(false) // oculta el texto
    setDireccion(dir) // guarda la dirección
    setSiguiente(nuevoIndice) // guarda cuál imagen viene
    setDeslizando(true) // activa el modo "en transición"

    setTimeout(() => {
      setActual(nuevoIndice) // actualiza la imagen actual
      setSiguiente(null) // elimina la imagen entrante
      setDeslizando(false) // desactiva el modo "en transición"
      setTextoVisible(true) // muestra el texto nuevo
    }, 700) // igual que la duración de la animación CSS
  }

  const irSiguiente = (indiceActual) => {
    cambiarSlide((indiceActual + 1) % slides.length, 'izq')
  }

  const irAnterior = (indiceActual) => {
    cambiarSlide((indiceActual - 1 + slides.length) % slides.length, 'der')
  }

  const iniciarIntervalo = () => {
    if (intervaloRef.current) clearInterval(intervaloRef.current)
    intervaloRef.current = setInterval(() => {
      setActual((prev) => {
        irSiguiente(prev)
        return prev
      })
    }, 5000)
  }

  useEffect(() => {
    iniciarIntervalo()
    return () => clearInterval(intervaloRef.current)
  }, [])

  const alEmpezarArrastre = (e) => {
    inicioArrastre.current = e.touches ? e.touches[0].clientX : e.clientX
  }

  const alTerminarArrastre = (e) => {
    if (inicioArrastre.current === null) return
    const fin = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const diferencia = inicioArrastre.current - fin

    if (diferencia > 50) { irSiguiente(actual); iniciarIntervalo() }
    if (diferencia < -50) { irAnterior(actual); iniciarIntervalo() }

    inicioArrastre.current = null
  }

  return (
    <section
      className="hero"
      id="hero"
      onMouseDown={alEmpezarArrastre}
      onMouseUp={alTerminarArrastre}
      onTouchStart={alEmpezarArrastre}
      onTouchEnd={alTerminarArrastre}
    >
      {/* Frame actual — se desliza al cambiar de slide */}
      <div
        className={`hero__frame ${
          deslizando
            ? direccion === 'izq'
              ? 'hero__frame--salida-izq'
              : 'hero__frame--salida-der'
            : ''
        }`}
      >
        <img
          key={actual}
          src={slides[actual].imagen}
          alt={slides[actual].titulo}
          draggable="false"
          className="hero__imagen"
        />
      </div>

      {/* Frame entrante — solo existe mientras dura la transición */}
      {deslizando && siguiente !== null && (
        <div
          className={`hero__frame hero__frame--entrante ${
            direccion === 'izq'
              ? 'hero__frame--entrada-izq'
              : 'hero__frame--entrada-der'
          }`}
        >
          <img
            key={siguiente}
            src={slides[siguiente].imagen}
            alt={slides[siguiente].titulo}
            draggable="false"
            className="hero__imagen"
          />
        </div>
      )}

      <div className="hero__sombra" />

      <div className={`hero__texto ${textoVisible ? 'hero__texto--visible' : 'hero__texto--oculto'}`}>
        <h2 className="hero__titulo">{slides[actual].titulo}</h2>
      </div>

    </section>
  )
}

export default Hero