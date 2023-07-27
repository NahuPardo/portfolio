import { useState } from "react";





const Inicio = () => {

  return (
    <>
    <div className="container mx-auto w-5/6">
        <div className="flex items-center flex-col md:flex-row pt-20">
            <p className="flex w-1/2 text-2xl md:text-3xl flex-col items-start my-3 md:my-0  md:items-end font-normal">Hola a todxs👋🏻, me llamo <span className="text-3xl md:text-4xl text-blue-800">Nahuel Pardo</span> y soy Front-End Developer.</p>
            <img src="./src/img/coding.png" alt="Imagen Codigo" className="w-1/2 h-1/2" />
        </div>
        <div className="flex justify-center gap-8 items-center">
          <a href="https://github.com/NahuPardo" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src="./src/img/github.png" alt="icono github" /></a>
          <a href="https://www.linkedin.com/in/nahuelpardo/" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src="./src/img/linkedin.png" alt="icono linkedin" /></a>
          <a href="https://twitter.com/nahupardo_" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src="/src/img/twitter.png" alt="icono twitter" /></a>
          <a href="https://www.facebook.com/nahuu.pardo" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src="/src/img/facebook.png" alt="icono facebook" /></a>
        </div>
    </div>
  </>
    
  )
}
export default Inicio