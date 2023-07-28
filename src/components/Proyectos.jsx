import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import blogCafe from '../img/proyectos/blogCafe.jpg'
import controlDeGastos from '../img/proyectos/controlDeGastos.jpg'
import criptos from '../img/proyectos/criptos.jpg'
import festival from '../img/proyectos/festival.jpg'
import freelancer from '../img/proyectos/freeLancer.jpg'
import frontStore from '../img/proyectos/frontEndStore.jpg'
import pacientesVet from '../img/proyectos/pacientes-vet.jpg'
import crmClientes from '../img/proyectos/crm-clientes.jpg'
import portfolio from '../img/proyectos/portfolio.jpg'

const Proyectos = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="container mx-auto w-5/6" id="proyectos" >
          <p className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl mt-8 w-1/3 h-2">{" "}</p>
          <h1 className="text-4xl font-bold">Proyectos</h1>
          <Carousel responsive={responsive} className='gap-5'>
            <article className="flex flex-col gap-2 mt-10 ">
              <div className="flex flex-col order-2 text-xl justify-between mx-3">
                <h1 className="font-semibold text-2xl mb-4">Cotizador Criptos - React | Styled Components | Vite</h1>
                <div className="flex flex-row gap-5 my-3 text-xl">
                  <a href="https://proyecto3react-np.netlify.app/" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Demo</a>
                  <a href="https://github.com/NahuPardo/CotizadorCripto-React" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
                </div>

              </div>
                <img src={criptos} alt="Proyecto criptos" className=" md:m-2 w-auto xl:h-80 order-1 "/>
              </article>

            <article className="flex flex-col gap-2 mt-10 ">
              <div className="flex flex-col order-2 text-xl justify-between mx-3">
                <h1 className="font-semibold text-2xl mb-4">Control de Presupuesto - React | CSS | Vite</h1>
                <div className="flex flex-row gap-5 my-3 text-xl">
                  <a href="https://proyecto2react-np.netlify.app/" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Demo</a>
                  <a href="https://github.com/NahuPardo/ControlGastos-React" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
                </div>
              </div>
                <img src={controlDeGastos} alt="Proyecto Control de gastos" className=" md:m-2 w-auto xl:h-80 order-1"/>
              </article>

            <article className="flex flex-col gap-2 mt-10 ">
              <div className="flex flex-col order-2 text-xl justify-between mx-3">
                <h1 className="font-semibold text-2xl mb-4">CRM Clientes - React Router DOM | Styled Components | Vite | JSON SERVER </h1>
                <div className="flex flex-row gap-5 my-3 text-xl">
                  <a href="https://github.com/NahuPardo/Crm-react" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
                </div>
              </div>
                <img src={crmClientes} alt="Proyecto Crm clientes" className=" md:m-2 w-auto xl:h-80 order-1"/>
              </article>
              
            <article className="flex flex-col gap-2 mt-10 ">
              <div className="flex flex-col order-2 text-xl justify-between mx-3">
                <h1 className="font-semibold text-2xl mb-4">Portafolio - React | TailwindCSS | Vite </h1>
                <div className="flex flex-row gap-5 my-3 text-xl">
                  <a href="https://github.com/NahuPardo/portfolio" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
                </div>
              </div>
                <img src={portfolio} alt="Proyecto Portafolio" className=" md:m-2 w-auto xl:h-80 order-1"/>
              </article>

            <article className="flex flex-col gap-2 mt-10 ">
            <div className="flex flex-col order-2 text-xl justify-between mx-3">
              <h1 className="font-semibold text-2xl mb-4">Administrador Pacientes - React | Tailwind CSS</h1>
              <div className="flex flex-row gap-5 my-3 text-xl">
                <a href="https://proyectoreact1np.netlify.app/" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Demo</a>
                <a href="https://github.com/NahuPardo/AdministradorDePacientes" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
              </div>
            </div>
              <img src={pacientesVet} alt="Proyecto Pacientes veterinaria" className=" md:m-2 w-auto xl:h-80 order-1 "/>
            </article>

            <article className="flex flex-col gap-2 mt-10 ">
            <div className="flex flex-col order-2 text-xl justify-between mx-3">
              <h1 className="font-semibold text-2xl mb-4">Festival Rock & EDM - HTML5 | SASS | Gulp | JavaScript </h1>
              <div className="flex flex-row gap-5 my-3 text-xl">
                <a href="https://cuartoproyectonp.netlify.app/" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Demo</a>
                <a href="https://github.com/NahuPardo/RockFestival" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
              </div>
            </div>
              <img src={festival} alt="Proyecto Festival" className=" md:m-2 w-auto xl:h-80 order-1 "/>
            </article>

            <article className="flex flex-col gap-2 mt-10 ">
            <div className="flex flex-col order-2 text-xl justify-between mx-3">
              <h1 className="font-semibold text-2xl mb-4">Blog de Café - HTML5 | CSS3 | JavaScript</h1>
              <div className="flex flex-row gap-5 my-3 text-xl">
                <a href="https://tercerproyectonp.netlify.app/" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Demo</a>
                <a href="https://github.com/NahuPardo/BlogDeCafe" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
              </div>
            </div>
              <img src={blogCafe} alt="Proyecto Blog de Cafe" className=" md:m-2 w-auto xl:h-80 order-1 "/>
            </article>

            <article className="flex flex-col gap-2 mt-10 ">
            <div className="flex flex-col order-2 text-xl justify-between mx-3">
              <h1 className="font-semibold text-2xl mb-4">Tienda Front End Store - HTML5 | CSS3</h1>
              <div className="flex flex-row gap-5 my-3 text-xl">
                <a href="https://segundoproyectonp.netlify.app//" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Demo</a>
                <a href="https://github.com/NahuPardo/FrontEndStore" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
              </div>
            </div>
              <img src={frontStore} alt="Proyecto Front End Store" className=" md:m-2 w-auto xl:h-80 order-1 "/>
            </article>

            <article className="flex flex-col gap-2 mt-10">
              <div className="flex flex-col order-2 text-xl justify-between mx-3">
                <h1 className="font-semibold text-2xl mb-4"> Pagina FreeLancer - HTML5 | CSS3</h1>
                <div className="flex flex-row gap-5 my-3 text-xl ">
                  <a href="https://primerproyectonp.netlify.app/" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Demo</a>
                  <a href="https://github.com/NahuPardo/FreeLancer" className="bg-gradient-to-r from-blue-600 to-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:from-blue-600 hover:to-blue-700 duration-300 ...  rounded-md text-white p-2">Repositorio</a>
                </div>
              </div>
                <img src={freelancer} alt="Proyecto Freelancer" className=" md:m-2 w-auto xl:h-80 order-1 "/>
              </article>
          </Carousel>
        </div>
        
    </>
  )
}
export default Proyectos