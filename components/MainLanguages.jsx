"use client";
import Image from "next/image";
import HTM from "../app/src/html.png";
import CSS from "../app/src/css.png";
import JS from "../app/src/javascript.png";
import ReactJS from "../app/src/react.png";
import NextJS from "../app/src/next-js.png";
import Node from "../app/src/node.png";
import Redux from "../app/src/redux.png";
import Tailwind from "../app/src/tailwind.png";
import CS from "../app/src/cs.png";
import Java from "../app/src/java.png";
import Mongo from "../app/src/mongo.png";
import Python from "../app/src/python.png";
import Figma from "../app/src/figma.png";
import Postman from "../app/src/postman.png";
import Firebase from "../app/src/firebase.png";
import Android from "../app/src/android.png";
import Git from "../app/src/git.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Autoplay]);

export default function MainLanguages() {
  const items = [
    HTM,
    CSS,
    JS,
    ReactJS,
    NextJS,
    Tailwind,
    Node,
    Figma,
    Redux,
    Mongo,
    Firebase,
    CS,
    Java,
    Python,
    Postman,
    Git,
    Android,
  ];

  return (
    <div className='p-5 lg:w-[1200px] md:w-[900px] sm:w-[500px] mx-auto h-[600px] flex flex-col justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-6 bg-black'>
          Skills <span className='text-[#963489]'>&</span> Technologies
        </h1>
        <p className='text-lg text-gray-400 mb-10'>Check out my skills below</p>
      </div>
      <div className='flex items-center justify-center flex-wrap'>
        <Swiper
          slidesPerView={8}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          className='max-w-[80%] mb-6'
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='m-2 bg-[#000] items-center px-3 border border-[#5fabfd] py-3 rounded-full hover:bg-[#fff] duration-500 ease-in-out shadow-xl shadow-[#5fabfd]'>
                <Image src={item} alt={`Language ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={8}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className='max-w-[80%]'
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='m-2 bg-[#000] px-3 border border-[#5fabfd] py-3 rounded-full items-center hover:bg-[#fff] duration-500 ease-in-out shadow-xl shadow-[#5fabfd]'>
                <Image src={item} alt={`Language ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
