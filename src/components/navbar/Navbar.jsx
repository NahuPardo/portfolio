import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
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

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [darkmode, setDarkMode] = useState(false)

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };
  
  

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
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
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
            2000,
            "",
            2000,
          ]}
          speed={30}
          wrapper="h3"
          repeat={Infinity}
          className=" text-black text-4xl font-bold sm:text-3xl"
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
            <HiMenu size={25} />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white `}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-slate-500 font-bold ${
                    item.name === activeIndex ? "text-slate-500" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="https://www.linkedin.com/in/nahuelpardo/"
              className="bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-slate-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            >
              Contratame!
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
