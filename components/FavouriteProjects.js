import React from "react";
import Link from "next/link";
import MoreButton from "./MoreButton";
import userData from "../constants/data";
const FavouriteProjects = () => {
  return (
    <div className="bg-[#f1f1f1] dark:bg-black">
      <div className="mx-auto max-w-6xl -mt-36 pt-36">
        <header className="flex flex-col md:flex-row md:justify-between items-start md:items-center ">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-300 mt-20 md:my-0 dark:text-gray-600">
            Highlights
          </h1>
          <div className="hidden md:block mb-5">
            <MoreButton placeholder="More Projects" link="projects" />
          </div>
        </header>
        {/* Grid for projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:-mt-4">
          {/* Project 1 */}
          <a
            href={userData.projects[0].link}
            target="_blank"
            className="w-full md:col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={userData.projects[0].imgUrl}
                alt={userData.projects[0].title}
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h2 className="absolute bottom-16 left-10  text-2xl font-bold text-gray-200">
                {userData.projects[0].title}
              </h2>
              <p className="absolute bottom-5 left-10 text-gray-400">
                {userData.projects[0].description}
              </p>
            </div>
          </a>
          {/* Project 2 */}
          <a
            href={userData.projects[1].link}
            target="_blank"
            className="w-full md:col-span-2 shadow-2xl w-fit h-fit"
          >
            <div className="relative overflow-hidden">
              <img
                src={userData.projects[1].imgUrl}
                alt={userData.projects[1].title}
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h2 className="absolute top-5 left-10  text-2xl font-bold text-gray-200">
                {userData.projects[1].title}
              </h2>
              <p className="absolute top-12 left-10 text-gray-300">
                {userData.projects[1].description}
              </p>
            </div>
          </a>
          {/* Project 3 */}
          <a
            href={userData.projects[2].link}
            target="_blank"
            className="w-full md:col-span-1 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={userData.projects[2].imgUrl}
                alt={userData.projects[2].title}
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h2 className="absolute top-2 left-4  text-2xl font-bold text-gray-200">
                {userData.projects[2].title}
              </h2>
            </div>
          </a>
        </div>
        <div className="p-5 md:hidden">
          <MoreButton placeholder="More Projects" link="projects"/>
        </div>
      </div>
    </div>
  );
};

export default FavouriteProjects;
