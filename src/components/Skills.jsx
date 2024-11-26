import React from 'react'
import { SKILLS } from '../constants'

const Skills = () => {
  return (
    <div className='container mx-auto' id='skills'>
      <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>
        Skills
      </h2>
      <div className='mx-2 flex gap-4 flex-wrap lg:px-20'>
            {SKILLS.map((skill, index) => (
              <div key={index} className="py-2 flex items-center justify-between">
                  <div className='flex items-center border border-stone-50/30 rounded px-2'>
                    {skill.icon}
                      <h3 className='px-4 text-sm lg:text-2xl'>{skill.name}</h3>
                  </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Skills;
