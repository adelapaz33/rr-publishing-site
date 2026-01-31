import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import MusicCatalog from './pages/MusicCatalog'
import Composers from './pages/Composers'
import About from './pages/About'
function App() {


  return (
    <main className="max-w-9xl mx-auto">
<Header />

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/composers" element={<Composers/>} />
      <Route path="/catalog" element={<MusicCatalog/>} />
      <Route path="/about" element={<About/>} />
     </Routes>
<Footer/>
    </main>
  )
}

export default App
