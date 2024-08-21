import React, { useState } from 'react'


const greetings = ['Hello, world', 'हैलो, वर्ल्ड'];
const Greeting = () => {
    const [hello , setHello] = useState(0);
  return (
    <div className='flex flex-col float-start'>
        <div>
            <p>{greetings[hello]}</p>
        </div>
    </div>
  )
}

export default Greeting
