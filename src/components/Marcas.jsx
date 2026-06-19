import './Marcas.css'

const marcas = [
  { id: 1, nombre: 'Carrier', logo: 'https://picsum.photos/seed/marca1/200/80' },
  { id: 2, nombre: 'Copeland', logo: 'https://picsum.photos/seed/marca2/200/80' },
  { id: 3, nombre: 'Danfoss', logo: 'https://picsum.photos/seed/marca3/200/80' },
  { id: 4, nombre: 'Bitzer', logo: 'https://picsum.photos/seed/marca4/200/80' },
  { id: 5, nombre: 'Embraco', logo: 'https://picsum.photos/seed/marca5/200/80' },
]

function Marcas() {
  return (
    <section className="marcas">
      <h2 className="marcas__titulo">Trabajamos con las mejores marcas</h2>
      <div className="marcas__grid">
        {marcas.map((marca) => (
          <div key={marca.id} className="marcas__item">
            <img src={marca.logo} alt={marca.nombre} className="marcas__logo" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marcas