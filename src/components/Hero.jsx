import React, { useRef } from 'react'
import { HERO } from '../constants'
import '../index.css'
import { motion } from 'framer-motion'
import video from "../assets/universeVideo.mp4"
const Hero = () => {
  return (
    <section className='flex min-h-screen flex-wrap items-center'>
      {/* <div className='w-full h-fullopacity-100 lg:opacity-0'><div className='absolute rounded-full border-stone-50/70 bg-zinc-300 w-[2000px] h-[2000px]'></div></div> */}
      {/* <div className='absolute lg:hidden md:hidden h-screen w-full bg-cover bg-transparent'><video  src={video} auto muted></video></div> */}
        <motion.div 
            initial={{opacity:0 , x:-50}}
            animate={{opacity:1 , x:0}}
            transition={{duration:1}}
              className='w-full md:w-1/2'>
            <h2 className='Ankush mt-8 mb-2 text-4xl mx-1 font-bold md:text-5xl lg:text-[7rem]'>
                {HERO.name}
            </h2>
            <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>
                {HERO.greet}
            </p>
            <p className='mb-8 p-2 text-xl'>
                {HERO.description}
            </p>
        </motion.div>
          <motion.div
              initial={{ opacity: 0, scale: 0.0 }}
              animate={{opacity:1 , scale:1}}
              className='w-full md:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
              <motion.img
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                transition={{duration:1}} 
                src={HERO.AnkuImg}
                width={450}
                height={550}
                alt="ankushimg" 
                className='rounded'/>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero
