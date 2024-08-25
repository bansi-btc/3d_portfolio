import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import {motion} from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../style'
import {experiences} from "../constants"
import SectionWrapper  from './SectionWrapper'
import { textVariant } from '../utils/motion'

const ExperienceCard=({title, company_name, date, iconBg, icon, points})=>{
  return (
    <VerticalTimelineElement
    contentStyle={{background:"#1d1836", color:"#fff"}}
    contentArrowStyle={{borderRight:"7px solid #232631"}}
    iconStyle={{background:iconBg}}
    date={date}
    icon={
      <div className='flex flex-col items-center justify-center h-full'>
        <img src={icon} alt={company_name} className='w-[60%] h-[60%] object-contain '/>
      </div>
    }>
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p style={{margin:0}} className='text-secondary text-[16px] font-semibold'>{company_name}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {points.map((point, idx)=>{
            return <li key={idx} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>What I have done so far</p>
      <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>

    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, idx)=>{
          return <ExperienceCard key={idx} {...experience}></ExperienceCard>
        })}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");