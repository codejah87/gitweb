import React from 'react'
import {motion } from 'framer-motion'
import { assert } from '../assets/imag/ImageFile'
const Hero2 = () => {

  return (
    <section>
        <div className=' w-full gap-6 flex flex-col lg:flex-row bg-slate-50 p-10 rounded-2xl'>
            <motion.div 
              initial={{opacity:0, scale:0.7}}
            whileInView={{opacity:1, scale:1}}  
            transition={{duration:1.5}}
        
            className='w-full h-110 rounded-2xl overflow-hidden'>
                <img src={assert.hero2} alt=""  className='w-full h-full '/>
            </motion.div>
            <motion.div
               initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}  
                transition={{duration:1.5}}
                className='flex flex-col sm:text-left w-full text-center  '>
                <p className='text-[var(--m2-c)] font-light '>Get Free energy today at Hakuna Matata</p>
                <div className='w-37 h-0.5 bg-[var(--m2-c)]' ></div>
                <h1 className='pop text-[25px] sm:text-4xl mt-6 font-bold  text-slate-800 leading-13'>Unlock Financial Freedom  with Solar Power</h1>

                <p className='text-slate-700 mt-3.5'>Tired of unpredictable electricity bills and contributing to environmental concerns? Harness the abundant power of the sun and transform your home or business into a source of clean, affordable energy. Our expertly designed solar solutions offer: <span className='text-indigo-600'>Significant Savings,</span> <span className='text-indigo-600'>Energy Independence,</span> <span className='text-indigo-600'>Increased Property Value</span></p>
                  <div className='flex gap-4 items-center justify-between mt-8'>
                        <div className='flex justify-between gap-3 bg-slate-50 px-5 py-3 items-center'>
                            <div className='p-2 inline-flex bg-amber-200 rounded-full items-center justify-center w-10 h-10 text-black text-2xl'>
                                <i class="ri-store-3-line"></i>
                            </div>
                            <h3>Over 1000 Product on Store</h3>
                        </div>
                  </div>
            </motion.div>
        </div>
    </section>
)
}

export default Hero2