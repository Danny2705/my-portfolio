import React from "react";
import Cat from "../app/src/cat-2.png";
import Image from "next/image";
import { FaProjectDiagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Form from "./Form";

export default function Contact() {
  return (
    <div className='p-5 max-w-[1200px] flex flex-col items-center justify-center mx-auto'>
      <div className='w-full flex flex-col gap-4'>
        <h1 className='text-7xl text-[#963489]'>Contact.</h1>
        <div className='flex justify-between items-center'>
          <div className='catContainer flex-1'>
            <Image src={Cat} alt='cat' priority />
          </div>
          <div className='flex-1 flex-col'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
