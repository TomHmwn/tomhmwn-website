import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "../constants/data";

const Hero = () => {
  const colors = ["#52b788", "#b2d3a8", "#ede5a6"];

  return (
    <div className="bg-white dark:bg-[#151515]">

      <div className="container mx-auto flex flex-row justify-center items-start overflow-hidden">
        <div className="w-full mx-auto md:w-1/2 text-left md:text-left lg:py-20 lg:px-10">
          <RoughNotationGroup show={true}>
            <RainbowHighlight color={colors[0]}>
              <h1 className="text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Developer.
              </h1>
            </RainbowHighlight>
            <RainbowHighlight color={colors[1]}>
              <h1 className="text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Designer.
              </h1>
            </RainbowHighlight>
            <RainbowHighlight color={colors[2]}>
              <h1 className="text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Engineer.
              </h1>
            </RainbowHighlight>
          </RoughNotationGroup>
        </div>
        <div className="hidden lg:block relative w-full md:w-1/2 mt-20">
          <div className="w-3/4 mx-auto">
            <img src={userData.avatarUrl} alt="avatar" className="object-cover object-top h-[600px] w-[600px]" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Hero;
