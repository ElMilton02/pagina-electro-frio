import './Ubicacion.css'

function Ubicacion() {
  const lat = -36.42746126473864
  const lng = -61.416376130135845

  const abrirMaps = () => {
    window.open('https://www.google.com/maps?q=' + lat + ',' + lng, '_blank')
  }

  return (
    <section className="ubicacion" id="ubicacion">

      <div className="ubicacion__header">
        <button className="ubicacion__boton" onClick={abrirMaps}>
          Donde encontrarnos
        </button>
      </div>

      <iframe
        className="ubicacion__mapa"
        src={'https://maps.google.com/maps?q=' + lat + ',' + lng + '&output=embed'}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicacion Electro Frio"
      />

    </section>
  )
}

export default Ubicacion