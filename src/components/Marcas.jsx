import './Marcas.css'

const marcas = [
  { id: 1, nombre: 'Carrier', logo: 'https://imgs.search.brave.com/3UqT9CeiSX1H_ygKt0nL_PGtRawT2yDmMYv0I_7eEQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1BlcHNpLUxvZ28t/MTk5MS01MDB4Mjgx/LnBuZw' },
  { id: 2, nombre: 'Copeland', logo: 'https://imgs.search.brave.com/3UqT9CeiSX1H_ygKt0nL_PGtRawT2yDmMYv0I_7eEQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1BlcHNpLUxvZ28t/MTk5MS01MDB4Mjgx/LnBuZw' },
  { id: 3, nombre: 'Danfoss', logo: 'https://imgs.search.brave.com/3UqT9CeiSX1H_ygKt0nL_PGtRawT2yDmMYv0I_7eEQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1BlcHNpLUxvZ28t/MTk5MS01MDB4Mjgx/LnBuZw' },
  { id: 4, nombre: 'Bitzer', logo: 'https://imgs.search.brave.com/3UqT9CeiSX1H_ygKt0nL_PGtRawT2yDmMYv0I_7eEQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1BlcHNpLUxvZ28t/MTk5MS01MDB4Mjgx/LnBuZw' },
  { id: 5, nombre: 'Embraco', logo: 'https://imgs.search.brave.com/3UqT9CeiSX1H_ygKt0nL_PGtRawT2yDmMYv0I_7eEQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1BlcHNpLUxvZ28t/MTk5MS01MDB4Mjgx/LnBuZw' },
]

function Marcas() {
  return (
    <section className="marcas">
      <h2 className="marcas__titulo">Marcas asociadas</h2>
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