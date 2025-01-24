import React from 'react'
import './App.css'
import { Navbar, Hero, About, Home, Contact, Footer} from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App