import React from 'react'
import './App.css'
import { Navbar, Hero, About, Home, Contact} from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Contact />
    
    </div>
  )
}

export default App