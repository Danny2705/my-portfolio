import React from "react";
import Image from "next/image";
import Astronaut from "../app/src/header-img.svg";
import { Cursor } from "react-simple-typewriter";
import { MdOutlineSend } from "react-icons/md";

export default function SubHero({ text }) {
  return (
    <div className='flex justify-center p-5 gap-8 w-[1200px] mx-auto mt-10'>
      <div className='flex flex-col flex-1 gap-8'>
        <span className='text-xl tracking-wider uppercase font-semibold'>
          Danny Nguyen
        </span>
        <div className='flex flex-col font-bold font-serif text-8xl'>
          <span>I am a</span>
          <span className='text-[#963489]'>
            {text}
            <Cursor />
          </span>
        </div>
        <button className='flex items-center bg-[#5fabfd] text-[#963489] p-4 rounded-2xl w-44 gap-2 justify-center'>
          <MdOutlineSend size={20} />
          <span className='text-lg font-bold'>My Resume</span>
        </button>
      </div>

      <div className='flex-1'>
        <Image
          src={Astronaut}
          alt='astronaut'
          width={600}
          height={450}
          className='astronaut'
        />
      </div>
    </div>
  );
}
