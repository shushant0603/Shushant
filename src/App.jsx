import React from 'react'

import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Reach from './components/Reach'

function App() {


  return (
    <>
       <div className="home" >
        <Header></Header>
        <About></About>
        <Skills></Skills> 
        <Project></Project>
        <Reach></Reach>
       </div>
    </>
  )
}

export default App
