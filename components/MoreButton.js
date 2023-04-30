import React from "react";
import Link from "next/link";

const MoreButton = ({ link, placeholder }) => {
  return (
    <Link
      target="_blank"
      href={link}
      className="dark:bg-[#151515] p-5 rounded-md shadow-lg text-xl font-semibold flex flex-row justify-center items-center space-x-4 text-gray-400 dark:text-white hover:text-gray-600 dark:hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>{placeholder}</div>
    </Link>
  );
};

export default MoreButton;
