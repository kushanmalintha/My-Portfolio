import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export default App
