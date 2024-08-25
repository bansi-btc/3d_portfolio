import React from 'react'
import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import {styles} from "../style"
import { services } from '../constants'
import {fadeIn, textVariant} from "../utils/motion"
import SectionWrapper from "./SectionWrapper"

const ServiceCard = ({title, idx, icon})=>{
  return (
    <Tilt className="w-full xs:w-[250px] ">

      <motion.div
      variants={fadeIn("right", "spring", 0.5*idx, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

        <div
        options={{
          max:45,
          scale:1,
          speed:450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
           
           <img src={icon} alt="icon" className='w-16 h-16 object-contain' />
           <h3 className='text-white text-[20px] text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  // console.log(services)
  return (
    <>
    <motion.div
    variants={textVariant()}>

      <p className={`${styles.sectionSubText}`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
    </motion.div>
    
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
   I'm a skilled software developer with experience in C++, JavaScript, and Golang, and expertise in frameworks like React, Node.js, and Express. I specialize in creating intuitive user interfaces and robust backend systems, delivering scalable and user-friendly solutions. Let’s collaborate to turn your ideas into reality!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 justify-center lg:justify-start'>
      {services.map((service, idx)=>{
        return <ServiceCard key={idx} {...service}>{service.title}</ServiceCard>
      })}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");