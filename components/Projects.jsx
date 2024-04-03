"use client";
import React from "react";
import projectList from "../app/projectList.js";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

export default function Projects() {
  return (
    <div className='projects-wrapper px-5 py-10 max-w-[1200px] mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>Projects.</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        // navigation={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
      >
        {projectList.map((proj, i) => (
          <SwiperSlide key={i}>
            <div className='swiper-list bg-[#151030] border border-[#5fabfd] relative h-[600px] w-full overflow-hidden'>
              <Image
                src={proj.image}
                layout='fill'
                objectFit='contain'
                className='relative h-full'
                alt='project-image'
              />
              <div className='inset-0 flex font-semibold bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100 h-full'>
                <div className='proj-title text-lg text-[#963489] mb-2 absolute top-0 left-1'>
                  {proj.title}
                </div>
                <div class='absolute top-1 right-2 flex gap-4'>
                  <a
                    href={proj.github}
                    target='_blank'
                    className='rounded-full border p-1 box-link '
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={proj.link}
                    target='_blank'
                    className='rounded-full border p-1 box-link '
                  >
                    <SiVercel />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='box absolute w-full right-0 top-0 -z-10'></div>
      <div className='box absolute w-full left-0 bottom-0 -z-10'></div>
    </div>
  );
}
