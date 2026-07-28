import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Navbar'
import './App.css'

function App() {
  
  let name = "Rahul";
  function greet(){
    alert("this is alert");
  }

  return (
    <>
     <div>
      <h1><i>hello this my first project in react i'm {name}</i></h1>
      <button onClick={greet}>click me</button>
      <Navbar/>
     </div>
    </>
    
  )
}

export default App
