import React from 'react'
import './App.css'
import { Navbar, Hero, About, Home} from './components'
import Place from './places/Action/Action'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Hero />
      <Place />
    </div>
  )
}

export default App