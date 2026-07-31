import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Navbar'
import Hero from './Hero'
import './App.css'


function App() {
  
  

  return (
    <>
    
      <Navbar
        websitename = "welcomecard"
        />
      
      <Hero/>
    </>
    
  )
}

export default App
