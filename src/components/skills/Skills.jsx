import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { SiPhp } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ theme }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 dark:text-white sm:text-2xl">
            Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 dark:text-white font-medium w-[100%]"
            >
              Mis skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 className="dark:text-white"/>} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 className="dark:text-white"/>} name={"CSS"} value={88} />
                <ProgressBar
                  logo={<SiJavascript className="dark:text-white"/>}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaReact className="dark:text-white"/>} name={"React Js"} value={80} />
                <ProgressBar
                  logo={<SiTailwindcss className="dark:text-white"/>}
                  name={"Tailwind CSS"}
                  value={80}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                className=""
                logo={
                  <SiPhp/>
                }
                black={"black"}
                white={"white"}
                skill={"PHP"}
              />

              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
