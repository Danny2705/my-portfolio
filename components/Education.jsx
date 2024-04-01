"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import education from "../app/education.js";
import { textVariant } from "../utils/motion.js";

const Education = () => {
  return (
    <div className='p-5 max-w-[1200px] flex flex-col items-center justify-center mx-auto'>
      <div className='w-full'>
        <motion.div variants={textVariant()}>
          <h2 className='text-7xl'>Education 📚.</h2>
        </motion.div>
        <div className='mt-[2rem] flex flex-col'>
          <VerticalTimeline lineColor=''>
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                className='vertical-timeline-element--education'
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                  margin: 0,
                  borderWidth: 1,
                  borderColor: "#5fabfd",
                  boxShadow: "0 0 10px 0 #5fabfd",
                }}
                contentArrowStyle={{ borderRight: "7px solid #5fabfd" }}
                iconStyle={{ background: "#383E56" }}
                date={
                  <span
                    style={{
                      color: "yellow",
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    {edu.date}
                  </span>
                }
                // iconStyle={{ background: edu.iconBg }}
                visible={true}
                icon={
                  <div className='mr-6 mt-4'>
                    {edu.icon && (
                      <edu.icon style={{ width: "50px", height: "50px" }} />
                    )}
                  </div>
                }
              >
                <div className='my-2'>
                  <h3 className='text-[#963489] text-[1.5rem] font-bold'>
                    {edu.title}
                  </h3>
                  <p
                    className='text-secondary text-[1rem] font-semibold italic text-[#b22e61]'
                    style={{ margin: 0 }}
                  >
                    {edu.location}
                  </p>
                  <p className='text-[#7c7795]' style={{ margin: 0 }}>
                    {edu.course}
                  </p>
                </div>
                <span className='text-[#aead06]'>{edu.date}</span>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
