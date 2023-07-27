import css3 from '../img/logos/css3.png'
import github from '../img/logos/github.png'
import gulp from '../img/logos/gulp.png'
import html5 from '../img/logos/html5.png'
import js from '../img/logos/js.png'
import mysql from '../img/logos/mysql.png'
import php from '../img/logos/php.png'
import reactjs from '../img/logos/reactjs.png'
import sass from '../img/logos/sass.png'
import tailwind from '../img/logos/tailwind.png'


const Aptitudes = () => {
  return (
    <>
      <div className="container mx-auto w-5/6" id="aptitudes">
        <p className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl mt-8 w-1/3 h-2">{" "}</p>
          <h1 className="text-4xl font-bold">Aptitudes</h1>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 mt-10">

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={reactjs} alt="logo react" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">React</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={tailwind} alt="logo tailwind" className="transition-transform duration-300 transform-gpu hover:scale-110" />
              <p className="font-semibold">TailwindCSS</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={css3} alt="logo css3" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">CSS3</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={html5} alt="logo html 5" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">HTML 5</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={js} alt="logo JavaScript" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">JavaScript</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={github} alt="logo github" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">Github</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={mysql} alt="logo mysql" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">MySQL</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={php} alt="logo php" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">PHP</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={gulp} alt="logo gulp" className="transition-transform duration-300 transform-gpu hover:scale-110" />
              <p className="font-semibold">Gulp</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src={sass} alt="logo sass" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">SASS</p>
            </div>

          </div>
      </div>
    </>
  )
}
export default Aptitudes