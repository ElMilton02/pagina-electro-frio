import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const slides = [
  {
    id: 1,
    titulo: 'Instalación de Equipos',
    descripcion: 'Instalamos equipos de refrigeración industrial con la más alta precisión.',
    imagen: 'https://picsum.photos/seed/frio1/1200/600',
  },
  {
    id: 2,
    titulo: 'Mantenimiento Preventivo',
    descripcion: 'Mantenemos tus equipos en óptimas condiciones para evitar fallas.',
    imagen: 'https://picsum.photos/seed/frio2/1200/600',
  },
  {
    id: 3,
    titulo: 'Reparación de Averías',
    descripcion: 'Diagnóstico y reparación rápida para que tu negocio no se detenga.',
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
    if (deslizando) return

    // Ocultar texto
    setTextoVisible(false)
    setDireccion(dir)
    setSiguiente(nuevoIndice)
    setDeslizando(true)

    setTimeout(() => {
      setActual(nuevoIndice)
      setSiguiente(null)
      setDeslizando(false)
      // Mostrar texto cuando la imagen llegó
      setTextoVisible(true)
    }, 500)
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
      <img
        src={slides[actual].imagen}
        alt={slides[actual].titulo}
        draggable="false"
        className={`hero__imagen ${
          deslizando
            ? direccion === 'izq'
              ? 'hero__imagen--salida-izq'
              : 'hero__imagen--salida-der'
            : ''
        }`}
      />

      {deslizando && siguiente !== null && (
        <img
          src={slides[siguiente].imagen}
          alt={slides[siguiente].titulo}
          draggable="false"
          className={`hero__imagen hero__imagen--entrante ${
            direccion === 'izq'
              ? 'hero__imagen--entrada-izq'
              : 'hero__imagen--entrada-der'
          }`}
        />
      )}

      <div className="hero__sombra" />

      <div className={`hero__texto ${textoVisible ? 'hero__texto--visible' : 'hero__texto--oculto'}`}>
        <h2 className="hero__titulo">{slides[actual].titulo}</h2>
        <p className="hero__descripcion">{slides[actual].descripcion}</p>
      </div>

    </section>
  )
}

export default Hero