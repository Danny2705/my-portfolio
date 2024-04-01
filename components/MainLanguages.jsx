"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <div className='w-full max-w-[1200px] mx-auto flex flex-col justify-center gap-10 h-full'>
      <h1 className='text-7xl font-bold mb-6 text-[#fff] text-center'>
        Skills <span className='text-[#963489]'>&</span> Technologies
      </h1>

      <div className='flex flex-wrap justify-center'>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='m-2 bg-[#000] px-3 border border-[#5fabfd] py-3 items-center hover:bg-[#f1f0f0] duration-500 ease-in-out shadow-lg shadow-[#5fabfd] flex'
          >
            <Image src={item} alt={`Language ${index}`} width='80' />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
