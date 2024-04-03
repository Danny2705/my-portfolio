import React from "react";
import Image from "next/image";
import Astronaut from "../app/src/header-img.svg";
import { Cursor } from "react-simple-typewriter";
import { MdOutlineSend } from "react-icons/md";
import { motion } from "framer-motion";

export default function SubHero({ text }) {
  return (
    <div className='subhero h-full flex justify-center px-5 gap-8 w-[1200px] mx-auto mt-10'>
      <div className='hero-left flex flex-col flex-1 gap-8 max-w-[528px]'>
        <motion.span
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className='dmsans name text-xl tracking-wider uppercase font-semibold w-full'
        >
          Danny Nguyen
        </motion.span>
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 2,
            type: "spring",
          }}
          className='flex flex-col gap-2 font-bold font-serif text-8xl'
        >
          <span className='dmsans auto-text'>I am a</span>
          <span className='dmsans auto-text text-[#963489]'>
            {text}
            <Cursor />
          </span>
        </motion.div>
        <motion.button
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 3,
            type: "spring",
          }}
          className='btn flex items-center bg-[#5fabfd] text-[#963489] p-4 rounded-2xl w-44 gap-2 justify-center'
        >
          <MdOutlineSend size={20} />
          <span className='btn-txt text-lg font-bold'>My Resume</span>
        </motion.button>
      </div>

      <motion.div
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        className='ast-container flex-1 max-w-[640px] max-h-[500px]'
      >
        <Image
          src={Astronaut}
          alt='astronaut'
          className='astronaut w-full h-full'
        />
      </motion.div>
    </div>
  );
}
