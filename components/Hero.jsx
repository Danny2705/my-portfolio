"use client";
import React, { useState } from "react";
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
import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Hero({ showMenu, toggleMenu }) {
  const [text] = useTypewriter({
    words: ["Full-Time Student", "Software Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <div className='hero h-full'>
      <div className='flex justify-between px-4'>
        <div className='poppins logo text-3xl p-4 cursor-pointer flex justify-between w-full'>
          <h1>Danny</h1>
          <div className='px-10'>
            <button onClick={toggleMenu}>
              {showMenu ? <IoIosCloseCircle /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        {!showMenu && (
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
              <a
                href='https://github.com/Danny2705'
                target='_blank'
                className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'
              >
                <span className='timeline-icon'>
                  <FaGithub />
                </span>
                <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                  GitHub
                </span>
              </a>
              <a
                href='https://www.linkedin.com/in/dat-nguyen-8ba665263/'
                target='_blank'
                className='flex items-center gap-2 p-2 rounded-lg cursor-pointer timeline-item'
              >
                <span className='timeline-icon'>
                  <FaLinkedin />
                </span>
                <span className='timeline-text bg-black text-[#5fabfd] p-2 pr-6'>
                  LinkedIn
                </span>
              </a>
            </ul>
          </div>
        )}
      </div>

      <SubHero text={text} />

      <Link href='#languages'>
        <Image src={Scroll} alt='Mouse Scrol' className='mouse mx-auto' />
      </Link>
    </div>
  );
}

export default Hero;
