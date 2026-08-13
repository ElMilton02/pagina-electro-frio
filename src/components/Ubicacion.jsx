import './Ubicacion.css'

function Ubicacion() {
  const lugar = 'Electro Frio B6553 Urdampilleta, Provincia de Buenos Aires'

  const abrirMaps = () => {
    window.open('https://www.google.com/maps/search/' + encodeURIComponent(lugar), '_blank')
  }

  return (
    <section className="ubicacion" id="ubicacion">
      <div className="ubicacion__header">
        <button className="ubicacion__boton" onClick={abrirMaps}>
          Donde estamos
        </button>
      </div>

      <iframe
        className="ubicacion__mapa"
        src={'https://maps.google.com/maps?q=' + encodeURIComponent(lugar) + '&output=embed'}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicacion Electro Frio"
      />
    </section>
  )
}

export default Ubicacion