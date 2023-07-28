import yop from '../img/yop.jpg'
import cv from './NahuelpardoCV.pdf'

const SobreMi = () => {
  return (
    <>
      <div className="container mx-auto w-5/6" id="sobreMi">
        <p className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl mt-8 w-1/3 h-2">{" "}</p>
          <h1 className="text-4xl font-bold">Sobre mí</h1>
          <figure className=" bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 rounded-xl p-10  my-5">
              <img className="w-52 h-52 rounded-full mx-auto" src={yop} alt="imagen Nahuel Pardo" />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-700">
                      Nahuel Pardo
                    </div>
                    <div class="text-sky-500 dark:text-sky-700">
                      Front-End Developer, Argentina
                    </div>
                </figcaption>
                  <blockquote>
                    <p class="text-lg font-medium text-black">
                      Soy una persona muy dedicada, organizada, extrovertida y adaptable a los diferentes ámbitos de trabajo. Comenzé con la programación para probar algo nuevo y con el tiempo se convirtió en lo que me apasiona y a lo que me quiero dedicar. Me gustaria poder seguir creciendo y desarrollarme como developer consiguiendo un mejor nivel en los lenguajes vistos como tambien aprendiendo nuevos. Tengo diferentes tipos de hobbies como el futbol, el gimnasio y el gaming.
                    </p>
                  </blockquote>
                  <div className=''>
                    <a href='./NahuelPardoCV.pdf' download className="bg-gradient-to-r from-sky-600 to-sky-800 hover:from-sky-600 hover:to-sky-700  rounded-md text-white p-2">Descargar CV</a>
                  </div>
              </div>
          </figure>
      </div>
    </>
  )
}
export default SobreMi