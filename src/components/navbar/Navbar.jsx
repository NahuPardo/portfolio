import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import { TypeAnimation } from "react-type-animation";

const navItems = [
  {
    id: 0,
    name: "inicio",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "proyectos",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contacto",
  },
];

const Navbar = ({theme, setTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const cerrarNav = () => {
    setIsOpen()
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : 'dark')
  }

  const darkMode = () => {
    handleThemeSwitch()
    cerrarNav()
  }

  
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md dark:bg-black dark:shadow-sky-400` : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          ><TypeAnimation
          data-aos="fade-up"
          sequence={[
            "Nahuel Pardo.",
            2000
          ]}
          speed={30}
          wrapper="h3"
          repeat={Infinity}
          className=" text-black text-3xl font-bold sm:text-3xl dark:text-white"
        />
          </Link>
        </div>
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11"
        >
          {/* hamburger */}
          <button
            onClick={toggleNav}
            className="cursor-pointer text-2xl hidden md:block"
          >
            <HiMenu size={25} className="dark:text-white" />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white md:dark:bg-black`}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} className="dark:text-white"/>
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-slate-500 dark:hover:text-slate-500 dark:text-white font-bold `}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center">
            <button className="block mb-1" onClick={darkMode}>
                  {theme === "dark" ? <BsFillSunFill className="text-white"/> : <BsFillMoonFill/>}
            </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
