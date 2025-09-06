import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './components/Projects'
import Education from './components/Experience'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </>
  )
}

export default App
