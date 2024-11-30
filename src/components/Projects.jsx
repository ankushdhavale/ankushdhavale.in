import React from 'react'
import { PROJECTS } from '../constants'
import { MdArrowOutward } from 'react-icons/md'
import {motion} from "framer-motion"
const Projects = () => {
  return (
    <section className='pt-10' id='projects'>
        <motion.h2
            initial={{opacity:0 , y:-20}}
            whileInView={{opacity:1 , y:0}}
            transition={{durattion:0.8}}
            className='mb-8 text-center text-3xl lg:text-4xl'>Projects</motion.h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {PROJECTS.map((project,index) => (
                  <motion.div
                    initial={{opacity:0 , scale:0.9}}
                    whileInView={{opacity:1 , scale:1}}
                    transition={{duration:0.5}}
                    whileHover={{scale:1.05}}
                    key={index} className=' border border-violet-900/30 p-[0.5px] group relative overflow-hidden rounded'>
                    <motion.img 
                        whileHover={{scale:1.1}}
                        src={project.image} alt={project.name}
                        className=' h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' />
                    <motion.div 
                        initial={{opacity:0}}
                        whileHover={{opacity:1}}
                        transition={{duration:0.5}}
                        className='absolute inset-0 flex flex-col items-center justify-center  text-black opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100'>
                        <h3 className='mb-1 text-xl'>{project.name}</h3>
                        <p className='mb-1 p-4'>{project.description}</p>
                        <a href={project.githubLink} target='_blank' rel='noopener noreferrer'
                         className='rounded bg-white px-3 py-1 text-black hover:bg-gray-500'>
                            <div className='flex items-center'>
                                <span>View on Github</span>
                                <MdArrowOutward/>
                            </div>
                         </a>
                    </motion.div>
                </motion.div>
            ))}
        </div>
        <div className='justify-center text-center items-center my-10'>
            <button className='border py-1 px-2 rounded border-stone-50/30 hover:bg-purple-950 cursor-pointer'><a href="https://github.com/ankushdhavale">More Projects</a></button>
        </div>
    </section>
  )
}

export default Projects
