import { useState } from 'react'
import Inicio from './components/Inicio'
import Navegacion from './components/Navegacion'
import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'
import Aptitudes from './components/Aptitudes'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'






function App() {
  
  return (
    
    <>
       
        <header>
            <Navegacion/>
        </header>
        <body>
          
        
            <Inicio />
            <SobreMi/>
            <Proyectos/>
            <Aptitudes/>
            <Experiencia/>
            <Contacto/>
          </body>
        
    </>
  )
}

export default App
