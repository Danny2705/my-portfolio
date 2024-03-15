"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { FaProjectDiagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import SubHero from "./SubHero";
import Scroll from "../app/src/scroll.png";
import Image from "next/image";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";

function Hero() {
  const [text] = useTypewriter({
    words: ["Full-Time Student", "Software Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  // const textStyle = {
  //   color: "rgba(255, 255, 255, 0.5)",
  // };
  return (
    <div className='px-4 h-full'>
      <div className='flex justify-between'>
        <div className='text-xl'>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Danny
          </motion.h1>
        </div>

        <div className='menu flex justify-center flex-col'>
          <ul className=' h-[100vh] flex flex-col justify-center gap-14'>
            <Link
              href='#home'
              className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'
            >
              <span className='timeline-icon'>
                <CiHome />
              </span>
              <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                Home
              </span>
            </Link>
            <Link
              href='#languages'
              className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'
            >
              <span className='timeline-icon'>
                <LiaLaptopCodeSolid />
              </span>
              <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                Languages
              </span>
            </Link>
            <Link
              href='#projects'
              className='flex items-center text-[#5fabfd] p-2 rounded-lg cursor-pointer timeline-item '
            >
              <span className='timeline-icon'>
                <FaProjectDiagram />
              </span>
              <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                Projects
              </span>
            </Link>

            <Link
              href='#experience'
              className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'
            >
              <span className='timeline-icon'>
                <MdOutlineWorkOutline />
              </span>
              <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                Experience
              </span>
            </Link>
            <Link
              href='#education'
              className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'
            >
              <span className='timeline-icon'>
                <IoSchoolOutline />
              </span>
              <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                Education
              </span>
            </Link>
            <Link
              href='#contact'
              className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'
            >
              <span className='timeline-icon'>
                <BiSolidContact />
              </span>
              <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                Contact
              </span>
            </Link>
            <li className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'>
              <span className='timeline-icon'>
                <FaGithub />
              </span>
              <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                GitHub
              </span>
            </li>
            <li className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'>
              <span className='timeline-icon'>
                <FaLinkedin />
              </span>
              <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                LinkedIn
              </span>
            </li>
          </ul>
        </div>
      </div>

      <SubHero text={text} />

      <Link href='#languages'>
        <Image src={Scroll} alt='Mouse Scrol' className='mx-auto' />
      </Link>
    </div>
  );
}

export default Hero;
