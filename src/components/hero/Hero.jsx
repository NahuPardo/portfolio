import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";

const Hero = ({theme}) => {
  return (
    <div id="inicio" className={` bg-gradient-to-r from-sky-300 to-sky-400 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem] dark:text-white"
            >
              Hola, soy Nahuel Pardo
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Front End Developer",
                2000,
                "Web Developer",
                2000,
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className=" text-white dark:text-black text-4xl font-bold sm:text-3xl"
            />
            
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/nahuelpardo/"
              className=" bg-black hover:text-slate-400 dark:bg-white dark:text-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  "
            >
              <span> Contratame! </span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white dark:bg-black dark:text-white dark:hover:text-slate-300 border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-slate-400"
              download
            >
              <div className="flex items-center gap-1">
                CV <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/NahuPardo">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 dark:text-white" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nahuelpardo/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 dark:text-white" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nahupardo_/">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 dark:text-white " />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/nahupardo_">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 dark:text-white " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              loading="lazy"
              src='https://i.postimg.cc/L8hjVpbT/Dise-o-sin-t-tulo-5-1.webp'
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="100"  className=" relative ">
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src={`${theme === "light" ? "https://i.postimg.cc/65KXR6Tk/Full-Stack-Developer2.webp" : "https://i.postimg.cc/ZYc3tnkH/circle.webp"}`}
                  alt="Front End Developer image"
                  width="300"
                  height="300"
                />
                <FaPlay
                  className=" text-black dark:text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
