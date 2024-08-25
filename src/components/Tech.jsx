import React from 'react'
import { BallCanvas } from './canvas'
import SectionWrapper from './SectionWrapper'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row justify-center flex-wrap gap-10'>
      {technologies.map((tech , idx)=>{
        return <div key={idx} className='w-28 h-28'>
          <BallCanvas icon={tech.icon}/>
        </div>
      })}
    </div>
  )
}



export default SectionWrapper(Tech,"")