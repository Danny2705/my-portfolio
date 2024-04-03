"use client";
import React from "react";
import Cat from "../app/src/cat-2.png";
import Image from "next/image";
import Form from "./Form";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className='p-5 max-w-[1200px] flex flex-col items-center justify-center mx-auto'>
      <div className='w-full flex flex-col gap-4'>
        <h1 className='contact-h1 text-7xl text-[#963489]'>Contact.</h1>
        <div className='contact flex justify-between items-center'>
          <motion.div
            initial={{ x: "-7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className='catContainer flex-1'
          >
            <Image src={Cat} alt='cat' priority />
          </motion.div>
          <div className='form-input flex-1 flex-col'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
