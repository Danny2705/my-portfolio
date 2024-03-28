"use client";
import React, { useState } from "react";
import projectList from "../app/projectList.js";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [show, setShow] = useState(false);

  const handleSwipeLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
    );
  };

  const handleSwipeRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      // Swipe right
      handleSwipeRight();
    } else if (deltaX < -50) {
      // Swipe left
      handleSwipeLeft();
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className='px-5 flex justify-center flex-col relative h-full'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className='flex max-w-[1200px] mx-auto max-h-[800px]'>
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className={`flex justify-center items-center mx-auto h-full ${
              index === activeIndex ? "" : "hidden"
            }`}
          >
            {show && (
              <div className='flex-1 border'>
                <p>{project.description}</p>
              </div>
            )}
            <div className='flex-1 relative h-full'>
              {/* <div className='box-2 shadow-xl shadow-white'></div> */}
              {project.image && (
                <div
                  className='max-w-[1000px] h-full cursor-pointer'
                  onClick={handleShow}
                >
                  <div className='flex items-center gap-4'>
                    <p>{project.id}</p>
                    <h1>{project.title}</h1>
                  </div>
                  <img
                    src={project.image}
                    alt='project image'
                    className='rounded-xl border shadow-xl shadow-white object-cover object-center'
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='box absolute w-full right-0 top-0 -z-10'></div>
      <div className='box absolute w-full left-0 bottom-0 -z-10'></div>
      <div className='flex justify-center absolute bottom-5 w-full'>
        <button
          className='mx-2 bg-black border-[#963489] border px-2 items-center text-xl rounded-md text-[#5fabfd]'
          onClick={handleSwipeLeft}
        >
          &lt;
        </button>
        <button
          className='mx-2 bg-black border-[#963489] border px-2 items-center text-xl rounded-md text-[#5fabfd]'
          onClick={handleSwipeRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
