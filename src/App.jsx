import styles from './styles/App.module.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'  // eller PictureGallery
import Events from './pages/Events'    // eller Activities



function App() {
  return ( 
    <>
    <Header />
    <main className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/galleri" element={<Gallery />} />
        <Route path="/aktiviteter" element={<Events />} />
      </Routes> 
    </main>
      <Footer />
      </>
  )
}

export default App
