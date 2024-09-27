import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './Components/Nav';
import About from './pages/About';
import Services from './pages/Services';
import './components/Buttons.css'

function App() {

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Principal" element={<Home />} />
          <Route path="/Nosotros" element={<About />} />
          <Route path="/Servicios" element={<Services />} />
        </Routes >
      </main>
    </>
  )
}

export default App
