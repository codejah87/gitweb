import React from 'react'
import { assert } from '../assets/imag/ImageFile'
import Job from './Job'
import {motion} from 'framer-motion'
const Choose = () => {
  return (
    <div>
    <section className='bg-amber- p-6 flex  flex-col lg:flex-row  gap-3.5 mb-10
    '>
        <div className='flex flex-col lg:w-[60%] w-full '>
            <motion.div
              initial={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1.5}}
            >

            <p className='text-slate-700 text-sm'>Love working with us</p>
            <h1 className='font-bold text-4xl sm:text-5xl text-slate-900 pop'>Why Choose Us?</h1>
            </motion.div>


             <motion.div
              initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: 1.5}}
             className='flex mt-8 '>
                <div className='flex flex-col gap-5 items-center justify-between'>
                    <div className='flex gap-5'>
                        <h1 className='text-5xl text-blue-500 font-bold'>01</h1>
                        <div className='flex flex-col '>
                            <h3 className='text-1xl text-slate-800 mb-3 font-bold pop'>Focus on Expertise and Reliability</h3>
                            <p className='text-md text-slate-950'>
                            At <span className='text-blue-500'>Hakuna Matata, </span>
                           We prioritize clear communication, transparent pricing, and exceptional customer service every step of the way. 
                            </p>
                        </div>
                    </div>

                     <div className='flex gap-5'>
                        <h1 className='text-5xl text-blue-500 font-bold'>02</h1>
                        <div className='flex flex-col '>
                            <h3 className='text-1xl text-slate-800 mb-3 font-bold pop'>Focus on Customer Satisfaction and Local Understanding</h3>
                            <p className='text-md text-slate-950'>
                            At <span className='text-blue-500'>Hakuna Matata, </span>
                            We are committed to using only high-quality components and adhering to the highest industry standards, ensuring a solar system that performs optimally for years to come
                            </p>
                        </div>
                    </div>

                    
                     <div className='flex gap-5'>
                        <h1 className='text-5xl text-blue-500 font-bold'>03</h1>
                        <div className='flex flex-col '>
                            <h3 className='text-1xl text-slate-800 mb-3 font-bold pop'>Powering Nigeria One Satisfied Customer at a Time.</h3>
                            <p className='text-md text-slate-950'>
                            At <span className='text-blue-500'>Hakuna Matata, </span>
                            We are committed to using only high-quality components and adhering to the highest industry standards, ensuring a solar system that performs optimally for years to come
                            </p>
                        </div>
                    </div>

                </div>

            </motion.div>
            
        </div>
        <div className='h-100 flex flex-col  gap-4'>
                <motion.img  initial={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1.5}} src={assert.worker1} alt="" className='w-full h-70'/>
                <motion.img  initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1.5}} src={assert.woker2} alt="" className='w-full h-50' />
            </div>
    </section >
    <Job/>
    </div>
  )
}

export default Choose