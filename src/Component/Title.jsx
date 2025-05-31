import React from 'react'
import {motion } from 'framer-motion'


const Title = ({head1 ,head2}) => {
  return (
    <div>
      <motion.h1
       initial={{y:-100}}
       transition={{duration:1.5}}
       whileInView={{y:0}}
      className='fer font-bold text-center text-4xl lg:text-5xl text-blue-800 '>{head1} <span className='text-gray-700 font-bold fer'>{head2}</span></motion.h1>
    </div>
  )
}

export default Title
