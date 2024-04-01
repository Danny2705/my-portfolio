"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Languages = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className='parallax'
      ref={ref}
      style={{
        background:
          type === "moon"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} className='poppins'>
        {type === "moon" ? "What I Learnt?" : "What I Had?"}
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div
        className='planets'
        style={{
          y: yBg,
          backgroundImage: `url(${
            type == "moon" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className='stars'></motion.div>
    </div>
  );
};

export default Languages;
