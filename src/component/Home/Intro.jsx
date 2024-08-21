import React from 'react'
import Greeting from '../Greeting'

const Intro = () => {
  return (
    <section className='flex flex-col gap-5 items-start'>
      <section className='flex flex-col  items-center'>
        <Greeting/>
      </section>
      <div></div>
    </section>
  )
}

export default Intro

