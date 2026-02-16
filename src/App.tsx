import Home from './pages/Home'
import Layout from './components/Layout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MusicCatalog from './pages/MusicCatalog'
import Composers from './pages/Composers'
import About from './pages/About'
function App() {


  return (
    <main className="max-w-9xl mx-auto">

     <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/composers" element={<Composers/>} />
      <Route path="/catalog" element={<MusicCatalog/>} />
      <Route path="/about" element={<About/>} />
      </Route>
     </Routes>
    </main>
  )
}

export default App
