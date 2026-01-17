import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
function App() {


  return (
    <>
<Header />
<Link to="/">R&R Publishing</Link>
     <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
<Footer/>
    </>
  )
}

export default App
