import React from "react";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs
} from "react-icons/si";
import { SiPhp } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = () => {
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
          <div className="w-full">
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-center"
            >
              <div className="flex xl:grid xl:grid-cols-3 gap-10 justify-center my-5 w-full">
                <div className="flex flex-col gap-10">
                <SkillBox
                logo={<IoLogoHtml5 />}
                black={"black"}
                white={"white"}
                skill={"HTML5"}
                />
                <SkillBox
                logo={<IoLogoCss3 />}
                black={"black"}
                white={"white"}
                skill={"CSS"}
                />
                </div>
                <div className="flex flex-col gap-10">
                <SkillBox
                logo={<SiJavascript />}
                black={"white"}
                white={"black"}
                skill={"JavaScript"}
                />
                <SkillBox
                logo={<FaReact/>}
                black={"white"}
                white={"black"}
                skill={"React"}
                />
                </div>
                <div className=" flex flex-col gap-10">
                <SkillBox
                logo={<SiTailwindcss />}
                black={"black"}
                white={"white"}
                skill={"Tailwind CSS"}
                />
                <SkillBox
                logo={<SiNextdotjs />}
                black={"black"}
                white={"white"}
                skill={"Next JS"}
                shadow={"sky-500"}
                
                />
                </div>
                <div className=" flex flex-col gap-10">
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
            <div className=" flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                logo={<SiPhp/>}
                black={"black"}
                white={"white"}
                skill={"PHP"}
              />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
