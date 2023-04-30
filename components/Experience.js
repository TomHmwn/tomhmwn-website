import React, { useState } from "react";
import userData from "../constants/data";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";

const Experience = () => {
  const animationDuration = 1000;

  const [currentExperience, setCurrentExperience] = useState(0);
  const { theme, setTheme } = useTheme();

  const handleSelectedExperience = (idx) => {
    if (currentExperience === idx) {
      // do nothing if the same button is clicked twice
      return;
    }
    setCurrentExperience(idx);
  };

  return (
    <div className="bg-white dark:bg-[#151515]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold text-gray-500 dark:text-gray-300 -mb-10">
          Career Journey
        </h1>
      </div>

      <div className="bg-[#f1f1f1] dark:bg-black h-full">
        <div className=" grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-10 gap-x-20 place-items-center md:h-3/4">
          <div className="col-span-1 space-y-4 m-2 px-6 py-10 flex flex-row items-center justify-between overflow-x-scroll w-full md:block">
            {userData.experience.map((experience, idx) => {
              const buttonClasses =
                idx === currentExperience
                  ? "text-black dark:text-white"
                  : "text-gray-400 dark:text-gray-600 hover:text-black hover:dark:text-white";

              return (
                <RoughNotation
                  show={currentExperience === idx}
                  key={idx}
                  type="box"
                  multiline={false}
                  padding={[0, 2]}
                  iterations={2}
                  animationDuration={animationDuration}
                >
                  <div
                    key={idx}
                    className={`text-xl md:text-4xl font-semibold mx-4 py-2 rounded-lg ${buttonClasses} cursor-pointer`}
                    onClick={() => handleSelectedExperience(idx)}
                  >
                    {experience.company}
                  </div>
                </RoughNotation>
              );
            })}
          </div>
          <div className="col-span-1 md:col-span-2">
            <ExperienceDetails
              experience={userData.experience[currentExperience]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  // Check if experience is null or undefined
  if (!experience) {
    return <div></div>;
  }

  return (
    <div className="text-gray-500 dark:text-white leading-loose text-2xl md:text-4xl font-semibold mx-8 ">
      <h2 className="text-gray-500 dark:text-white text-xl md:text-2xl font-semibold mb-2">
        {experience.role}
      </h2>
      <a
        href={experience.companyLink}
        className="text-gray-500 dark:text-white text-xl md:text-2xl font-semibold mb-2 cursor-pointer"
        target="_blank"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="w-fit h-fit text-gray-400 dark:text-gray-500"
        >
          {`@ ${experience.company}`}
        </motion.div>
      </a>

      <div className="text-base md:text-lg text-gray-00 dark:text-gray-300 mt-8">
        {experience.year}
      </div>

      <div className="mt-4">
        <ul className="list-disc list-inside">
          {experience.desc.map((d, i) => (
            <li
              className="text-sm md:text-lg text-gray-500 dark:text-gray-300 mb-2 ml-2"
              key={i}
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
