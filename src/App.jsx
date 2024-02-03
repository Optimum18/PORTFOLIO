import './App.css'
import Achievement from './components/Achievement'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import TrustedBy from './components/TrustedBy'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Achievement />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
