import { useState } from "react";
import coding from '../img/coding.png'
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'




const Inicio = () => {

  return (
    <>
    <div className="container mx-auto w-5/6" id="inicio">
        <div className="flex items-center flex-col md:flex-row pt-32">
            <p className="flex w-1/2 text-2xl md:text-3xl flex-col items-start my-3 md:my-0  md:items-end font-normal">Hola a todxs👋🏻, me llamo <span className="text-3xl md:text-4xl text-blue-800">Nahuel Pardo</span> y soy Front-End Developer.</p>
            <img src={coding} alt="Imagen Codigo" className="w-1/2 h-1/2" />
        </div>
        <div className="flex justify-center gap-8 items-center">
          <a href="https://github.com/NahuPardo" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src={github} alt="icono github" /></a>
          <a href="https://www.linkedin.com/in/nahuelpardo/" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src={linkedin} alt="icono linkedin" /></a>
          <a href="https://twitter.com/nahupardo_" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src={twitter} alt="icono twitter" /></a>
          <a href="https://www.facebook.com/nahuu.pardo" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src={facebook} alt="icono facebook" /></a>
        </div>
    </div>
  </>
    
  )
}
export default Inicio