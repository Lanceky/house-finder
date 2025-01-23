import React from 'react'
import './App.css'
import { Navbar, Hero, About, Home} from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Hero />
      <About/>
      

    </div>
  )
}

export default App