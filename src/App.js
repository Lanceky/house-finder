import React from 'react'
import './App.css'
import { Navbar, Hero, About, Eldoret, Home} from './components'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Hero />
      <About/>
      <Eldoret />

    </div>
  )
}

export default App