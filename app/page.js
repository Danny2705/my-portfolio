"use client";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import MainLanguages from "@/components/MainLanguages";
import Projects from "@/components/Projects";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";
import BurgerMenu from "@/components/BurgerMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        transition: {
          duration: 0.7,
          ease: [0.37, 0, 0.63, 1],
        },
      },
    },
    open: {
      y: 0,
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  };
  return (
    <main className='h-full w-full poppins'>
      <section className='starfall' id='home'>
        <div className='burger-menu w-full text-3xl flex items-center cursor-pointer'>
          <AnimatePresence>
            {showMenu && (
              <motion.div
                variants={menuVars}
                initial='initial'
                animate='animate'
                exit='exit'
                className='h-[100vh] origin-top bg-black w-full p-4'
              >
                <div className='poppins logo text-3xl cursor-pointer flex justify-between'>
                  <h1 className='text-[#963489]'>Danny</h1>
                  <button onClick={toggleMenu}>
                    {showMenu ? <IoIosCloseCircle /> : <RxHamburgerMenu />}
                  </button>
                </div>
                <motion.div
                  variants={mobileLinkVars}
                  initial='initial'
                  animate='open'
                  className='transition-all duration-500 ease-in-out'
                >
                  <BurgerMenu setShowMenu={setShowMenu} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Hero showMenu={showMenu} toggleMenu={toggleMenu} />
      </section>
      <section>
        <Languages type='moon' />
      </section>
      <section className='lang' id='languages'>
        <MainLanguages />
      </section>
      <section>
        <Languages type='sun' />
      </section>
      <section id='projects' className='relative'>
        <Projects />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='education'>
        <Education />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </main>
  );
}
