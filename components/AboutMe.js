import React from "react";
import userData from "../constants/data";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
const AboutMe = () => {
  const { theme, setTheme } = useTheme();
  const animationDuration = 1000;
  return (
    <div className="bg-white dark:bg-[#151515]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold text-gray-500 dark:text-gray-300 -mb-10">
          About Me
        </h1>
      </div>
      <div className="bg-[#f1f1f1] dark:bg-black">
        <div className="max-w-6xl mx-auto pt-20">
          <p className="text-gray-500 dark:text-white leading-loose text-2xl md:text-4xl font-semibold mx-4">
            {userData.about.title}
          </p>
        </div>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <RoughNotationGroup show={true}>
            <div className="col-span-1">
              <div className="">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Get In Touch
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-300">
                  {" "}
                  If you want to have a chat, please don't hesitate to{" "}
                  <RoughNotation
                    type="box"
                    multiline={true}
                    padding={[0, 2]}
                    iterations={2}
                    animationDuration={animationDuration}
                    color="#DEC3BE"
                  >
                    <a href={`mailto:${userData.email}`} className="font-bold">
                      email me
                    </a>
                  </RoughNotation>
                </p>
              </div>
              <div className="mt-8">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Work Inquiries
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  {" "}
                  I'm currently looking for a job as a full stack web developer.
                  check my out my{" "}
                  <RoughNotation
                    type="box"
                    multiline={true}
                    padding={[0, 2]}
                    iterations={3}
                    animationDuration={animationDuration}
                    color="#d5a18e"
                  >
                    <a
                      id="resume"
                      href={userData.resumeUrl}
                      target="_blank"
                      className="font-bold"
                    >
                      CV{" "}
                    </a>
                  </RoughNotation>
                </p>
              </div>
              {/* Social */}
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-8">
                  Socials
                </h1>
                <div className="mt-4 ml-4">
                  <a
                    href={userData.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold flex flex-row space-x-2 group"
                  >
                    <div>&rarr; </div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark::text-gray-300">
                      LinkedIn
                      <div className="bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300 h-0.5"></div>
                    </div>
                  </a>

                  <a
                    href={userData.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold flex flex-row space-x-2 group"
                  >
                    <div>&rarr; </div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark::text-gray-300">
                      Github
                      <div className="bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300 h-0.5"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </RoughNotationGroup>
          <div className="col-span-1 md:col-span-2">
            <div>
              {userData.about.description?.map((sentence, idx) => (
                <p
                  key={idx}
                  className="text-xl text-gray-700 mb-4 dark:text-gray-300"
                >
                  {sentence}
                </p>
              ))}
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-bold text-gray-500 dark:text-gray-300">
                Tech Stacks
              </div>
              <div>
                <div className="flex flex-wrap items-start mt-8 space-y-4 place-items-center ">
                  {userData.techStacks.map((tech, idx) => {
                    return (
                      <div
                        key={idx}
                        className=" w-fit h-fit overflow-hidden relative group"
                        style={{ marginTop: idx === 0 ? "0" : "0" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: 0,
                            borderRadius: "100%",
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-fit h-fit p-2"
                          // Add mt-4 class to first child element
                        >
                          <Icon
                            icon={
                              theme === "dark" && tech.dark
                                ? `${tech.iconifyClass}:${tech.icon}-dark`
                                : theme === "light" && tech.light
                                ? `${tech.iconifyClass}:${tech.icon}-light`
                                : `${tech.iconifyClass}:${tech.icon}`
                            }
                            className="h-20 w-20"
                          />
                        </motion.div>
                        <div className="flex justify-center w-fit h-fit bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300 font-semibold text-md">
                          {tech.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
