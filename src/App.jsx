import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
