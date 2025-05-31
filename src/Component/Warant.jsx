import React from 'react'
import { Link } from 'react-router'
import { assert } from '../assets/imag/ImageFile'
import {motion} from 'framer-motion'
const Warant = () => {
  return (
    <section>
       <motion.div
        initial={{opacity:0, scale:1.3}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration: 1.5}}
       className='w-full p-8 bg-blue-400 rounded-2xl  boreder '>
            <h1 className='text-6xl pop font-semibold text-white'>Get Your Best Offer in Hakuna Matata</h1>
            <p className='text-[19px] mt-8'>Rest assured, your purchase is protected by a comprehensive guarantee for a minimum of two years, ensuring your peace of mind and our commitment to quality.</p>
            <Link to='/contact'>
              <button className='mt-8 border border-white  py-3 text-white cursor-pointer  hover:-translate-y-1 transition px-10 text-1xl' >Contact Us</button>
            </Link>
       </motion.div>

       <motion.div 
        initial={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1.5}}
       className='w-full flex shadow-2xl mt-20 px-10 py-5 items-center justify-between md:flex-row flex-col'>
        <div className='w-full '>
          <p className=' md:text-3xl  lg:text-5xl text-slate-700 font-semibold'> Hakuna Matata Product are granted</p>
          <h1 className='text-blue-700 md:text-3xl lg:text-5xl my-3.5 font-semibold'>2 Years <span className='text-slate-400 text-3xl'>Warranty</span></h1>

          <div>
              <div className='mt-10 md:1.5xl lg:text-2xl'><i className="ri-verified-badge-fill text-green-700 p-2 rounded-md  border-[1px]"></i>    Our Products are 99.9% Original</div>
          </div>
          
        </div>

        <div className='w-full'>
          <img src={assert.check} alt="" className='w-full '/>
        </div>
      
       </motion.div>
   </section>
)
}

export default Warant