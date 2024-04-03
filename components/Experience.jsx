"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import experiences from "../app/experiences.js";
import { textVariant } from "../utils/motion.js";

const Experience = () => {
  return (
    <div className='p-5 max-w-[1200px] flex flex-col items-center justify-center mx-auto'>
      <div className='w-full'>
        <motion.div variants={textVariant()} initial='hidden' animate='show'>
          <h2 className='exp-h2 lg-text text-7xl'>Work Experience 👨🏻‍💻.</h2>
        </motion.div>
        <div className='timeline-vertical mt-[3.5rem] flex flex-col'>
          <VerticalTimeline lineColor=''>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                className='vertical-timeline-element--education'
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                  borderWidth: 1,
                  borderColor: "#5fabfd",
                  boxShadow: "0 0 10px 0 #5fabfd",
                }}
                contentArrowStyle={{ borderRight: "7px solid #5fabfd" }}
                date={
                  <span
                    style={{
                      color: "yellow",
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    {experience.date}
                  </span>
                }
                iconStyle={{ background: experience.iconBg }}
                visible={true}
                icon={
                  <div className='exp-icon-container mr-6 mt-4'>
                    {experience.icon && (
                      <experience.icon
                        style={{ width: "50px", height: "50px" }}
                        className='exp-icon'
                      />
                    )}
                  </div>
                }
              >
                <div>
                  <h3 className='exp-title text-[#963489] text-[24px] font-bold'>
                    {experience.title}
                  </h3>
                  <p
                    className='exp-comp text-secondary text-[1rem] font-semibold italic text-[#b22e61]'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-2 list-disc ml-5 space-y-2'>
                  {experience.description.map((desc, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='exp-des text-[#7c7795] text-[14px] pl-1 tracking-wider'
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                <span className='exp-date text-[#aead06]'>
                  {experience.date}
                </span>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
