"use client";
import React, { useState } from "react";
import projectList from "../app/projectList.js";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FaLink } from "react-icons/fa6";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
    );
  };

  function getColorClass(lang) {
    switch (lang) {
      case "react":
      case "javascript":
        return "text-[#3D90CC]";
      case "mongodb":
      case "postman":
        return "text-[#218e68]";
      default:
        return "text-[#b22e61]";
    }
  }

  const startIndex = activeIndex % projectList.length;
  const endIndex = Math.min(startIndex + 2, projectList.length - 1);

  return (
    <div className='px-5 py-10 flex flex-col justify-start max-w-[1200px] h-full gap-7 mx-auto items-start'>
      <h1 className='max-w-[1200px] text-7xl'>Projects.</h1>
      <div className='flex justify-center items-center w-full mx-auto'>
        <div className='cursor-pointer'>
          <FcPrevious size={25} onClick={handlePrevious} />
        </div>
        <div className='flex justify-center items-center flex-wrap w-full gap-3 mx-auto h-full'>
          {projectList.map((proj, i) => (
            <div
              className={`project-container sm:w-[360px] h-[500px] flex flex-wrap duration-200 border border-[#5fabfd] ${
                hoveredIndex === i
                  ? "z-[999] hover:scale-110"
                  : "z-[1] hover:z-[2]"
              } ${i >= startIndex && i <= endIndex ? "" : "hidden"}`}
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='flex flex-col w-full items-center'>
                <div className='h-[200px] w-[320px] relative'>
                  <img
                    src={proj.image}
                    alt='project image'
                    className='w-full h-full'
                  />
                  <div className='absolute top-3 right-2 rounded-full border p-1 box-link'>
                    <a href={proj.link} target='_blank'>
                      <FaLink size={22} color='white' />
                    </a>
                  </div>
                </div>
                <div className='flex justify-between items-center mt-4 my-2 w-full text-[#963489]'>
                  <span className='rounded-full border border-[#963489] text-white px-2'>
                    {proj.id}
                  </span>
                  <h1 className=' font-bold tracking-wider'>{proj.title}</h1>
                </div>
                <p className='text-[#7c7795]'>{proj.description}</p>
                <div className='text-[#7c7795] flex w-full flex-wrap items-center gap-2 mt-2'>
                  {proj.language.map((lang, i) => (
                    <div key={i} className={`${getColorClass(lang)}`}>
                      #{lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='cursor-pointer'>
          <FcNext size={25} onClick={handleNext} />
        </div>
      </div>

      {/* box */}
      <div className='box absolute w-full right-0 top-0 -z-10'></div>
      <div className='box absolute w-full left-0 bottom-0 -z-10'></div>
    </div>
  );
}
