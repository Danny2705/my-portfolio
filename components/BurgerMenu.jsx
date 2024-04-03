import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaProjectDiagram } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";

const menuItems = [
  { icon: <LiaLaptopCodeSolid />, name: "Languages", href: "#languages" },
  { icon: <FaProjectDiagram />, name: "Projects", href: "#projects" },
  { icon: <MdOutlineWorkOutline />, name: "Experience", href: "#experience" },
  { icon: <IoSchoolOutline />, name: "Education", href: "#education" },
  { icon: <BiSolidContact />, name: "Contact", href: "#contact" },
  {
    icon: <FaGithub />,
    name: "GitHub",
    href: "https://github.com/Danny2705",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dat-nguyen-8ba665263/",
  },
];

export default function BurgerMenu({ setShowMenu }) {
  const smoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
      open: {
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.09,
          staggerDirection: 1,
        },
      },
    },
  };

  return (
    <div className='h-[100vh] flex justify-center items-center cursor-default'>
      <table className='mx-auto'>
        <tbody className='flex flex-col gap-4'>
          {menuItems.map((item, index) => (
            <motion.div
              variants={containerVars}
              initial='initial'
              animate='open'
              exit='initial'
              className='overflow-hidden'
            >
              <tr
                key={index}
                className='flex gap-4 hover:underline hover:text-[#963489] transition duration-500 ease-in-out'
              >
                <td>
                  <div>{item.icon}</div>
                </td>
                <td>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMenu(false);
                      smoothScroll(item.href.substring(1));
                    }}
                  >
                    <span className='text-[#5fabfd]'>{item.name}</span>
                  </a>
                </td>
              </tr>
            </motion.div>
          ))}
        </tbody>
      </table>
    </div>
  );
}
