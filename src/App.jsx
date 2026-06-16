// "npm run dev" para ejecutar el host
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Trabajos from './components/Trabajos'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      <Trabajos />
      <Footer />
    </div>
  )
}

export default App