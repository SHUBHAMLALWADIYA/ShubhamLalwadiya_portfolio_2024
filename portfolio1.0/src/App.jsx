import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import TechStack from './components/TechStack'
import Github from './components/GitDiv'
import Portfolio from './components/Projects'
import ContactSection from './components/ContactSection'
import "../src/components/App.css"
import Boxs from "../src/components/Box"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    <About/>
    <TechStack/>
    <Github/>
    <Portfolio/>
    
   <Boxs/>
    </>
  )
}

export default App
