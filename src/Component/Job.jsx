import React from 'react'
import {motion} from 'framer-motion'
const Job = () => {
  return (
    
    <motion.div
     initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1.5}}
    className='flex flex-col md:flex-row justify-around bg-slate-100 '>
      <div className='flex items-center justify-center flex-col gap- mb-5 mt-10'>
          <div className='flex items-center justify-center gap-1'>
          <h1 className='text-2xl fre'>Over</h1>
          <span className='text-6xl text-slate-600 font-bold fer '>500+</span>
          </div>
          <span>Products on Stock</span>
          
        </div>
         <div className='flex items-center justify-center flex-col gap- mb-5 mt-10'>
          <div className='flex items-center justify-center gap-1'>
          <h1 className='text-2xl fre'>Over</h1>
          <span className='text-6xl text-slate-600 font-bold fer '>3000+</span>
          </div>
          <span>Projects Accomplished</span>
          
        </div>
        <div className='flex items-center justify-center flex-col gap- mb-5 mt-10'>
          <div className='flex items-center justify-center gap-1'>
          <h1 className='text-1xl fre'>Trusted by</h1>
          <span className='text-6xl text-slate-600 font-bold fer'>900+</span>
          </div>
          <span>Customers in Nigeria </span>
          
        </div>
    </motion.div>
  )
}

export default Job
