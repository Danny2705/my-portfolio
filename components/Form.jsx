"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fbpmzob",
        "template_4v3mefu",
        form.current,
        "deE0O9l3s7UyYCN63"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
          // console.log("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className='form p-7 max-w-[513px] w-full'>
      <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
      <h1 className='text-5xl font-bold mb-[1rem]'>Get in Touch</h1>

      <div>
        <form className='flex flex-col gap-7' ref={form} onSubmit={sendEmail}>
          <div className='flex flex-col gap-2'>
            <label className='text-[#963489]'> Your Name</label>
            <input
              type='text'
              placeholder='Chris'
              className='p-3 bg-[#151030] outline-none rounded-md text-[#7c7795]'
              name='user_name'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[#963489]'> Your Email</label>
            <input
              type='text'
              placeholder='chrisalbert@gmail.com'
              className='p-3 bg-[#151030] outline-none rounded-md text-[#7c7795]'
              name='user_email'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[#963489]'> Your Message</label>
            <textarea
              type='text'
              placeholder='What would you like to talk about? Let me know what you think!'
              className='p-3 bg-[#151030] outline-none h-[120px] rounded-md text-[#7c7795]'
              name='message'
              required
            />
          </div>
          <input
            className='poppins font-semibold mx-auto bg-[#5fabfd] shadow-lg shadow-[#963489] w-fit flex p-3 rounded-sm text-black cursor-pointer'
            type='submit'
            placeholder='Send Message'
            value='Send Message'
          />
        </form>
      </div>
    </div>
  );
}
