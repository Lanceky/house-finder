import React from 'react'
import './App.css'
import { Navbar, Hero, About, Home} from './components'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Hero />

    </div>
  )
}

export default App