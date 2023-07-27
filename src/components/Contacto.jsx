const Contacto = () => {
  return (
    <>
    <div className="container mx-auto w-5/6" id="contacto">
      <p className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl mt-8 w-1/3 h-2">{" "}</p>
        <h1 className="text-4xl font-bold">Contacto</h1>

        <div className="flex flex-col gap-10 my-10">

          <div className="flex justify-center">
            <h1 className="text-xl font-semibold"> Contactame en cualquiera de las siguientes plataformas!</h1>
          </div>

          <div className="flex justify-around items-center">
            <a href="https://github.com/NahuPardo" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src="./src/img/github.png" alt="icono github" /></a>
            <a href="https://www.linkedin.com/in/nahuelpardo/" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src="./src/img/linkedin.png" alt="icono linkedin" /></a>
            <a href="https://twitter.com/nahupardo_" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src="/src/img/twitter.png" alt="icono twitter" /></a>
            <a href="https://www.facebook.com/nahuu.pardo" className="w-9 transition-transform duration-300 transform-gpu hover:scale-110"><img src="/src/img/facebook.png" alt="icono facebook" /></a>
          </div>

        </div>
    </div>
  </>
  )
}
export default Contacto