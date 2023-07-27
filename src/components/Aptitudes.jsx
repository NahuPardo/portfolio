const Aptitudes = () => {
  return (
    <>
      <div className="container mx-auto w-5/6" id="aptitudes">
        <p className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl mt-8 w-1/3 h-2">{" "}</p>
          <h1 className="text-4xl font-bold">Aptitudes</h1>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 mt-10">

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/reactjs.png" alt="logo react" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">React</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/tailwind.png" alt="logo tailwind" className="transition-transform duration-300 transform-gpu hover:scale-110" />
              <p className="font-semibold">TailwindCSS</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/css3.png" alt="logo css3" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">CSS3</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/html5.png" alt="logo html 5" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">HTML 5</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/js.png" alt="logo JavaScript" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">JavaScript</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/github.png" alt="logo github" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">Github</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/mysql.png" alt="logo mysql" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">MySQL</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/php.png" alt="logo php" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">PHP</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/gulp.png" alt="logo gulp" className="transition-transform duration-300 transform-gpu hover:scale-110" />
              <p className="font-semibold">Gulp</p>
            </div>

            <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
              <img src="src/img/logos/sass.png" alt="logo sass" className="transition-transform duration-300 transform-gpu hover:scale-110"/>
              <p className="font-semibold">SASS</p>
            </div>

          </div>
      </div>
    </>
  )
}
export default Aptitudes