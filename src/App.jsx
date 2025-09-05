import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
    </>
  )
}

export default App
