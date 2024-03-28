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
    // <div className='p-5 lg:w-[1200px] md:w-[900px] sm:w-[500px] mx-auto h-[600px] flex flex-col justify-center relative'>
    //   <div className='text-center'>
    //     <h1 className='text-4xl font-bold mb-6 bg-black text-[#5fabfd]'>
    //       Skills <span className='text-[#963489]'>&</span> Technologies
    //     </h1>
    //     <p className='text-lg text-gray-400 mb-10'>Check out my skills below</p>
    //   </div>
    //   <div className='flex items-center justify-center flex-wrap'>
    //     <Swiper
    //       slidesPerView={8}
    //       loop={true}
    //       autoplay={{
    //         delay: 0,
    //         disableOnInteraction: false,
    //       }}
    //       speed={5000}
    //       className='max-w-[90%] mb-6'
    //     >
    //       {items.map((item, index) => (
    //         <SwiperSlide key={index}>
    //           <div className='m-2 bg-[#000] items-center px-3 border border-[#5fabfd] py-3 rounded-full hover:bg-[#fff] duration-500 ease-in-out shadow-xl shadow-[#5fabfd]'>
    //             <Image src={item} alt={`Language ${index}`} />
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //     <Swiper
    //       slidesPerView={8}
    //       loop={true}
    //       autoplay={{
    //         delay: 0,
    //         disableOnInteraction: false,
    //         reverseDirection: true,
    //       }}
    //       speed={5000}
    //       modules={[Autoplay]}
    //       className='max-w-[90%]'
    //     >
    //       {items.map((item, index) => (
    //         <SwiperSlide key={index}>
    //           <div className='m-2 bg-[#000] px-3 border border-[#5fabfd] py-3 rounded-full items-center hover:bg-[#fff] duration-500 ease-in-out shadow-xl shadow-[#5fabfd]'>
    //             <Image src={item} alt={`Language ${index}`} />
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    // </div>
    <div className='w-full max-w-[1200px] mx-auto flex flex-col justify-center gap-10 h-full'>
      <h1 className='text-4xl font-bold mb-6 text-[#fff] text-center'>
        Skills <span className='text-[#963489]'>&</span> Technologies
      </h1>

      <div className='flex flex-wrap justify-center'>
        {items.map((item, index) => (
          <div
            key={index}
            className='m-2 bg-[#000] px-3 border border-[#5fabfd] py-3 items-center hover:bg-[#f1f0f0] duration-500 ease-in-out shadow-lg shadow-[#5fabfd] flex'
          >
            <Image src={item} alt={`Language ${index}`} width='80' />
          </div>
        ))}
      </div>
    </div>
  );
}
