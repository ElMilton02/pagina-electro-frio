// "npm run dev" para ejecutar el host
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Trabajos from './components/Trabajos'
import Marcas from './components/Marcas'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      <Trabajos />
      <Marcas />
      <Ubicacion />
      <Footer />
    </div>
  )
}

export default App